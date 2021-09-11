import faker from 'faker';

const importSample = Array(4)
    .fill('')
    .map(() => ({
        'Entidad corporativa': faker.company.companyName(),
        Encargado: faker.name.findName(),
        Correo: faker.internet.email(),
        'Código postal': faker.random.number(),
        'ID (SAP)': faker.random.number(),
    }));

export default importSample;
