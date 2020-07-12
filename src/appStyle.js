import styled from 'styled-components';


//STYLE//
export const Main = styled.section`
background: #E5E8EF;
margin: 0;
padding: 0;
padding-bottom: 50px;
`;

export const PrioritySelector = styled.button`
font-size: 33px;
font-weight: regular;
background: none;
border: none;
margin: 0 34px;
`;

export const PrioritySelectors = styled.div`
text-align: center;
width: 80%;
margin-left: 10%;
margin-top: 10%;

`;

export const TodoTextInput = styled.input`
border-radius: 35px;
background: #FFF;
box-shadow:  20px 20px 60px #ced1d7, 
             -20px -20px 60px #fcffff;
border: none;
width: 40%;
height: 60px;
margin: 0 30%;
margin-top: 4%;
font-size: 20px;
padding-left: 2%;

`;

export const PriorityTextSelect = styled.select`

-moz-appearance:none; /* Firefox */
-webkit-appearance:none; /* Safari and Chrome */
appearance:none;


border-radius: 35px;
background: #E5E8EF;
box-shadow:  -20px 20px 60px #ced1d7, 
             20px -20px 60px #fcffff;
width: 15%;
height: 60px;
border: none;
padding: 0 0 0 4% ;
font-size: 20px;

background: url(./img/down-arrow.png) no-repeat right;
background-size: 30px;
margin-left: 37%;
margin-top: 3%;

`;

export const TodoAddButton = styled.button`
border-radius: 35px;
background: #E5E8EF;
box-shadow:  -5px 5px 10px #ced1d7, 
             5px -5px 10px #fcffff;
width: 7%;
height: 60px;
border: none;
margin-left: 5%;

font-size: 20px;
`;

export const ResultContainer = styled.div`
border-radius: 35px;
background: #FFFFFF;
box-shadow:  20px 20px 60px #CED1D7, 
             -20px -20px 60px #fcffff;
text-decoration: none;
padding: 50px 0;
width: 80%;
margin: 3% 10%;
`;

export const ResultContainerUl = styled.ul`
  list-style-type: none;
`;

export const ResultIcons = styled.img`
width: 24px;
cursor: pointer;
margin: 0;
padding: 0;
float: right;
margin-right: 1%;
`;

export const ResultText = styled.li`
font-size: 25px;
border-bottom: 1px solid #EFEFEF;
margin-bottom: 26px;
margin-right: 7%;
margin-left: 7%;
padding-left: 1%;
`;

export const ResultH3 = styled.h3`
margin-left: 5%;
font-size: 33px;
font-weight: 400;
`;

export const CompletedItemsCount = styled.button`
border-radius: 35px;
background: #E5E8EF;
box-shadow:  5px 5px 10px #ced1d7, 
             -5px -5px 10px #fcffff;
width: 70px;
height: 70px;
border: none;
margin-left: 5%;
margin-top: 5%;
font-size: 20px;

&:hover {
    background: white;
    cursor: pointer;
  }

`;

