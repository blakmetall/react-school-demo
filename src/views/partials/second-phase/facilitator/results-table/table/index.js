import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Avatar, Button, ScrollContent } from '../../../../../../components';
import { ArrowCheck, UploadIcon, DownloadIcon } from '../../../../../../components/icons';
import theme from '../../../../../../theme';
import {
    // table layout elements
    StyledResultsTable,
    StyledColumn,
    StyledColumnScrollable,
    StyledLeftTr,
    StyledLeftTrForTh,
    StyledCenterTr,
    StyledRightTr,
    StyledRotatedTitleWrapper,
    StyledTd,
    // eslint-disable-next-line
    StyledTdInputWrapper,
    StyledAvatarTd,
    StyledTrQualifications,
    // styled items
    // eslint-disable-next-line
    StyledInput,
    StyledButtonsWrapper,
    StyledFooter,
    StyledTitle,
    StyledRotatedTitle,
} from './styled';

const ResultsTable = () => {
    const history = useHistory();

    return (
        <>
            <div className="d-flex">
                <StyledResultsTable className="rounded-15 mb-4">
                    {/*  left section - users */}
                    <StyledColumn>
                        {/* th's */}
                        <StyledLeftTrForTh className="d-flex flex-column justify-content-end">
                            <Button
                                label="Descargar csv."
                                icon={<DownloadIcon color={theme.bootstrap.appGray2} />}
                                variant="secondary"
                                size="xs"
                                iconPosition="left"
                                className="align-self-center app-font-14 text-gray-500 p-3 mb-4 bg-app-gray-4"
                            />
                            <StyledTitle className="app-font-14">Participantes.</StyledTitle>
                        </StyledLeftTrForTh>

                        {/* td's */}
                        <StyledLeftTr>
                            <StyledAvatarTd>
                                <Avatar name="lorem name" label="lorem name largetext largetext" size="x-small" />
                            </StyledAvatarTd>

                            <StyledAvatarTd>
                                <Avatar name="lorem name" label="lorem name" size="x-small" />
                            </StyledAvatarTd>
                        </StyledLeftTr>
                        <StyledFooter height="53px" />
                    </StyledColumn>

                    {/*  center section - qualifications  */}
                    <StyledColumnScrollable>
                        <ScrollContent background="white">
                            {/* th's */}
                            <StyledCenterTr>
                                <div className="d-flex">
                                    <StyledRotatedTitleWrapper>
                                        <StyledRotatedTitle className="app-font-14 text-white">Tarea 1.</StyledRotatedTitle>
                                    </StyledRotatedTitleWrapper>
                                </div>
                                <div className="d-flex">
                                    <StyledRotatedTitleWrapper>
                                        <StyledRotatedTitle className="app-font-14 text-white">Tarea 1.</StyledRotatedTitle>
                                    </StyledRotatedTitleWrapper>
                                </div>
                                <div className="d-flex">
                                    <StyledRotatedTitleWrapper>
                                        <StyledRotatedTitle className="app-font-14 text-white">Tarea 1.</StyledRotatedTitle>
                                    </StyledRotatedTitleWrapper>
                                </div>
                                <div className="d-flex">
                                    <StyledRotatedTitleWrapper>
                                        <StyledRotatedTitle className="app-font-14 text-white">Tarea 1.</StyledRotatedTitle>
                                    </StyledRotatedTitleWrapper>
                                </div>
                                <div className="d-flex">
                                    <StyledRotatedTitleWrapper>
                                        <StyledRotatedTitle className="app-font-14 text-white">Tarea 1.</StyledRotatedTitle>
                                    </StyledRotatedTitleWrapper>
                                </div>
                                <div className="d-flex">
                                    <StyledRotatedTitleWrapper>
                                        <StyledRotatedTitle className="app-font-14 text-white">Tarea 1.</StyledRotatedTitle>
                                    </StyledRotatedTitleWrapper>
                                </div>
                                <div className="d-flex">
                                    <StyledRotatedTitleWrapper>
                                        <StyledRotatedTitle className="app-font-14 text-white">Tarea 1.</StyledRotatedTitle>
                                    </StyledRotatedTitleWrapper>
                                </div>
                                <div className="d-flex">
                                    <StyledRotatedTitleWrapper>
                                        <StyledRotatedTitle className="app-font-14 text-white">Tarea 1.</StyledRotatedTitle>
                                    </StyledRotatedTitleWrapper>
                                </div>
                                <div className="d-flex">
                                    <StyledRotatedTitleWrapper>
                                        <StyledRotatedTitle className="app-font-14 text-white">Tarea 1.</StyledRotatedTitle>
                                    </StyledRotatedTitleWrapper>
                                </div>
                                <div className="d-flex">
                                    <StyledRotatedTitleWrapper>
                                        <StyledRotatedTitle className="app-font-14 text-white">Tarea 1.</StyledRotatedTitle>
                                    </StyledRotatedTitleWrapper>
                                </div>
                                <div className="d-flex">
                                    <StyledRotatedTitleWrapper>
                                        <StyledRotatedTitle className="app-font-14 text-white">Tarea 1.</StyledRotatedTitle>
                                    </StyledRotatedTitleWrapper>
                                </div>
                                <div className="d-flex">
                                    <StyledRotatedTitleWrapper>
                                        <StyledRotatedTitle className="app-font-14 text-white">Tarea 1.</StyledRotatedTitle>
                                    </StyledRotatedTitleWrapper>
                                </div>
                                <div className="d-flex">
                                    <StyledRotatedTitleWrapper>
                                        <StyledRotatedTitle className="app-font-14 text-white">Tarea 1.</StyledRotatedTitle>
                                    </StyledRotatedTitleWrapper>
                                </div>
                                <div className="d-flex">
                                    <StyledRotatedTitleWrapper>
                                        <StyledRotatedTitle className="app-font-14 text-white">Tarea 1.</StyledRotatedTitle>
                                    </StyledRotatedTitleWrapper>
                                </div>
                            </StyledCenterTr>

                            {/* td's */}
                            <StyledTrQualifications>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                            </StyledTrQualifications>

                            <StyledTrQualifications>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                                <StyledTd bordered className="app-font-14 text-gray-500 font-weight-400">
                                    10
                                </StyledTd>
                            </StyledTrQualifications>
                        </ScrollContent>
                        <StyledFooter height="50px" />
                    </StyledColumnScrollable>

                    {/*  right section - certificate and upload */}
                    <StyledColumn>
                        {/* th's */}
                        <StyledRightTr>
                            <StyledRotatedTitleWrapper>
                                <StyledRotatedTitle className="app-font-14 text-white">Certificado</StyledRotatedTitle>
                            </StyledRotatedTitleWrapper>

                            <StyledRotatedTitleWrapper>
                                <StyledRotatedTitle className="app-font-14 text-white">Subir</StyledRotatedTitle>
                            </StyledRotatedTitleWrapper>
                        </StyledRightTr>

                        {/* td's */}
                        <StyledRightTr>
                            <StyledTd className="app-font-14 text-gray-500 font-weight-400">
                                <ArrowCheck size="xs" color={theme.bootstrap.appGray2} />
                            </StyledTd>
                            <StyledTd className="app-font-14 text-gray-500 font-weight-400">
                                <UploadIcon size="xs" color={theme.bootstrap.appGray2} />
                            </StyledTd>
                        </StyledRightTr>

                        <StyledRightTr>
                            <StyledTd className="app-font-14 text-gray-500 font-weight-400">
                                <ArrowCheck size="xs" color={theme.bootstrap.appGray2} />
                            </StyledTd>
                            <StyledTd className="app-font-14 text-gray-500 font-weight-400">
                                <UploadIcon size="xs" color={theme.bootstrap.appGray2} />
                            </StyledTd>
                        </StyledRightTr>

                        <StyledFooter height="53px" />
                    </StyledColumn>
                </StyledResultsTable>
            </div>

            {/* Buttons  */}
            <StyledButtonsWrapper className="flex-column flex-lg-row">
                <Col className="col-12 col-md-2 col-lg-3 p-0 mb-4 mb-lg-0">
                    {/* button - actualizar calificacion. */}
                    <Button
                        label="Actualizar Calificación."
                        type="submit"
                        size="xs"
                        variant="success"
                        className="app-font-14 text-nowrap rounded-pill"
                        onClick={() => {
                            history.push('/curso/:courseId/facilitator/results-table-update-qualification');
                        }}
                    />
                </Col>

                <Col className="d-flex p-0">
                    {/* button - actualizar */}
                    <Button
                        label="Guardar"
                        type="submit"
                        size="xs"
                        variant="success"
                        className="app-font-14 rounded-pill mr-2"
                        disabled
                    />

                    {/* button - cancelar */}
                    <Button
                        label="Cancelar"
                        type="submit"
                        size="xs"
                        variant="secondary"
                        className="app-font-14 rounded-pill"
                        disabled
                    />
                </Col>
            </StyledButtonsWrapper>
        </>
    );
};

export default ResultsTable;
