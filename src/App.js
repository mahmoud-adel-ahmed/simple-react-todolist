import React, { Component } from "react";
import items from "./Data";
import List from "./components/List";
import { AddItem } from "./components/AddItem";
class App extends Component {
  state = {
    items,
    name: "",
    age: "",
  };

  render() {
    let handleRemove = (id) => {
      let items = this.state.items.filter((item) => item.id !== id);
      this.setState({ items });
    };

    let handleSubmit = (e) => {
      e.preventDefault();
      let { items } = this.state;
      if (e.target.name.value !== "") {
        items.push({
          name: this.state.name,
          age: this.state.age,
          id: Math.random(),
        });
        this.setState({ ...this.state, items });
        this.setState({
          ...this.state,
          name: "",
          age: "",
        });
      }
    };

    let handleChange = (e) => {
      let { name, value } = e.target;
      this.setState({
        ...this.state,
        [name]: value,
      });
    };

    return (
      <div className="container">
        <h2>todo list</h2>
        <div className="head">
          <span>name</span>
          <span>age</span>
          <span>Action</span>
        </div>
        {this.state.items.length ? (
          <List items={this.state.items} handleRemove={handleRemove} />
        ) : (
          <div className="no-items">
            <h4>there is no items</h4>
          </div>
        )}
        <AddItem
          {...this.state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
}
export default App;
