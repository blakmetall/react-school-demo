import React from 'react';
import { Form } from 'react-bootstrap';
import { Avatar, ScrollContent } from '../../../../../../components';

const AvatarsTeamGroups = () => {
    return (
        <table className="table table-borderless table-responsive">
            <ScrollContent maxHeight="350px" className="rounded-15 p-3">
                {/* headers */}
                <thead>
                    <tr>
                        <th scope="col">
                            <p className="app-font-14 text-gray-500 font-weight-600">Participantes</p>
                        </th>
                        <th scope="col">
                            <p className="app-font-14 text-gray-500 font-weight-600">Equipo 1</p>
                        </th>
                        <th scope="col">
                            <p className="app-font-14 text-gray-500 font-weight-600">Equipo 2</p>
                        </th>
                        <th scope="col">
                            <p className="app-font-14 text-gray-500 font-weight-600">Equipo 3</p>
                        </th>
                        <th scope="col">
                            <p className="app-font-14 text-gray-500 font-weight-600">Equipo 4</p>
                        </th>
                        <th scope="col">
                            <p className="app-font-14 text-gray-500 font-weight-600">Equipo 5</p>
                        </th>
                        <th scope="col">
                            <p className="app-font-14 text-gray-500 font-weight-600">Equipo 5</p>
                        </th>
                        <th scope="col">
                            <p className="app-font-14 text-gray-500 font-weight-600">Equipo 5</p>
                        </th>
                    </tr>
                </thead>

                {/* body */}
                <tbody>
                    {/* Eq. 1 */}
                    <tr>
                        <th scope="row">
                            <Avatar size="small" name="Lorem Name" label="Lorem Name" />
                        </th>
                        <td>
                            <Form.Check custom inline label="" type="radio" id="p1-g1" name="participant1" />
                        </td>
                        <td>
                            <Form.Check custom inline label="" type="radio" id="p1-g2" name="participant1" />
                        </td>
                        <td>
                            <Form.Check custom inline label="" type="radio" id="p1-g3" name="participant1" />
                        </td>
                        <td>
                            <Form.Check custom inline label="" type="radio" id="p1-g4" name="participant1" />
                        </td>
                        <td>
                            <Form.Check custom inline label="" type="radio" id="p1-g5" name="participant1" />
                        </td>
                        <td>
                            <Form.Check custom inline label="" type="radio" id="p1-g4" name="participant1" />
                        </td>
                        <td>
                            <Form.Check custom inline label="" type="radio" id="p1-g5" name="participant1" />
                        </td>
                        <td>
                            <Form.Check custom inline label="" type="radio" id="p1-g4" name="participant1" />
                        </td>
                        <td>
                            <Form.Check custom inline label="" type="radio" id="p1-g4" name="participant1" />
                        </td>
                        <td>
                            <Form.Check custom inline label="" type="radio" id="p1-g5" name="participant1" />
                        </td>
                        <td>
                            <Form.Check custom inline label="" type="radio" id="p1-g4" name="participant1" />
                        </td>
                    </tr>

                    {/* Eq. 2 */}
                    <tr>
                        <th scope="row">
                            <Avatar size="small" name="Lorem Name" label="Lorem Name" />
                        </th>

                        <td>
                            <Form.Check custom inline label="" type="radio" id="p2-g1" name="participant2" />
                        </td>

                        <td>
                            <Form.Check custom inline label="" type="radio" id="p2-g2" name="participant2" />
                        </td>

                        <td>
                            <Form.Check custom inline label="" type="radio" id="p2-g3" name="participant2" />
                        </td>
                    </tr>

                    {/* Eq. 3 */}
                    <tr>
                        <th scope="row">
                            <Avatar size="small" name="Lorem Name" label="Lorem Name" />
                        </th>

                        <td>
                            <Form.Check custom inline label="" type="radio" id="p3-g1" name="participant3" />
                        </td>

                        <td>
                            <Form.Check custom inline label="" type="radio" id="p3-g2" name="participant3" />
                        </td>

                        <td>
                            <Form.Check custom inline label="" type="radio" id="p3-g3" name="participant3" />
                        </td>
                    </tr>

                    {/* from this line down is to force scrolling */}
                    <tr>
                        <th scope="row">
                            <Avatar size="small" name="Lorem Name" label="Lorem Name" />
                        </th>

                        <td>
                            <Form.Check custom inline label="" type="radio" id="p3-g1" name="participant3" />
                        </td>

                        <td>
                            <Form.Check custom inline label="" type="radio" id="p3-g2" name="participant3" />
                        </td>

                        <td>
                            <Form.Check custom inline label="" type="radio" id="p3-g3" name="participant3" />
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">
                            <Avatar size="small" name="Lorem Name" label="Lorem Name" />
                        </th>

                        <td>
                            <Form.Check custom inline label="" type="radio" id="p3-g1" name="participant3" />
                        </td>

                        <td>
                            <Form.Check custom inline label="" type="radio" id="p3-g2" name="participant3" />
                        </td>

                        <td>
                            <Form.Check custom inline label="" type="radio" id="p3-g3" name="participant3" />
                        </td>
                    </tr>
                </tbody>
            </ScrollContent>
        </table>
    );
};

export default AvatarsTeamGroups;

// <Row>
//     {/* label */}
//     <h1>Participantes</h1>
//     {/* avatar */}
//     <Avatar size="small" name="Lorem Name" label="Lorem Name"  />
//     {/* radio */}
//     <Form.Check custom inline label="1" type="radio" id={1}  />
// </Row>;
