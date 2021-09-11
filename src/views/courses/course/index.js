import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Message, PageContainer, PageHeading, RenderIf, Spinner } from '../../../components';
import { BooksGrid } from '../books';

const CoursePage = ({ course }) => {
    const [headingTitle, setHeadingTitle] = useState('...');

    useEffect(() => {
        if (course) {
            setHeadingTitle(course.name);
        }
    }, [course]);

    return (
        <div className="flex-grow-1">
            <PageHeading label={headingTitle} />
            <PageContainer contentPaddingClass="p-5">
                {/* books presentation */}
                <RenderIf isTrue={isLoaded(course) && !!course.booksIds}>
                    <BooksGrid booksIds={course.booksIds} />
                </RenderIf>

                {/* spinner on load */}
                <RenderIf isTrue={!isLoaded(course)}>
                    <Spinner />
                </RenderIf>

                {/* not found message */}
                <RenderIf isTrue={isLoaded(course) && isEmpty(course)}>
                    <Message message="No se encontraró el curso." />
                </RenderIf>
            </PageContainer>
        </div>
    );
};

CoursePage.propTypes = {
    course: PropTypes.object,
};

CoursePage.defaultProps = {
    course: {},
};

const mapStateToProps = (state, { match }) => {
    const { params } = match;
    const courseId = params.courseId || '';
    const courseRef = `course-${courseId}`;

    const item = state.firestore.data[courseRef];

    return {
        course: item,
    };
};

const enhance = compose(
    connect(mapStateToProps),
    firestoreConnect(({ match }) => {
        const { params } = match;
        const courseId = params.courseId || '';
        const courseRef = `course-${courseId}`;

        return [{ collection: 'courses', doc: courseId, storeAs: courseRef }];
    }),
);

export default enhance(CoursePage);
