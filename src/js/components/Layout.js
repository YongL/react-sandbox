import React from "react";

import Body from "./Body";
import Header from "./Header";

import MyDOM from "./MyDOM"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { // can only change within the component
      title: "Welcome YOoo!",
    };
  }

  getVal(){
    return "Yong";
  }

  changeTitle(title) {
    this.setState({title}); // change the state
  }

  render() {
    // var list = [
    //   <MyDOM/>,
    //   <MyDOM/>,
    //   <MyDOM/>,
    //   <MyDOM/>,
    // ]; https://reactjs.org/docs/lists-and-keys.html#keys
    // react complain should use their API for list
    return (// pass a function into the props 'changeTitle'
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <div>Hello Adarsh</div>
        <Body test="...no comment!!!"/>
      </div>
    );
  }
}
