import React from 'react';
import styled from 'styled-components';

const DateTimeDiv = styled.div`
width: 100%;
height: 50px;
padding-top: 2%;

`;
const DateParagraph = styled.p`
float: left;
margin-left: 3%;
`;
const TimeParagraph = styled.p`
float: right;
margin-right: 3%;
`;
class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }

    currentTime() {
        this.setState({
            time: new Date()
        })
    }

    componentWillMount() {
        setInterval(() => this.currentTime(), 1000)

    }


    render() {
        return (
            <DateTimeDiv>
                <DateParagraph>{this.state.time.toLocaleDateString()}</DateParagraph>
                <TimeParagraph>{this.state.time.toLocaleTimeString()}</TimeParagraph>

            </DateTimeDiv>
        )
    }
}

export default Clock;