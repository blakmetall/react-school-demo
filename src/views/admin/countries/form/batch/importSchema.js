const importSchema = {
    collection: 'corporateEntities',
    attributes: {
        País: {
            type: String,
            required: true,
        },
        Encargado: {
            type: String,
            required: true,
        },
        'Correo electrónico': {
            type: String,
            required: true,
        },
    },
};

export default importSchema;
