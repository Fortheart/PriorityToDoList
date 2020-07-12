import React from 'react';

class selectBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = { selectBoxValue: "" }
    }

    addItem = () => {
        const selectBoxElement = document.getElementById("selectBoxElement")
        this.setState({ selectBoxValue: selectBoxElement.value });
        console.log(this.state);
    }


    render() {
        return (
            <div>

                <select id="selectBoxElement" value={this.state.selectValue}
                >
                    <option value="Must">Must do today</option>
                    <option value="Should">Should do today</option>
                    <option value="Could">Could do today</option>
                </select>
                <button onClick={this.addItem}>Add</button>



            </div>
        )
    }
}

export default selectBox;