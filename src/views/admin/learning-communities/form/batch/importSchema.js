const importSchema = {
    collection: 'corporateEntities',
    attributes: {
        'Nombre del curso': {
            type: String,
            required: true,
        },
        Categoría: {
            type: String,
            // required: true,
        },
        'ID (SAP)': {
            type: String,
            // required: false,
        },
        'Nombre del libro': {
            type: String,
            // required: false,
        },
    },
};

export default importSchema;
