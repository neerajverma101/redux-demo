import React, { Component } from "react";

import { connect } from "react-redux";

import { createPet } from "../actions/actions";

import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";

class AddPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      animal: "",
      breed: "",
      location: "",
      age: "",
      gender: "",
      redirect: false,
    };
  }

  handleInputChange = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  savePet() {
    const { name, animal, breed, location, age, gender } = this.state;

    this.props
      .createPet({ name, animal, breed, location, age, gender })
      .then(() => {
        this.setState({
          redirect: true,
        });
      });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="submit-form">
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="animal">Animal</label>

            <input
              type="text"
              className="form-control"
              id="animal"
              required
              value={this.state.animal}
              onChange={this.handleInputChange}
              name="animal"
            />
          </div>

          <div className="form-group">
            <label htmlFor="breed">Breed</label>

            <input
              type="text"
              className="form-control"
              id="breed"
              required
              value={this.state.breed}
              onChange={this.handleInputChange}
              name="breed"
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>

            <input
              type="text"
              className="form-control"
              id="location"
              required
              value={this.state.location}
              onChange={this.handleInputChange}
              name="location"
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>

            <input
              type="text"
              className="form-control"
              id="age"
              required
              value={this.state.age}
              onChange={this.handleInputChange}
              name="age"
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>

            <input
              type="text"
              className="form-control"
              id="gender"
              required
              value={this.state.gender}
              onChange={this.handleInputChange}
              name="gender"
            />
          </div>
          <div>
            <button onClick={() => this.savePet()} className="btn btn-success">
              Submit
            </button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { createPet })(AddPet);
