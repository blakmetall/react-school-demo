/* eslint-disable import/first */
import React, { lazy } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Layout from './components/layout';
import RouteWithLayout from './components/route-with-layout';

// session pages
const LoginPage = lazy(() => import('./views/session/login'));
const LogoutPage = lazy(() => import('./views/session/logout'));
const PrepareSessionPage = lazy(() => import('./views/session/prepare-session'));
const SetAccountPage = lazy(() => import('./views/session/set-account'));

// profile pages
const AccountSettingsPage = lazy(() => import('./views/profile/account'));
const PasswordChangePage = lazy(() => import('./views/profile/password-change'));

// dashboard tab
const AdminDashboardPage = lazy(() => import('./views/admin/dashboard'));

// administration tab
const AdminCountriesPage = lazy(() => import('./views/admin/countries'));
const AdminCorporateEntitiesPage = lazy(() => import('./views/admin/corporate-entities'));
const AdminBooksCategoriesPage = lazy(() => import('./views/admin/books'));
const AdminBookCategoryPage = lazy(() => import('./views/admin/books/category'));
const AdminBookPreviewPage = lazy(() => import('./views/admin/books/preview'));
const AdminBookPreviewPdfPage = lazy(() => import('./views/admin/books/preview/pdf'));
const AdminCoursesPage = lazy(() => import('./views/admin/courses'));
const AdminCoursesAssignationsPage = lazy(() => import('./views/admin/courses-assignations'));

// community tab
const AdminRegionalEntitiesPage = lazy(() => import('./views/admin/regional-entities'));
const AdminLearningCommunitiesPage = lazy(() => import('./views/admin/learning-communities'));
const AdminFacilitatorsPage = lazy(() => import('./views/admin/facilitators'));
const AdminLearningCommunityGroupsPage = lazy(() => import('./views/admin/learning-community-groups'));
const AdminGroupsParticipantsPage = lazy(() => import('./views/admin/groups-participants'));
const AdminFacilitatorsGroupsPage = lazy(() => import('./views/admin/facilitators-groups'));

// static pages
const CommonQuestionsPage = lazy(() => import('./views/static/common-questions'));
const ContactSupportPage = lazy(() => import('./views/static/contact-support'));
const HowItWorksPage = lazy(() => import('./views/static/how-it-works'));
const NotFoundPage = lazy(() => import('./views/static/not-found'));
const NoticePrivacyPage = lazy(() => import('./views/static/notice-privacy'));
const TermsAndConditionsPage = lazy(() => import('./views/static/terms-and-conditions'));
const UpdateProfileIdPage = lazy(() => import('./views/static/update-profile-id'));

// course pages
const CoursesPage = lazy(() => import('./views/courses'));
const CourseBookViewerPage = lazy(() => import('./views/courses/books/viewer'));
const CourseCategoriesPage = lazy(() => import('./views/courses/categories'));
const CoursePage = lazy(() => import('./views/courses/course'));
const CourseChatPage = lazy(() => import('./views/courses/chat'));
const CourseCalendarPage = lazy(() => import('./views/courses/calendar'));
const CourseRecordedClassesPage = lazy(() => import('./views/courses/recorded-classes'));
const CourseRecordedClassesWatchPage = lazy(() => import('./views/courses/recorded-classes/video-play'));
const CourseLiveClassesPage = lazy(() => import('./views/courses/live-classes'));
const CourseTutoringPage = lazy(() => import('./views/courses/tutoring'));
const CourseTasksPage = lazy(() => import('./views/courses/tasks'));
const CourseTaskPage = lazy(() => import('./views/courses/tasks/task-page'));
const FacilitatorTutoringTask = lazy(() => import('./views/courses/tasks/facilitator/task-page/task-tutoring'));
const CourseTeamTasksPage = lazy(() => import('./views/courses/team-tasks'));
const CourseTeamTaskTutoringFacilitatorPage = lazy(() => import('./views/courses/team-tasks/facilitator/tutoring'));
const CourseTeamTaskPage = lazy(() => import('./views/courses/team-tasks/participant/task-page'));
const CourseExamsPage = lazy(() => import('./views/courses/exams'));
const CourseUploadExamParticipantPage = lazy(() => import('./views/courses/exams/participant/exam-available-page'));
const CourseParticipantExamTutoringPage = lazy(() => import('./views/courses/exams/participant/exam-tutoring-page'));
const CourseExamAvailablePage = lazy(() => import('./views/courses/exams/participant/exam-selft-qualified-available-page'));
const CourseForumsPage = lazy(() => import('./views/courses/forums'));
const CourseForumPage = lazy(() => import('./views/courses/forums/forum'));
const CourseResultsPage = lazy(() => import('./views/courses/results'));
const CourseCertificatePage = lazy(() => import('./views/courses/certificate'));

// partial routes
const Partials = lazy(() => import('./views/partials/index'));
const MonthlyCalendarPage = lazy(() => import('./views/partials/second-phase/facilitator/calendar'));
const CourseRecordedClassesPageParticipant = lazy(() => import('./views/partials/second-phase/participant/recorded-classes'));
const CourseRecordedClassesPageFaciliator = lazy(() => import('./views/partials/second-phase/facilitator/recorded-classes'));
const PresentialClassesFacilitator = lazy(() => import('./views/partials/second-phase/facilitator/presential-classes'));
const PresentialClassesParticipant = lazy(() => import('./views/partials/second-phase/participant/presential-classes'));
const WatchClass = lazy(() => import('./views/partials/second-phase/video-play'));
const ConsultanciesFacilitator = lazy(() => import('./views/partials/second-phase/facilitator/consultancies'));
const ConsultanciesParticipant = lazy(() => import('./views/partials/second-phase/participant/consultancies'));
const FacilitatorTasksPage = lazy(() => import('./views/partials/second-phase/facilitator/tasks'));
const SelfQualifiedTask = lazy(() => import('./views/partials/second-phase/facilitator/tasks/self-qualified-task'));
const FacilitatorSeeTask = lazy(() => import('./views/partials/second-phase/facilitator/tasks/task'));
const FacilitatorTutoringTasks = lazy(() => import('./views/partials/second-phase/facilitator/tasks/task/tutoring'));
const ParticipantSeeTask = lazy(() => import('./views/partials/second-phase/participant/tasks/task'));
const ParticipantTaskPage = lazy(() => import('./views/partials/second-phase/participant/tasks'));
const participantTasksVizualizer = lazy(() => import('./views/partials/second-phase/participant/tasks/task-finalized'));
const FacilitatorTeamTasksPage = lazy(() => import('./views/partials/second-phase/facilitator/team-tasks'));
const TeamTaskTutoringFacilitatorPage = lazy(() => import('./views/partials/second-phase/facilitator/team-tasks/tutoring'));
const ParticipantTeamTasksPage = lazy(() => import('./views/partials/second-phase/participant/team-tasks'));
const ParticipantTeamTasksSeeAndUpTask = lazy(() => import('./views/partials/second-phase/participant/team-tasks/task'));
const ParticipantTeamGroupTasksFinalized = lazy(() => import('./views/partials/second-phase/participant/team-tasks/task/task-finalized'));
const ExamsFacilitatorPage = lazy(() => import('./views/partials/second-phase/facilitator/exams'));
const ExamsParticipantPage = lazy(() => import('./views/partials/second-phase/participant/exams'));
const UploadExamParticipant = lazy(() => import('./views/partials/second-phase/participant/exams/exam'));
const ParticipantExamTutoring = lazy(() => import('./views/partials/second-phase/participant/exams/exam/exam-finalized'));
const ResultsTablePage = lazy(() => import('./views/partials/second-phase/facilitator/results-table'));
const ResultsTableUpdateQualificationsPage = lazy(() => import('./views/partials/second-phase/facilitator/results-table-update-qualifications'));
const PrivilegesTablePage = lazy(() => import('./views/partials/second-phase/privileges-tables'));
const ExamAvailablePage = lazy(() => import('./views/partials/second-phase/participant/exams/exam-available'));
const ExamFinalizedPage = lazy(() => import('./views/partials/second-phase/participant/exams/exam-finalized'));
import LicensesGeneralPage from './views/partials/third-phase/general';
import ChartsTemplatePage from './views/partials/third-phase/charts-layout-template';
import BreackdownTemplatePage from './views/partials/third-phase/breakdown-layout-template';


const AppRoutes = () => {
    return (
        <Switch>
            {/* session routes */}
            <RouteWithLayout exact path="/" component={LoginPage} />
            <RouteWithLayout exact path="/salir" component={LogoutPage} />
            <RouteWithLayout
                exact
                path="/preparar-sesion"
                component={PrepareSessionPage}
                requiresAuth
                requiresSessionData={false}
            />
            <RouteWithLayout exact path="/set-account/:email/:token" component={SetAccountPage} />

            {/* static routes */}
            <RouteWithLayout exact path="/preguntas-frecuentes" component={CommonQuestionsPage} layout={Layout} />
            <RouteWithLayout exact path="/contacto-soporte" component={ContactSupportPage} layout={Layout} />
            <RouteWithLayout exact path="/como-funciona" component={HowItWorksPage} layout={Layout} />
            <RouteWithLayout exact path="/404" component={NotFoundPage} />
            <RouteWithLayout exact path="/aviso-privacidad" component={NoticePrivacyPage} layout={Layout} />
            <RouteWithLayout exact path="/terminos-condiciones" component={TermsAndConditionsPage} layout={Layout} />
            <RouteWithLayout exact path="/update-profile" component={UpdateProfileIdPage} />

            {/* profile routes */}
            <RouteWithLayout exact path="/cuenta" component={AccountSettingsPage} layout={Layout} />
            <RouteWithLayout exact path="/cuenta/contrasena" component={PasswordChangePage} layout={Layout} />

            {/* admin: administration tab */}
            <RouteWithLayout exact path="/admin/dashboard" component={AdminDashboardPage} layout={Layout} requiresAuth />
            <RouteWithLayout exact path="/admin/paises" component={AdminCountriesPage} layout={Layout} requiresAuth />
            <RouteWithLayout
                exact
                path="/admin/entidades-corporativas"
                component={AdminCorporateEntitiesPage}
                layout={Layout}
                requiresAuth
            />
            <RouteWithLayout exact path="/admin/libros/categorias" component={AdminBooksCategoriesPage} layout={Layout} />
            <RouteWithLayout exact path="/admin/libros/categoria/:categoryId" component={AdminBookCategoryPage} layout={Layout} />
            <RouteWithLayout
                exact
                path="/admin/libros/categoria/:categoryId/:new"
                component={AdminBookCategoryPage}
                layout={Layout}
            />
            <RouteWithLayout exact path="/admin/libro/:bookId/visualizar" component={AdminBookPreviewPage} layout={Layout} />
            <RouteWithLayout
                exact
                path="/admin/libro/:bookId/visualizar/pdf"
                component={AdminBookPreviewPdfPage}
                layout={Layout}
            />
            <RouteWithLayout exact path="/admin/cursos" component={AdminCoursesPage} layout={Layout} requiresAuth />
            <RouteWithLayout
                exact
                path="/admin/cursos/asignaciones"
                component={AdminCoursesAssignationsPage}
                layout={Layout}
                requiresAuth
            />

            {/* admin: community tab */}
            <RouteWithLayout
                exact
                path="/admin/entidades-regionales"
                component={AdminRegionalEntitiesPage}
                layout={Layout}
                requiresAuth
            />
            <RouteWithLayout
                exact
                path="/admin/comunidades-de-aprendizaje"
                component={AdminLearningCommunitiesPage}
                layout={Layout}
                requiresAuth
            />
            <RouteWithLayout exact path="/admin/facilitadores" component={AdminFacilitatorsPage} layout={Layout} requiresAuth />
            <RouteWithLayout
                exact
                path="/admin/grupos"
                component={AdminLearningCommunityGroupsPage}
                layout={Layout}
                requiresAuth
            />
            <RouteWithLayout
                exact
                path="/admin/participantes"
                component={AdminGroupsParticipantsPage}
                layout={Layout}
                requiresAuth
            />
            <RouteWithLayout
                exact
                path="/admin/facilitadores/asignaciones"
                component={AdminFacilitatorsGroupsPage}
                layout={Layout}
                requiresAuth
            />

            {/* course routes */}
            <RouteWithLayout exact path="/cursos" component={CoursesPage} layout={Layout} requiresAuth />
            <RouteWithLayout exact path="/cursos/:categoryId" component={CourseCategoriesPage} layout={Layout} />
            <RouteWithLayout exact path="/curso/:courseId/calendario" component={CourseCalendarPage} layout={Layout} />
            <RouteWithLayout exact path="/curso/:courseId" component={CoursePage} layout={Layout} />
            <RouteWithLayout exact path="/curso/:courseId/libro/:bookId" component={CourseBookViewerPage} layout={Layout} />
            <RouteWithLayout
                exact
                path="/curso/:courseId/clases-grabadas/:recordedClassId"
                component={CourseRecordedClassesWatchPage}
                layout={Layout}
            />
            <RouteWithLayout
                exact
                path="/curso/:courseId/clases-grabadas"
                component={CourseRecordedClassesPage}
                layout={Layout}
            />
            <RouteWithLayout
                exact
                path="/curso/:courseId/clases-presenciales"
                component={CourseLiveClassesPage}
                layout={Layout}
            />
            {/* course tutoring */}
            <RouteWithLayout exact path="/curso/:courseId/asesorias" component={CourseTutoringPage} layout={Layout} />
            {/*course tasks */}
            <RouteWithLayout exact path="/curso/:courseId/tareas" component={CourseTasksPage} layout={Layout} />
            <RouteWithLayout exact path="/curso/:courseId/tarea/:taskId" component={CourseTaskPage} layout={Layout} />
            <RouteWithLayout exact path="/curso/:courseId/tarea/:taskId/retroalimentacion" component={FacilitatorTutoringTask} layout={Layout} />
            {/*course team tasks */}
            <RouteWithLayout exact path="/curso/:courseId/tareas-en-equipo" component={CourseTeamTasksPage} layout={Layout} />
            <RouteWithLayout exact path="/curso/:courseId/tareas-en-equipo/:teamTaskId" component={CourseTeamTaskPage} layout={Layout} />
            <RouteWithLayout exact path="/curso/:courseId/tareas-en-equipo/:teamTaskId/retroalimentacion" component={CourseTeamTaskTutoringFacilitatorPage} layout={Layout} />
            {/*course exams */}
            <RouteWithLayout exact path="/curso/:courseId/examenes" component={CourseExamsPage} layout={Layout} />
            <RouteWithLayout exact path="/curso/:courseId/examenes/:examId/subir" component={CourseUploadExamParticipantPage} layout={Layout} />
            <RouteWithLayout exact path="/curso/:courseId/examenes/:examId/retroalimentacion" component={CourseParticipantExamTutoringPage} layout={Layout} />            
            <RouteWithLayout exact path="/curso/:courseId/examenes/:examId/examen-auto-calificado" component={CourseExamAvailablePage} layout={Layout} />            
            {/*course chat */}
            <RouteWithLayout exact path="/curso/:courseId/chat/general" component={CourseChatPage} layout={Layout} />
            <RouteWithLayout exact path="/curso/:courseId/chat/foros" component={CourseForumsPage} layout={Layout} />
            <RouteWithLayout exact path="/curso/:courseId/chat/foro/:forumId" component={CourseForumPage} layout={Layout} />
            {/*course results table */}
            <RouteWithLayout exact path="/curso/:courseId/resultados" component={CourseResultsPage} layout={Layout} />
            <RouteWithLayout exact path="/curso/:courseId/certificado" component={CourseCertificatePage} layout={Layout} />

            {/** ******** ************** *************** */}
            {/** ******** begin: partials routes ******* */}
            {/** ******** ************** *************** */}

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

            {/* team tasks facilitator */}
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
            {/* vista de visualizacion del exmane para el facilitador no definida */}
            {/* pendiente copiar la vista de la visualizacion del examen de participantes y enlazarlo a la lista de examenes de facilitador */}

            {/* lstado examenes - participante */}
            <RouteWithLayout path="/curso/:courseId/participant/exams" exact component={ExamsParticipantPage} layout={Layout} />
            {/* subir examen */}
            <RouteWithLayout path="/curso/:courseId/participant/examId" exact component={UploadExamParticipant} layout={Layout} />
            {/*  */}
            <RouteWithLayout
                path="/curso/:courseId/participant/exam-tutoring"
                exact
                component={ParticipantExamTutoring}
                layout={Layout}
            />

            {/* exam available url */}
            <RouteWithLayout
                path="/curso/:courseId/participant/exam/exam-url"
                exact
                component={ExamAvailablePage}
                layout={Layout}
            />

            {/* exam finalized url */}
            <RouteWithLayout
                path="/curso/:courseId/participant/exam-tutoring/exam-url"
                exact
                component={ExamFinalizedPage}
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

            {/* 3rth phase */}
            {/* Menu Cards */}
            <RouteWithLayout path="/licenses/general" component={LicensesGeneralPage} layout={Layout} />
            {/* Charts Layout Template */}
            <RouteWithLayout path="/licenses/charts-layout-template" component={ChartsTemplatePage} layout={Layout} />

            {/* Charts Layout Template */}
            <RouteWithLayout path="/licenses/Breackdown-layout-template" component={BreackdownTemplatePage} layout={Layout} />

            {/** ******** ************** *************** */}
            {/** ******** end: partials routes ********* */}
            {/** ******** ************** *************** */}

            {/* default */}
            <Redirect to="/404" />
        </Switch>
    );
};

export default AppRoutes;
