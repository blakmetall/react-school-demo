import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Dropdown, Message, PageContainer, PageHeading, RenderContentWhen, RenderIf, SimpleModal } from '../../../components';
import { isRole } from '../../../helpers';
import CourseForumForm from './form';
import ForumsList from './forumsList';
import { deleteForum } from '../../../store/actions/forums';

const CourseForumsPage = ({ auth, course, forums, match }) => {
    const [enableEditForm, setEnableEditForm] = useState();
    const [editableItem, setEditableItem] = useState();

    const dispatch = useDispatch();

    const handleOnForumEditClick = forum => {
        setEditableItem(forum);
        setEnableEditForm(true);
    };

    const handleOnForumDeleteClick = forum => {
        if (forum && forum.id) {
            dispatch(deleteForum(forum.id));
        }
    };

    return (
        <div className="flex-grow-1">
            <PageHeading label="Foro" />
            <PageContainer contentPaddingClass="p-3 pt-4 pb-4">
                {/* content */}
                <RenderIf isTrue={isLoaded(course) && !isEmpty(course) && isRole('facilitator', auth && auth.role)}>
                    <Dropdown title="Crear Tema/Foro" icon="add" className="mb-4">
                        <CourseForumForm courseId={match.params.courseId} />
                    </Dropdown>
                </RenderIf>

                {/* loading */}
                <RenderContentWhen isTrue showSpinnerIf={!isLoaded(course)} stopSpinnerIf={isLoaded(course)} />

                {/* no records found */}
                <Message showIf={isLoaded(course) && isEmpty(course)} message="No se encontró el curso." />

                {/* forums list */}
                <RenderIf isTrue={isLoaded(forums) && !isEmpty(forums)}>
                    <ForumsList
                        forums={forums}
                        course={course}
                        onEditClick={handleOnForumEditClick}
                        onDeleteClick={handleOnForumDeleteClick}
                    />
                </RenderIf>
            </PageContainer>

            {/* update modal form */}
            <SimpleModal showIf={enableEditForm} onHide={() => setEnableEditForm(false)}>
                <CourseForumForm editableItem={editableItem} submitLabel="Actualizar" />
            </SimpleModal>
        </div>
    );
};

CourseForumsPage.propTypes = {
    auth: PropTypes.any,
    course: PropTypes.any,
    forums: PropTypes.any,
    match: PropTypes.any,
};

CourseForumsPage.defaultProps = {
    auth: undefined,
    course: undefined,
    forums: undefined,
    match: undefined,
};

const mapStateToProps = ({ auth, firestore }, { match }) => {
    const hasCourseId = match.params && match.params.courseId;
    const courseId = hasCourseId ? match.params.courseId : '';
    const isCourseLoaded = firestore.data.courses && firestore.data.courses[courseId];

    if (isCourseLoaded) {
        const course =
            firestore.data.courses && firestore.data.courses[courseId]
                ? { ...firestore.data.courses[courseId], id: courseId }
                : {};

        return {
            auth,
            course,
            forums: firestore.ordered.forums,
        };
    }

    return {};
};

const firestoreQuery = (state, { match }) => {
    const queries = [];

    if (match.params && match.params.courseId) {
        queries.push({ collection: 'courses', doc: match.params.courseId });

        queries.push({ collection: 'forums', where: [['courseId', '==', match.params.courseId]] });
    }

    return queries;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(CourseForumsPage);
