import styled from 'styled-components';

const StyledGrid = styled.div`
    > div {
        flex: 0.33 0.33 10%;
        margin: 1rem;

        img {
            height: initial !important;
        }

        @media screen and (max-width: 850px) {
            flex: 1 1 100%;
        }

        @media screen and (max-width: 1600px) and (min-width: 851px) {
            flex: 0.5 0.5 10%;
        }
    }
`;

export { StyledGrid };
