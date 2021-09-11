import { getMenuByRoleSlug, promise } from '../../../helpers';
import { setMenuSession } from './index';
import { getCourse } from '../courses';

const setMenuSessionBy = ({ roleSlug, courseId }) => {
    return (dispatch, getState, getFirebase) => {
        // -- attach course menu items to sidebar
        if (courseId && roleSlug) {
            return dispatch(getCourse({ docId: courseId })).then(course => {
                if (course) {
                    const roleMenus = getMenuByRoleSlug(roleSlug).map(menuItem => ({
                        ...menuItem,
                        isActive: false,
                    }));

                    const courseMenuItem = [
                        {
                            name: course.name,
                            url: `/curso/${courseId}`,
                            icon: 'book',
                            isActive: true,
                        },
                    ];

                    dispatch(setMenuSession([...roleMenus, ...courseMenuItem]));
                }

                return promise();
            });
        }
        // -- set menu only by role slug
        else if (roleSlug) {
            dispatch(setMenuSession(getMenuByRoleSlug(roleSlug)));
        }

        return promise();
    };
};

export default setMenuSessionBy;
