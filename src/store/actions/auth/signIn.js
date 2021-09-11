const signIn = ({ email, password }) => {
    return (dispatch, getState, getFirebase) =>
        getFirebase()
            .auth()
            .signInWithEmailAndPassword(email, password);
};

export default signIn;
