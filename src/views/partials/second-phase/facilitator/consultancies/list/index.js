import React from 'react';
import { Button as IconButton } from 'react-bootstrap';
import { Dropdown } from '../../../../../../components';
import { DeleteIcon, EditIcon } from '../../../../../../components/icons';
import theme from '../../../../../../theme';

const ConsultanciesListFacilitator = () => {
    return (
        <>
            <Dropdown
                title="Silencio y cuidado"
                isOpenByDefault={false}
                className="mb-3"
                headerChildren={() => (
                    <div className="d-flex align-items-center flex-nowrap justify-content-between">
                        <h1 className="app-font-19 font-weight-500">viernes, 10/05/20, 10:44 am</h1>
                        <div className="d-flex align-items-center">
                            <IconButton variant="" className="mx-2 p-0">
                                <EditIcon size="xs" />
                            </IconButton>
                            <IconButton variant="" className="p-0">
                                <DeleteIcon size="xs" />
                            </IconButton>
                        </div>
                    </div>
                )}
            >
                <h1 className="text-gray-500 font-weight-bold app-font-16 mb-3">Notas</h1>
                <p className="text-gray-500 mb-3">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo con- sequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                    et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
                    facilisi.
                </p>
            </Dropdown>

            <Dropdown
                title="Silencio y cuidado"
                isOpenByDefault={false}
                color={theme.bootstrap.appGray}
                headerChildren={() => <h1 className="app-font-19 font-weight-500">No disponible</h1>}
                className="mb-3 flex-column"
            >
                <h1 className="text-gray-500 font-weight-bold app-font-16 mb-3">Notas</h1>
                <p className="text-gray-500 mb-3">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo con- sequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                    et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
                    facilisi.
                </p>
            </Dropdown>

            <Dropdown
                title="Silencio y cuidado"
                isOpenByDefault={false}
                color={theme.bootstrap.info}
                headerChildren={() => <h1 className="app-font-19 font-weight-500">Finalizada</h1>}
                className="mb-3 flex-column"
            >
                <h1 className="text-gray-500 font-weight-bold app-font-16 mb-3">Notas</h1>
                <p className="text-gray-500 mb-3">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo con- sequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                    et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
                    facilisi.
                </p>
            </Dropdown>
        </>
    );
};

export default ConsultanciesListFacilitator;
