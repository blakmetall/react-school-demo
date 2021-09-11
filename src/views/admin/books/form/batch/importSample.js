import faker from 'faker';

const importSample = Array(4)
    .fill('')
    .map(() => ({
        Título: faker.company.companyName(),
        'ID (SAP)': faker.random.number(),
        Descripción: faker.lorem.sentence(),
        'Libros exclusivos para facilitadores': faker.random.number() % 2 === 0 ? 1 : 0,
        'Validación de regionalidad válida': faker.random.number() % 2 === 0 ? 1 : 0,
    }));

export default importSample;
