import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { StyledContainer, StyledLabel } from './styled';
import RenderIf from '../../render-if';

function DailyTasks({ labels }) {
    const history = useHistory();

    const hasLabels = !!labels;
    if (!hasLabels) return null;

    const redirect = (type, activityId) => {
        // todo:  en base al id de la actividad  y el type se hacer una querie para traer el id del curso
        // /curso/{cursoId}/tareas/{tareaId}
        // /curso/{cursoId}/tareas-equipos/{tareaEquipoId}
        // /curso/{cursoId}/asesorias/{asesoriaId}
        // /curso/{cursoId}/examen/{examenid}

        switch (type) {
            case 'tasks':
                return history.push(`/curso/{cursoId}/tareas/${activityId}`);
            case 'projects':
                return history.push(`/curso/{cursoId}/tareas-equipos/${activityId}`);
            case 'teamwork':
                return history.push(` /curso/{cursoId}/asesorias/${activityId}`);
            case 'consultancies':
                return history.push(`/curso/{cursoId}/examen/$${activityId}`);
            default:
                return '';
        }
    };

    return (
        <StyledContainer>
            <RenderIf isTrue={hasLabels}>
                {/* labels - activities */}
                {labels.map(v => {
                    const key = `key-${v.label}`;
                    return (
                        <StyledLabel type={v.type} key={key} onClick={() => redirect(v.type, v.id)}>
                            {v.label}
                        </StyledLabel>
                    );
                })}
            </RenderIf>
        </StyledContainer>
    );
}

DailyTasks.propTypes = {
    labels: PropTypes.array,
};
DailyTasks.defaultProps = {
    labels: [],
};

export default DailyTasks;
