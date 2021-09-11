import { Interval } from 'luxon';
import { promise } from '../../../helpers';
import { getCollectionWhere } from '../firebase';

const validateOnSaveLiveClass = item => {
    // eslint-disable-next-line

    
    return (dispatch, getState, getFirebase) => {
        const { id: classId, groupId, startDateTime, endDateTime } = item;

        const requests = dispatch(getCollectionWhere('liveClasses', [['groupId', '==', groupId]]));

        const requestedInterval = Interval.fromDateTimes(startDateTime, endDateTime);

        return requests.then(classes => {
            if (classes.length) {
                const found = classes.filter(clazz => {
                    if (clazz.id === classId) {
                        return false;
                    }

                    const interval = Interval.fromDateTimes(clazz.startDateTime.toDate(), clazz.endDateTime.toDate());
                    return interval.overlaps(requestedInterval);
                });

                if (found.length) {
                    return promise({
                        success: false,
                        errorMsg: 'Existe una clase con el mismo horario asignado.',
                    });
                }
            }

            return promise({ success: true });
        });
    };
};

export default validateOnSaveLiveClass;
