import styled from "styled-components";

export default styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    
    @media(max-width: 768px){
        flex-direction: column;
    }
    
    background-image: url('/images/landing.jpg');
    background-position-x: -130px;
    overflow: hidden;
`;