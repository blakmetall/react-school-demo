import React from 'react';
import { StyledTable, StyledCard } from './styled';

const PrivilegesTable = () => {
    return (
        <StyledCard className="p-0 rounded-15">
            <StyledTable className="table-responsive rounded-15">
                <table className="table borderless table-hover">
                    <thead className="bg-info">
                        <tr>
                            <th scope="col"> </th>
                            <th className="app-font-14 font-weight-500 text-white" scope="col">
                                País
                            </th>
                            <th className="app-font-14 font-weight-500 text-white" scope="col">
                                Entidad Corporativa
                            </th>
                            <th className="app-font-14 font-weight-500 text-white" scope="col">
                                Entidad Regional
                            </th>
                            <th className="app-font-14 font-weight-500 text-white" scope="col">
                                Comunidad de aprendizaje
                            </th>
                            <th className="app-font-14 font-weight-500 text-white" scope="col">
                                Facilitadores
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <th scope="row">1</th> */}
                            <td>
                                <div>Lorem Name</div>
                                <div>lorememail@gmail.com</div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div>Lorem Name</div>
                                <div>lorememail@gmail.com</div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>{' '}
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>{' '}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Lorem Name</div>
                                <div>lorememail@gmail.com</div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>
                            </td>
                            <td>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" checked />
                                    <label className="custom-control-label" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </StyledTable>
        </StyledCard>
    );
};

export default PrivilegesTable;
