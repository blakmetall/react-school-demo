import React from 'react';
import PropTypes from 'prop-types';
import SubMenuLink from './subMenuLink';

function CourseMenuItems({ isMobile, urlParams }) {
    const hasUrlParams = !!urlParams;
    const hasCourseIdParam = hasUrlParams && !!urlParams.courseId;

    if (hasCourseIdParam) {
        const { courseId } = urlParams;

        const menu = [
            { name: 'Calendario', url: `/curso/${courseId}/calendario`, icon: '' },
            { name: 'Libros', url: `/curso/${courseId}`, icon: '' },
            { name: 'Clases grabadas', url: `/curso/${courseId}/clases-grabadas`, icon: '' },
            { name: 'Clases presenciales', url: `/curso/${courseId}/clases-presenciales`, icon: '' },
            { name: 'Asesorías / Tutorías', url: `/curso/${courseId}/asesorias`, icon: '' },
            { name: 'Tareas', url: `/curso/${courseId}/tareas`, icon: '' },
            { name: 'Tareas en equipo', url: `/curso/${courseId}/tareas-en-equipo`, icon: '' },
            { name: 'Exámenes', url: `/curso/${courseId}/examenes`, icon: '' },
            { name: 'Chat', url: `/curso/${courseId}/chat/general`, icon: '' },
            { name: 'Foro', url: `/curso/${courseId}/chat/foros`, icon: '' },
            { name: 'Tabla de resultados', url: `/curso/${courseId}/resultados`, icon: '' },
            { name: 'Certificado', url: `/curso/${courseId}/certificado`, icon: '' },
        ];

        return menu.map((menuItem, index) => {
            const key = `submenu-course-${index}`;

            return <SubMenuLink key={key} menuItem={menuItem} isMobile={isMobile} />;
        });
    }

    return <></>;
}

CourseMenuItems.propTypes = {
    isMobile: PropTypes.bool,
    urlParams: PropTypes.any,
};

CourseMenuItems.defaultProps = {
    isMobile: undefined,
    urlParams: undefined,
};

export default CourseMenuItems;
