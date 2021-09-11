import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';
import { PageContainer, PageHeading, RenderIf } from '../../../../components';
import { StyledIframe, StyledIframeContainer, StyledProgressBar } from './styled';

const AdminBookPreviewPdfPage = ({ book, firebase }) => {
    const [blobUrl, setBlobUrl] = useState('');
    const [progress, setProgress] = useState(0);
    const bookData = (book && book[0]) || {};
    const { id, name, document } = bookData;

    const hasPdf = !!(document && document.storageUrl);
    const isPerc = typeof progress === 'number';

    useEffect(() => {
        const storageRef = firebase.storage().ref(`books/documents/${id}.pdf`);
        storageRef.getDownloadURL().then(function download(url) {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function load() {
                setBlobUrl(URL.createObjectURL(xhr.response));
            };
            xhr.onprogress = function updateProgress(oEvent) {
                if (oEvent.lengthComputable) {
                    const perc = (oEvent.loaded / oEvent.total) * 100;
                    setProgress(perc);
                }
            };
            xhr.open('GET', url);
            xhr.send();
        });

        // eslint-disable-next-line
    }, [id]);

    const pdfWebPreviewUrl = `/pdfjs/web/viewer.html?file=${blobUrl}`;

    return (
        <div className="flex-grow-1 h-100">
            <PageHeading label={name} className="pt-3-3 pb-3" />
            <PageContainer contentPaddingClass="px-0 px-md-3 py-3">
                {/* pdf */}
                <RenderIf isTrue={hasPdf}>
                    <RenderIf isTrue={isPerc}>
                        <StyledProgressBar value={progress} size="x-small" />
                    </RenderIf>
                    <StyledIframeContainer>
                        <StyledIframe src={pdfWebPreviewUrl} />
                    </StyledIframeContainer>
                </RenderIf>

                {/* not found */}
                <RenderIf isTrue={!hasPdf}>
                    <div>No se encontró el archivo.</div>
                </RenderIf>
            </PageContainer>
        </div>
    );
};

AdminBookPreviewPdfPage.propTypes = {
    book: PropTypes.array,
    firebase: PropTypes.object,
};

AdminBookPreviewPdfPage.defaultProps = {
    book: {},
    firebase: null,
};

const mapStateToProps = ({ firestore }, { match }) => ({
    book: firestore.ordered && firestore.ordered[`book-preview-${match.params.bookId}`],
});

const firestoreQuery = (state, { match }) => {
    return [{ collection: 'books', doc: match.params.bookId, storeAs: `book-preview-${match.params.bookId}` }];
};

const enhance = compose(connect(mapStateToProps), firestoreConnect(firestoreQuery), firebaseConnect());

export default enhance(AdminBookPreviewPdfPage);
