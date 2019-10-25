import styled from "styled-components";

export default styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    @media(max-width: 768px){
        flex-direction: column;
    }
    height: -webkit-fill-available;
    background-image: url('/images/landing.jpg');
    background-position-x: -130px;
`;