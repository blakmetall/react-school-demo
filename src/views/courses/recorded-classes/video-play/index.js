import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { PageContainer, PageHeading } from '../../../../components';
import { StyledIframe } from './styled';
import { saveViewedRecordedClass } from '../../../../store/actions/recorded-classes';

const WatchClass = ({ auth, recordedClass }) => {
    const { id: recordedClassId, title, videoURL } = recordedClass;
    const dispatch = useDispatch();

    useEffect(() => {
        const profileId = auth.profile.id;
        const checkViewed = setTimeout(() => {
            dispatch(saveViewedRecordedClass({ profileId, recordedClassId }));
        }, 10000);
        return () => {
            clearTimeout(checkViewed);
        };
        // eslint-disable-next-line
    }, [recordedClassId, auth]);

    if (!videoURL) return null;

    let videoEmbedID = false;
    if (videoURL.indexOf('vimeo')) {
        const regex = /([^/]+$)/;
        videoEmbedID = videoURL.match(regex);
    }

    if (!videoEmbedID) return null;

    return (
        <div className="flex-grow-1">
            <PageHeading label={title} />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <div>
                    {/* recibe  url de youtube y vimeo */}
                    <StyledIframe
                        title="video-title"
                        // src="https://www.youtube.com/embed/Wimkqo8gDZ0"
                        src={`https://player.vimeo.com/video/${videoEmbedID[0]}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </PageContainer>
        </div>
    );
};

WatchClass.propTypes = {
    recordedClass: PropTypes.any,
    auth: PropTypes.any,
};

WatchClass.defaultProps = {
    recordedClass: {},
    auth: {},
};

const storeInjectedProps = state => ({
    auth: state.auth,
});

const mapStateToProps = (state, { match }) => {
    const { params } = match;
    const { recordedClassId } = params;

    const recordedClassRef = `recorded-class-${recordedClassId}`;
    const recordedClass = state.firestore.ordered[recordedClassRef] ? state.firestore.ordered[recordedClassRef][0] : [];

    return {
        recordedClass,
    };
};

const firestoreQuery = (state, { match }) => {
    const queries = [];
    const { params } = match;
    const { recordedClassId } = params;

    const recordedClassRef = `recorded-class-${recordedClassId}`;
    queries.push({ collection: 'recordedClasses', doc: recordedClassId, storeAs: recordedClassRef });

    return queries;
};

const enhance = compose(connect(storeInjectedProps), connect(mapStateToProps), firestoreConnect(firestoreQuery));

export default enhance(WatchClass);
