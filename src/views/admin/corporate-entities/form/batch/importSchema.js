const importSchema = {
    collection: 'corporateEntities',
    attributes: {
        'Entidad Corporativa': {
            type: String,
            required: true,
        },
        Encargado: {
            type: String,
            required: true,
        },
        'Correo Electronico': {
            type: String,
            required: true,
        },
        'Código postal': {
            type: String,
            required: true,
        },
        'ID (SAP)': {
            type: String,
            required: false,
        },
    },
};

export default importSchema;
