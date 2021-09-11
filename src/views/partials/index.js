import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PageContainer } from '../../components';
import ColorFlags from './color-flags';

const Partials = () => {
    return (
        <div className="flex-grow-1 h-100">
            <PageContainer contentPaddingClass="px-3 px-md-5 py-5">
                <Container>
                    <div>
                        <h1 className="display-4 text-center text-gray-400 mb-3 ">Segunda Fase</h1>
                    </div>
                    <ColorFlags />

                    <div className="list-group">
                        {/* Calendar */}
                        <Link
                            to="/curso/:courseId/facilitator-and-participants/calendar"
                            className="list-group-item list-group-item-action "
                        >
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-green mb-1">Calendario | 100% </h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Facilitador - Participantes </p>
                            <small>Calendario de actividades para participantes y facilitadores.</small>
                        </Link>

                        {/* clases grabadas */}
                        <Link
                            to="/curso/:courseId/facilitator/recorded-classes"
                            className="list-group-item list-group-item-action"
                        >
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-info mb-1">Clases Grabadas | 100%</h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Facilitador </p>
                            <small className="text-muted">Vista de clases grabadas. form - listado</small>
                        </Link>

                        <Link
                            to="/curso/:courseId/participant/recorded-classes"
                            className="list-group-item list-group-item-action"
                        >
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-info mb-1">Clases Grabadas | 100%</h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Participantes. </p>
                            <small className="text-muted">Vista de clases grabadas. form - listado</small>
                        </Link>

                        {/* Clases presenciales facilitador */}
                        <Link
                            to="/curso/:courseId/facilitator/presential-classes"
                            className="list-group-item list-group-item-action"
                        >
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-primary mb-1">Clases Presenciales | 90%</h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Facilitador</p>
                            <small className="text-muted">formulario y listado de clases presenciales para el facilitador.</small>
                        </Link>

                        {/* Clases presenciales participante */}
                        <Link
                            to="/curso/:courseId/participant/presential-classes"
                            className="list-group-item list-group-item-action"
                        >
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-info mb-1">Clases Presenciales | 100%</h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Participantes</p>
                            <small className="text-muted">listado de clases presenciales para el participante. </small>
                        </Link>

                        {/* Asesorias facilitador */}
                        <Link to="/curso/:courseId/facilitator/consultancies" className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-info mb-1">Asesorias | 100%</h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Facilitador</p>
                            <small className="text-muted">listado de clases presenciales para el participante. </small>
                        </Link>

                        {/* Asesorias participante */}
                        <Link to="/curso/:courseId/participant/consultancies" className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-primary mb-1">Asesorias | 100%</h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Participantes</p>
                            <small className="text-muted">listado de clases presenciales para el participante. </small>
                        </Link>

                        {/* Tareas Facilitador */}
                        <Link to="/curso/:courseId/facilitator/tasks" className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-gray-500 mb-1">Tareas | 100%</h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Facilitador</p>
                            <small className="text-muted">formulario para agregar tareas, listado de tareas. </small>
                        </Link>

                        {/* Tareas participante */}
                        <Link to="/curso/:courseId/participant/tasks" className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-gray-500 mb-1">Tareas | 100%</h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Participantes</p>
                            <small className="text-muted">formulario para agregar tareas, listado de tareas. </small>
                        </Link>

                        {/* Tareas en equipo - facilitator */}
                        <Link to="/curso/:courseId/facilitator/team-tasks" className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-gray-500 mb-1">Tareas en equipo</h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Facilitador| 100%</p>
                            <small className="text-muted">
                                formulario para agregar tareas en equipo, listado y visualizacion de las tareas
                            </small>
                        </Link>

                        {/* Tareas en equipo - participante */}
                        <Link to="/curso/:courseId/participant/team-tasks" className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-gray-500 mb-1">Tareas en equipo </h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Participantes | 100%</p>
                            <small className="text-muted">listado y visualizacion de las tareas</small>
                        </Link>

                        {/* examenes - facilitador */}
                        <Link to="/curso/:courseId/facilitator/exams" className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-gray-500 mb-1">Examenes </h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Facilitador | 100%</p>
                            <small className="text-muted">listado y visualizacion de las tareas</small>
                        </Link>

                        {/* examenes - participante */}
                        <Link to="/curso/:courseId/participant/exams" className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-gray-500 mb-1">Examenes | 100%</h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Participantes</p>
                            <small className="text-muted">listado y visualizacion de las tareas</small>
                        </Link>

                        <Link to="/curso/:courseId/participant/exam/exam-url" className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-gray-500 mb-1">Examenes Disponible </h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Participantes</p>
                            <small className="text-muted">El participante accede al examen mediante una url compartida</small>
                        </Link>

                        <Link
                            to="/curso/:courseId/participant/exam-tutoring/exam-url"
                            className="list-group-item list-group-item-action"
                        >
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-gray-500 mb-1">Examenes Finalizado</h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Participantes</p>
                            <small className="text-muted">El participante accede al examen mediante una url compartida</small>
                        </Link>

                        {/* Tabla de resultados - facilitator */}
                        <Link to="/curso/:courseId/facilitator/results-table" className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-gray-500 mb-1">Tabla de resultados | 100%</h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Facilitador</p>
                            <small className="text-muted">tabla para agregar calificiónes.</small>
                        </Link>

                        {/* Tabla de privilegios - facilitator */}
                        <Link
                            to="/curso/:courseId/facilitator/privileges-table"
                            className="list-group-item list-group-item-action mb-4"
                        >
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="app-font-20 text-gray-500 mb-1">Tabla de privilegios | 100%</h4>
                            </div>
                            <p className="app-font-16 mb-1">Plataformas: Admin</p>
                            <small className="text-muted">tabla para ver los privilegios del rol del usuario.</small>
                        </Link>
                    </div>

                    {/* ──── 3era Fase  ────────────────────────────────────────────────────────────────────────────────── */}
                    <div>
                        <h1 className="display-4 text-center text-gray-400 mb-3 ">Tercera Fase</h1>
                    </div>

                    {/* Menu cards */}
                    <Link to="/licenses/general" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h4 className="app-font-20 text-gray-500 mb-1">Menú secundario para ver las gráficas</h4>
                        </div>
                        <p className="app-font-16 mb-1" />
                    </Link>

                    {/* chart layout template */}
                    <Link to="/licenses/charts-layout-template" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h4 className="app-font-20 text-gray-500 mb-1">Template-layout para las gráficas</h4>
                        </div>
                        <p className="app-font-16 mb-1" />
                    </Link>

                    {/* Breackdown table layout template */}
                    <Link to="/licenses/Breackdown-layout-template" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h4 className="app-font-20 text-gray-500 mb-1">Template-layout para los desgloses</h4>
                        </div>
                        <p className="app-font-16 mb-1" />
                    </Link>
                </Container>
            </PageContainer>
        </div>
    );
};

export default Partials;
