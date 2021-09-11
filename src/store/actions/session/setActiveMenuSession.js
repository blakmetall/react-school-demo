import { promise } from '../../../helpers';
import { setMenuSession } from '../session';

const setActiveMenuSession = menuIndex => {
    return (dispatch, getState, getFirebase) => {
        const { auth } = getState();
        const { menu } = auth;

        dispatch(
            setMenuSession(
                menu.map((v, loopIndex) => ({
                    ...v,
                    isActive: menuIndex === loopIndex,
                })),
            ),
        );

        return promise();
    };
};

export default setActiveMenuSession;
