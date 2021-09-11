import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Message, PageContainer, PageHeading, RenderIf, Spinner } from '../../components';
import CourseRows from './courseRows';

const CoursesPage = ({ courses }) => {
    return (
        <div className=" h-100">
            <PageHeading label="Cursos" />
            <PageContainer contentPaddingClass="p-3">
                {/* courses list */}
                <RenderIf isTrue={isLoaded(courses)}>
                    <CourseRows courses={courses} />
                </RenderIf>

                {/* spinner on load */}
                <RenderIf isTrue={!isLoaded(courses)}>
                    <Spinner />
                </RenderIf>

                {/* not found message */}
                <RenderIf isTrue={isLoaded(courses) && isEmpty(courses)}>
                    <Message message="No se encontraron cursos." />
                </RenderIf>
            </PageContainer>
        </div>
    );
};

CoursesPage.propTypes = {
    courses: PropTypes.array,
};

CoursesPage.defaultProps = {
    courses: undefined,
};

const mapStateToProps = state => ({
    courses: state.firestore.ordered.courses,
});

const enhance = compose(
    connect(mapStateToProps),
    firestoreConnect(() => [{ collection: 'courses' }]),
);

export default enhance(CoursesPage);
