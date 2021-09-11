import React from 'react';
import { Layout, RouteWithLayout } from '../../components';
import Partials from './index';
import MonthlyCalendarPage from './second-phase/facilitator/calendar';
import CourseRecordedClassesPageParticipant from './second-phase/participant/recorded-classes';
import CourseRecordedClassesPageFaciliator from './second-phase/facilitator/recorded-classes';
import PresentialClassesFacilitator from './second-phase/facilitator/presential-classes';
import PresentialClassesParticipant from './second-phase/participant/presential-classes';
import WatchClass from './second-phase/video-play';
import ConsultanciesFacilitator from './second-phase/facilitator/consultancies';
import ConsultanciesParticipant from './second-phase/participant/consultancies';
import FacilitatorTasksPage from './second-phase/facilitator/tasks';
import SelfQualifiedTask from './second-phase/facilitator/tasks/self-qualified-task';
import FacilitatorSeeTask from './second-phase/facilitator/tasks/task';
import FacilitatorTutoringTasks from './second-phase/facilitator/tasks/task/tutoring';
import ParticipantSeeTask from './second-phase/participant/tasks/task';
import ParticipantTaskPage from './second-phase/participant/tasks';
import participantTasksVizualizer from './second-phase/participant/tasks/task-finalized';
import FacilitatorTeamTasksPage from './second-phase/facilitator/team-tasks';
import TeamTaskTutoringFacilitatorPage from './second-phase/facilitator/team-tasks/tutoring';
import ParticipantTeamTasksPage from './second-phase/participant/team-tasks';
import ResultsTablePage from './second-phase/facilitator/results-table';
import ResultsTableUpdateQualificationsPage from './second-phase/facilitator/results-table-update-qualifications';
import PrivilegesTablePage from './second-phase/privileges-tables';
import ParticipantTeamTasksSeeAndUpTask from './second-phase/participant/team-tasks/task';
import ParticipantTeamGroupTasksFinalized from './second-phase/participant/team-tasks/task/task-finalized';
import ExamsFacilitatorPage from './second-phase/facilitator/exams';
import ExamsParticipantPage from './second-phase/participant/exams';
import ParticipantExamTutoring from './second-phase/participant/exams/exam/exam-finalized';
import UploadExamParticipant from './second-phase/participant/exams/exam';

const PartialsRoutes = () => {
    return (
        <div>
            {/* index */}
            <RouteWithLayout path="/partials" component={Partials} layout={Layout} />
            {/* calendar */}
            <RouteWithLayout
                path="/curso/:courseId/facilitator-and-participants/calendar"
                component={MonthlyCalendarPage}
                layout={Layout}
            />
            {/* recorded classes facilitator */}
            <RouteWithLayout
                path="/curso/:courseId/facilitator/recorded-classes"
                component={CourseRecordedClassesPageFaciliator}
                layout={Layout}
            />
            {/* recorded classes participant */}
            <RouteWithLayout
                path="/curso/:courseId/participant/recorded-classes"
                component={CourseRecordedClassesPageParticipant}
                layout={Layout}
            />
            {/* recorded classes video - participant */}
            <RouteWithLayout
                path="/curso/:courseId/participant-and-facilitator/recorded-classes/video"
                component={WatchClass}
                layout={Layout}
            />
            {/* presential classes facilitator */}
            <RouteWithLayout
                path="/curso/:courseId/facilitator/presential-classes"
                component={PresentialClassesFacilitator}
                layout={Layout}
            />
            {/* presential classes participant */}
            <RouteWithLayout
                path="/curso/:courseId/participant/presential-classes"
                component={PresentialClassesParticipant}
                layout={Layout}
            />
            {/* presential classes video -  participant & facilitator  */}
            <RouteWithLayout
                path="/curso/:courseId/participant-and-facilitator/presential-classes-and-recorded-classes/video"
                component={WatchClass}
                layout={Layout}
            />
            {/* consultancies facilitator */}
            <RouteWithLayout
                path="/curso/:courseId/facilitator/consultancies"
                component={ConsultanciesFacilitator}
                layout={Layout}
            />
            {/* consultancies  participant */}
            <RouteWithLayout
                path="/curso/:courseId/participant/consultancies"
                component={ConsultanciesParticipant}
                layout={Layout}
            />
            {/* tasks facilitator */}
            <RouteWithLayout path="/curso/:courseId/facilitator/tasks" component={FacilitatorTasksPage} layout={Layout} />
            <RouteWithLayout path="/curso/:courseId/facilitator/taskId" component={FacilitatorSeeTask} layout={Layout} />
            <RouteWithLayout
                path="/curso/:courseId/facilitator/self-qualified-tasks"
                component={SelfQualifiedTask}
                layout={Layout}
            />
            <RouteWithLayout
                path="/curso/:courseId/facilitator/facilitator-feedback-raiting"
                component={FacilitatorTutoringTasks}
                layout={Layout}
            />
            {/* tasks  participant */}
            <RouteWithLayout path="/curso/:courseId/participant/tasks" component={ParticipantTaskPage} layout={Layout} />
            <RouteWithLayout path="/curso/:courseId/participant/taskId" component={ParticipantSeeTask} layout={Layout} />
            <RouteWithLayout
                path="/curso/:courseId/participant/participant-task-finalized"
                component={participantTasksVizualizer}
                layout={Layout}
            />
            {/* team-tasks facilitator */}
            <RouteWithLayout
                path="/curso/:courseId/facilitator/team-tasks"
                component={FacilitatorTeamTasksPage}
                layout={Layout}
            />
            {/* team-tasks-tutoring facilitator */}
            <RouteWithLayout
                path="/curso/:courseId/facilitator/team-tasks-tutoring"
                component={TeamTaskTutoringFacilitatorPage}
                layout={Layout}
            />
            {/* vista del participante  - participante */}
            <RouteWithLayout
                path="/curso/:courseId/participant/team-tasks"
                component={ParticipantTeamTasksPage}
                layout={Layout}
            />
            {/* vista de la tarea disponible - participante */}

            <RouteWithLayout
                path="/curso/:courseId/participant/teamtasks/taskId"
                exact
                component={ParticipantTeamTasksSeeAndUpTask}
                layout={Layout}
            />
            {/* tarea finalizada - retroalimentacion  - participante */}
            <RouteWithLayout
                path="/curso/:courseId/participant/teamtasks/task-finalized"
                exact
                component={ParticipantTeamGroupTasksFinalized}
                layout={Layout}
            />

            {/* examenes - facilitador */}
            <RouteWithLayout path="/curso/:courseId/facilitator/exams" exact component={ExamsFacilitatorPage} layout={Layout} />
            {/* pendiente copiar la vista de la visualizacion del examen de participantes y enlazarlo a la lista de examenes de facilitador */}

            {/* examenes - participante */}
            <RouteWithLayout path="/curso/:courseId/participant/exams" exact component={ExamsParticipantPage} layout={Layout} />
            <RouteWithLayout path="/curso/:courseId/participant/examId" exact component={UploadExamParticipant} layout={Layout} />
            <RouteWithLayout
                path="/curso/:courseId/participant/exam-tutoring"
                exact
                component={ParticipantExamTutoring}
                layout={Layout}
            />

            {/* results-table facilitator */}
            <RouteWithLayout path="/curso/:courseId/facilitator/results-table" component={ResultsTablePage} layout={Layout} />
            <RouteWithLayout
                path="/curso/:courseId/facilitator/results-table-update-qualification"
                component={ResultsTableUpdateQualificationsPage}
                layout={Layout}
            />

            {/* privileges-table - admin */}
            <RouteWithLayout
                path="/curso/:courseId/facilitator/privileges-table"
                component={PrivilegesTablePage}
                layout={Layout}
            />
        </div>
    );
};

export default PartialsRoutes;
