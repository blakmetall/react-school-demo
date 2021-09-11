import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty, useFirestoreConnect } from 'react-redux-firebase';
import { createChatRoom } from '../../../../store/actions/chat';
import { Chat, Message, PageContainer, RenderContentWhen, RenderIf } from '../../../../components';
import { useChatParticipants } from './hooks';

const CourseForumPage = ({ profile, course, participants, profiles, match }) => {
    const [isCreatingRoom, setIsCreatingRoom] = useState(false);
    const [chatRoomRef, setChatRoomRef] = useState();
    const [chatRoomQuery, setChatRoomQuery] = useState([]);
    useFirestoreConnect(chatRoomQuery);

    const chatParticipants = useChatParticipants(profiles, participants, profile);

    const hasCourseId = match && match.params && match.params.courseId;
    const courseId = hasCourseId ? match.params.courseId : undefined;
    const isDataLoaded = isLoaded(course) && isLoaded(profile) && isLoaded(participants) && isLoaded(profiles);

    // loads chatRoom data from firestore results
    const chatRoom = useSelector(({ firestore }) => {
        const chatRoomData = firestore.data[`chatRoom-${courseId}-${chatRoomRef}`];

        if (chatRoomData) {
            const chatRoomDataKeys = Object.keys(chatRoomData);
            const chatRoomId = chatRoomDataKeys[0] || undefined;

            if (chatRoomId && chatRoomData && chatRoomData[chatRoomId]) {
                return { ...chatRoomData[chatRoomId], id: chatRoomId };
            }
        }

        return chatRoomData;
    });

    const dispatch = useDispatch();

    // when new chat users is clicked, we prepare the chatRoom reference for the chat
    const handleOnParticipantClick = participant => {
        setChatRoomRef([profile.id, participant.profileId].sort().join('-'));
    };

    // when chatRoomRef changes, we prepare the chatRoom query to pull the proper chat room
    useEffect(() => {
        if (chatRoomRef && courseId) {
            setChatRoomQuery([
                {
                    collection: 'chatRooms',
                    where: [
                        ['courseId', '==', courseId],
                        ['ref', '==', chatRoomRef],
                        ['isIndividualChat', '==', true],
                    ],
                    storeAs: `chatRoom-${courseId}-${chatRoomRef}`,
                },
            ]);
        }

        // eslint-disable-next-line
    }, [chatRoomRef, courseId]);

    // helps creating a new room for a new 1-to-1 user conversation
    useEffect(() => {
        if (chatRoomRef && chatRoomQuery && isLoaded(chatRoom)) {
            if (isEmpty(chatRoom) && !isCreatingRoom) {
                setIsCreatingRoom(true);
                const isIndividual = true;
                dispatch(createChatRoom(courseId, chatRoomRef, isIndividual)).finally(() => {
                    setIsCreatingRoom(false);
                });
            }
        }

        // eslint-disable-next-line
    }, [chatRoom, chatRoomRef, chatRoomQuery, isCreatingRoom]);

    return (
        <div className="flex-grow-1">
            <PageContainer contentPaddingClass="px-5 pb-5">
                <div className="pt-5" />
                <div className="text-bold-700 app-font-27 text-app-gray-2 mb-5">Chat Individual</div>

                {/* chat  */}
                <RenderIf isTrue={isDataLoaded}>
                    <Chat
                        isIndividualChat={false}
                        chatParticipants={chatParticipants}
                        chatRoom={chatRoom}
                        onParticipantClick={handleOnParticipantClick}
                    />
                </RenderIf>

                {/* loading */}
                <RenderContentWhen isTrue={isDataLoaded} showSpinnerIf={!isDataLoaded} stopSpinnerIf={isDataLoaded} />

                {/* no records found */}
                <Message showIf={isDataLoaded && isEmpty(course)} message="No se encontró el curso." />
            </PageContainer>
        </div>
    );
};

CourseForumPage.propTypes = {
    profile: PropTypes.any,
    course: PropTypes.any,
    participants: PropTypes.any,
    profiles: PropTypes.any,
    match: PropTypes.any,
};

CourseForumPage.defaultProps = {
    profile: {},
    course: undefined,
    participants: undefined,
    profiles: undefined,
    match: undefined,
};

const mapStateToProps = ({ auth, firestore }, { match }) => {
    const hasCourseId = match.params && match.params.courseId;
    const courseId = hasCourseId ? match.params.courseId : '';
    const isCourseLoaded = !!firestore.data.courses && !!firestore.data.courses[courseId];

    if (isCourseLoaded) {
        return {
            profile: auth.profile,
            course: firestore.data.courses && firestore.data.courses[courseId],
            participants: firestore.data[`course-participants-${match.params.courseId}`],
            profiles: firestore.data.profiles,
        };
    }

    return {};
};

const firestoreQuery = (state, { match, course, participants }) => {
    const hasCourseId = match.params && match.params.courseId;
    const queries = [];

    // get curse
    if (hasCourseId) {
        queries.push({ collection: 'courses', doc: match.params.courseId });
    }

    // get course participants
    if (course) {
        queries.push({
            collection: 'courses',
            doc: match.params.courseId,
            subcollections: [{ collection: 'participants', where: ['parentId', '==', match.params.courseId] }],
            storeAs: `course-participants-${match.params.courseId}`,
        });
    }

    // prepare course participants profiles
    if (participants) {
        Object.keys(participants).forEach(key => {
            const participant = participants[key];

            if (participant && participant.profileId) {
                queries.push({
                    collection: 'profiles',
                    doc: participant.profileId,
                });
            }
        });
    }

    return queries;
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(CourseForumPage);
