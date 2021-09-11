const importSchema = {
    collection: 'corporateEntities',
    attributes: {
        Título: {
            type: String,
            required: true,
        },
        'ID (SAP)': {
            type: String,
            required: false,
        },
        Descripción: {
            type: String,
            required: true,
        },
        'Libros exclusivos para facilitadores': {
            type: Number,
            required: false,
        },
        'Validación de regionalidad válida': {
            type: Number,
            required: false,
        },
    },
};

export default importSchema;
