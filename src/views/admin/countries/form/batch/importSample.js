import faker from 'faker';

const importSample = Array(4)
    .fill('')
    .map(() => ({
        País: faker.address.country(),
        Encargado: faker.name.findName(),
        Correo: faker.internet.email(),
    }));

export default importSample;
