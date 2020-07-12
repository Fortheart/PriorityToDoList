import React, { Component } from 'react';

import {
  Main, PrioritySelector, PrioritySelectors,
  TodoTextInput, PriorityTextSelect,
  TodoAddButton, ResultContainer,
  ResultContainerUl, ResultIcons,
  ResultText, ResultH3, CompletedItemsCount
} from './appStyle';


import checkIcon from './img/check-solid.svg';
import crossCheck from './img/times-solid.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SelectBox from './selectBox.component';
import Clock from './clock.component';



class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
      filterPriority: "All",
      completedItems: 0
    }

    if (localStorage.getItem("list") < 1) {
      localStorage.setItem('list', JSON.stringify(this.state.list));
    }
  }
  componentDidMount() {
    var list = JSON.parse(localStorage.getItem("list"));
    var completedItems = JSON.parse(localStorage.getItem("completedItemsLS"));
    this.setState({ list });
    this.setState({ completedItems });

    document.title = "Priority To Do List"



  }



  updateInput(key, value) {
    this.setState({
      [key]: value
    })
  }

  addItem() {
    const selectBoxElement = document.getElementById("selectBoxElement")
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
      priority: selectBoxElement.value
    };

    const list = [... this.state.list];
    list.push(newItem);

    localStorage.setItem('list', JSON.stringify(list));
    this.setState({
      list,
      newItem: ""
    })



  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
    localStorage.setItem('list', JSON.stringify(updatedList));

  }
  deleteAll() {
    this.setState({ completedItems: 0 })
  }
  completeItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
    localStorage.setItem('list', JSON.stringify(updatedList));



    //const completedItemsLS = JSON.parse(localStorage.getItem("completedItems"));
    //const completedItems = this.state.completedItems;

    this.setState(prevState => {
      return { completedItems: prevState.completedItems + 1 }
    })

    //localStorage.setItem('completedItemsLS', JSON.stringify(completedItems));


  }

  allItems = () => {
    this.setState({ filterPriority: "All" })
  }

  mustFilterItems = () => {
    this.setState({ filterPriority: "Must" })
  }

  shouldFilterItems = () => {
    this.setState({ filterPriority: "Should" })
  }

  couldFilterItems = () => {
    this.setState({ filterPriority: "Could" })
  }
  componentDidUpdate() {
    const completedItems = this.state.completedItems;
    localStorage.setItem('completedItemsLS', JSON.stringify(completedItems));
  }




  render() {

    return (
      <div>
        <Main>
          <header className="App-header">

            <Clock />
            <Router>
              <Switch>
                <Route path="/SelectBox" exact component={SelectBox} />
              </Switch>
            </Router>
          </header>
          <PrioritySelectors>
            <PrioritySelector className="all" onClick={this.allItems}>All</PrioritySelector>
            <PrioritySelector className="mustDo" onClick={this.mustFilterItems}>Must do today!</PrioritySelector>
            <PrioritySelector className="shouldDo" onClick={this.shouldFilterItems}>Should do today</PrioritySelector>
            <PrioritySelector className="couldDo" onClick={this.couldFilterItems}>Could do today</PrioritySelector>
          </PrioritySelectors>

          {/*<p>{this.state.list.length}</p>*/}
          <TodoTextInput
            type="text"
            placeholder="Type something..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <i class="las la-angle-down"></i>
          <PriorityTextSelect id="selectBoxElement" value={this.state.selectValue} >
            <option value="Must">Must do today!</option>
            <option value="Should">Should do today</option>
            <option value="Could">Could do today</option>
          </PriorityTextSelect>
          <TodoAddButton onClick={() => this.addItem()}>Add</TodoAddButton>
          <div>
            <CompletedItemsCount onClick={() => this.deleteAll()}>{this.state.completedItems}</CompletedItemsCount>
          </div>
        </Main>
        <div>

          {this.state.filterPriority === "All" ?
            <div>
              <ResultContainer>
                <ResultH3>Must do today!</ResultH3>
                <ResultContainerUl>{this.state.list.filter(item => item.priority === "Must").map(item => {
                  return (
                    <ResultText key={item.id}>{item.value}
                      <a onClick={() => this.deleteItem(item.id)}>
                        <ResultIcons src={crossCheck}></ResultIcons>
                      </a>
                      <a onClick={() => this.completeItem(item.id)}>
                        <ResultIcons src={checkIcon}></ResultIcons>
                      </a>
                    </ResultText>
                  )
                })}
                </ResultContainerUl>
              </ResultContainer>

              <ResultContainer>
                <ResultH3>Should do today</ResultH3>
                <ResultContainerUl>{this.state.list.filter(item => item.priority === "Should").map(item => {
                  return (
                    <ResultText key={item.id}>{item.value}
                      <a onClick={() => this.deleteItem(item.id)}>
                        <ResultIcons src={crossCheck}></ResultIcons>
                      </a>
                      <a onClick={() => this.completeItem(item.id)}>
                        <ResultIcons src={checkIcon}></ResultIcons>
                      </a>
                    </ResultText>
                  )
                })}
                </ResultContainerUl>
              </ResultContainer>

              <ResultContainer>
                <ResultH3>Could do today</ResultH3>
                <ResultContainerUl>{this.state.list.filter(item => item.priority === "Could").map(item => {
                  return (
                    <ResultText key={item.id}>{item.value}
                      <a onClick={() => this.deleteItem(item.id)}>
                        <ResultIcons src={crossCheck}></ResultIcons>
                      </a>
                      <a onClick={() => this.completeItem(item.id)}>
                        <ResultIcons src={checkIcon}></ResultIcons>
                      </a>
                    </ResultText>
                  )
                })}
                </ResultContainerUl>
              </ResultContainer>

            </div>


            : null
          }

          {this.state.filterPriority === "Must" ?
            <ResultContainer>
              <ResultH3>Must do today!</ResultH3>
              <ResultContainerUl>{this.state.list.filter(item => item.priority === "Must").map(item => {
                return (
                  <ResultText key={item.id}>{item.value}
                    <a onClick={() => this.deleteItem(item.id)}>
                      <ResultIcons src={crossCheck}></ResultIcons>
                    </a>
                    <a onClick={() => this.completeItem(item.id)}>
                      <ResultIcons src={checkIcon}></ResultIcons>
                    </a>
                  </ResultText>
                )
              })}
              </ResultContainerUl>
            </ResultContainer>
            : null
          }
          {this.state.filterPriority === "Should" ?
            <ResultContainer>
              <ResultH3>Should do today</ResultH3>
              <ResultContainerUl>{this.state.list.filter(item => item.priority === "Should").map(item => {
                return (
                  <ResultText key={item.id}>{item.value}
                    <a onClick={() => this.deleteItem(item.id)}>
                      <ResultIcons src={crossCheck}></ResultIcons>
                    </a>
                    <a onClick={() => this.completeItem(item.id)}>
                      <ResultIcons src={checkIcon}></ResultIcons>
                    </a>
                  </ResultText>
                )
              })}
              </ResultContainerUl>
            </ResultContainer>
            : null
          }
          {this.state.filterPriority === "Could" ?
            <ResultContainer>
              <ResultH3>Could do today</ResultH3>
              <ResultContainerUl>{this.state.list.filter(item => item.priority === "Could").map(item => {
                return (
                  <ResultText key={item.id}>{item.value}
                    <a onClick={() => this.deleteItem(item.id)}>
                      <ResultIcons src={crossCheck}></ResultIcons>
                    </a>
                    <a onClick={() => this.completeItem(item.id)}>
                      <ResultIcons src={checkIcon}></ResultIcons>
                    </a>
                  </ResultText>
                )
              })}
              </ResultContainerUl>
            </ResultContainer>
            : null
          }
          {console.log(this.state.list)}
        </div>
      </div>

    );
  }
}

export default App;
