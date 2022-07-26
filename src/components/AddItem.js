import React, { Component } from "react";

export class AddItem extends Component {
  render() {
    let { handleChange, handleSubmit, name, age } = this.props;
    return (
      <>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="enter your name"
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            value={age}
            placeholder="enter your age"
            onChange={handleChange}
          />
          <button type="submit">add</button>
        </form>
      </>
    );
  }
}
