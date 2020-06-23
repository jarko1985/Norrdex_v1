import styled from 'styled-components';
//import defaultImg from '../images/paris1.jpg';


const StyledHero = styled.header
`
margin-top:150px;
min-height: 60vh;
background: url(${props => props.img}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;

export default StyledHero;


 