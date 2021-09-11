import { awaitRequests, promise } from '../../../helpers';
import { getFacilitatorsManagers } from '../facilitators-managers';
import { getManager } from '../managers';
import { getParticipants } from '../participants';

const findManagementIdsByProfileId = profileId => {
    // eslint-disable-next-line
    return (dispatch, getState, getFirebase) =>
        awaitRequests([
            // --
            dispatch(
                getManager({
                    where: [['profileId', '==', profileId]],
                }),
            ).then(manager => promise((manager && manager.id) || undefined)),
            //--
            dispatch(
                getFacilitatorsManagers({
                    where: [['profileId', '==', profileId]],
                }),
            ).then(facilitatorsManagers => promise(facilitatorsManagers.map(item => item.id))),
            // --
            dispatch(
                getParticipants({
                    where: [['profileId', '==', profileId]],
                }),
            ).then(participants => promise(participants.map(item => item.id))),
        ]).then(responses => {
            const managerId = responses[0];
            const facilitatorsManagersIds = responses[1];
            const participantsIds = responses[2];

            return promise({
                managerId,
                facilitatorsManagersIds,
                participantsIds,
            });
        });
};

export default findManagementIdsByProfileId;
