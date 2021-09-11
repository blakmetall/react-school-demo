import { getProfile } from '.';

const getProfileByEmail = email => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) => dispatch(getProfile({ where: [['email', '==', email]] }));
};

export default getProfileByEmail;
