import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

const StyledModal = styled(Modal)`
    .modal-dialog {
        .modal-content {
            border-radius: 11px;
            overflow: hidden;
        }

        .modal-header {
            border-bottom: 0;
            padding: 0;
            position: relative;
            background: #cecece;
            min-height: 59px;

            .modal-title {
                margin-bottom: 0;
                line-height: 1.5em;
                color: white;
                font-size: 18px;
                padding: 1rem 1.75rem;
                font-weight: 600;
            }

            .modal-title-text-center {
                margin-left: 9.5rem;
            }

            .close {
                margin: 0;
                margin-left: auto;
                padding: 0px 12px 10px 12px;
                font-size: 40px;
                position: relative;
                top: 5px;
            }
        }

        .modal-body {
            padding: 1.5rem;
        }
    }
`;

export { StyledModal };
