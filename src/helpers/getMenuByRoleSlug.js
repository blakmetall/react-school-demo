const menu = {
    // admin menu
    admin: [
        {
            name: 'Dashboard',
            url: '/admin/dashboard',
            icon: 'pie',
            isActive: true,
        },
        {
            name: 'Administración',
            url: '/admin/paises',
            icon: 'graduation',
            children: [
                { name: 'Países', url: '/admin/paises', icon: '' },
                { name: 'Entidades corporativas', url: '/admin/entidades-corporativas', icon: '' },
                { name: 'Libros', url: '/admin/libros/categorias', icon: '' },
                { name: 'Cursos', url: '/admin/cursos', icon: '' },
                { name: 'Asignaciones', url: '/admin/cursos/asignaciones', icon: '' },
            ],
        },
        {
            name: 'Comunidad',
            url: '/admin/entidades-regionales',
            icon: 'book',
            children: [
                { name: 'Entidades regionales', url: '/admin/entidades-regionales', icon: '' },
                { name: 'Comunidades de aprendizaje', url: '/admin/comunidades-de-aprendizaje', icon: '' },
                { name: 'Facilitadores', url: '/admin/facilitadores', icon: '' },
                { name: 'Grupos', url: '/admin/grupos', icon: '' },
                { name: 'Participantes', url: '/admin/participantes', icon: '' },
                { name: 'Asignaciones', url: '/admin/facilitadores/asignaciones', icon: '' },
            ],
        },
    ],

    // country menu
    country: [
        {
            name: 'Dashboard',
            url: '/admin/dashboard',
            icon: 'pie',
            isActive: true,
        },
        {
            name: 'Administración',
            url: '/admin/entidades-corporativas',
            icon: 'graduation',
            children: [
                { name: 'Entidades corporativas', url: '/admin/entidades-corporativas', icon: '' },
                { name: 'Asignaciones', url: '/admin/cursos/asignaciones', icon: '' },
            ],
        },
        {
            name: 'Comunidad',
            url: '/admin/entidades-regionales',
            icon: 'book',
            children: [
                { name: 'Entidades regionales', url: '/admin/entidades-regionales', icon: '' },
                { name: 'Comunidad de aprendizaje', url: '/admin/comunidades-de-aprendizaje', icon: '' },
                { name: 'Facilitadores', url: '/admin/facilitadores', icon: '' },
                { name: 'Grupos', url: '/admin/grupos', icon: '' },
                { name: 'Participantes', url: '/admin/participantes', icon: '' },
                { name: 'Asignaciones', url: '/admin/facilitadores/asignaciones', icon: '' },
            ],
        },
    ],

    // corporate entity menu
    'corporate-entity': [
        {
            name: 'Dashboard',
            url: '/admin/dashboard',
            icon: 'pie',
            isActive: true,
        },
        {
            name: 'Administración',
            url: '/admin/cursos/asignaciones',
            icon: 'graduation',
            children: [{ name: 'Asignaciones', url: '/admin/cursos/asignaciones', icon: '' }],
        },
        {
            name: 'Comunidad',
            url: '/admin/entidades-regionales',
            icon: 'book',
            children: [
                { name: 'Entidades regionales', url: '/admin/entidades-regionales', icon: '' },
                { name: 'Comunidades de aprendizaje', url: '/admin/comunidades-de-aprendizaje', icon: '' },
                { name: 'Facilitadores', url: '/admin/facilitadores', icon: '' },
                { name: 'Grupos', url: '/admin/grupos', icon: '' },
                { name: 'Participantes', url: '/admin/participantes', icon: '' },
                { name: 'Asignaciones', url: '/admin/facilitadores/asignaciones', icon: '' },
            ],
        },
    ],

    // regional entity menu
    'regional-entity': [
        {
            name: 'Comunidad',
            url: '/admin/comunidades-de-aprendizaje',
            icon: 'book',
            isActive: true,
            children: [
                { name: 'Comunidades de aprendizaje', url: '/admin/comunidades-de-aprendizaje', icon: '' },
                { name: 'Facilitadores', url: '/admin/facilitadores', icon: '' },
                { name: 'Grupos', url: '/admin/grupos', icon: '' },
                { name: 'Participantes', url: '/admin/participantes', icon: '' },
                { name: 'Asignaciones', url: '/admin/facilitadores/asignaciones', icon: '' },
            ],
        },
    ],

    // learning community menu
    'learning-community': [
        {
            name: 'Comunidad',
            url: '/admin/facilitadores',
            icon: 'book',
            isActive: true,
            children: [
                { name: 'Facilitadores', url: '/admin/facilitadores', icon: '' },
                { name: 'Grupos', url: '/admin/grupos', icon: '' },
                { name: 'Participantes', url: '/admin/participantes', icon: '' },
                { name: 'Asignaciones', url: '/admin/facilitadores/asignaciones', icon: '' },
            ],
        },
    ],

    // facilitator menu
    facilitator: [
        {
            name: 'Cursos',
            url: '/cursos',
            icon: 'page',
            isActive: true,
        },
    ],

    // participant menu
    participant: [
        {
            name: 'Cursos',
            url: '/cursos',
            icon: 'page',
            isActive: true,
        },
    ],
};

export default function getMenuByRoleSlug(roleSlug) {
    if (typeof menu[roleSlug] !== 'undefined') {
        return menu[roleSlug];
    }

    return undefined;
}
