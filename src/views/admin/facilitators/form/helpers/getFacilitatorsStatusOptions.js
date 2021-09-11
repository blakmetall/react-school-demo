export default function getFacilitatorsStatusOptions() {
    return [
        {
            label: 'Activado',
            value: 'active',
        },
        {
            label: 'Pendiente de activación',
            value: 'pending-activation',
        },
        {
            label: 'Próximo a cancelar',
            value: 'incoming-cancel',
        },
        {
            label: 'Cancelado',
            value: 'cancelled',
        },
        {
            label: 'N/A',
            value: 'n/a',
        },
    ];
}
