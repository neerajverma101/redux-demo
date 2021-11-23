import React, { Component } from "react";

import { connect } from "react-redux";

import { updatePet } from "../actions/actions";

import { Redirect } from "react-router-dom";

import PetService from "../services/petsService";

import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

class EditPet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPet: {
        name: "",

        animal: "",

        breed: "",

        location: "",

        age: "",

        gender: "",
      },

      redirect: false,
    };
  }

  componentDidMount() {
    const {
      location: { state },
    } = this.props;
    if (!(state && state.id)) {
      this.setState({
        redirect: true,
      });
    } else {
      this.getPet(state.id);
    }
  }

  handleInputChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      currentPet: { ...prevState.currentPet, [id]: value },
    }));
  };

  getPet(id) {
    PetService.get(id).then((response) => {
      this.setState({
        currentPet: response.data,
      });
    });
  }

  savePet() {
    this.props

      .updatePet(this.state.currentPet.id, this.state.currentPet)

      .then(() => {
        this.setState({
          redirect: true,
        });
      });
  }

  render() {
    const { redirect, currentPet } = this.state;

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
              value={currentPet.name}
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
              value={currentPet.animal}
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
              value={currentPet.breed}
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
              value={currentPet.location}
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
              value={currentPet.age}
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
              value={currentPet.gender}
              onChange={this.handleInputChange}
              name="gender"
            />
          </div>

          <div>
            <button onClick={this.savePet} className="btn btn-success">
              Submit
            </button>
            <Button
              variant="secondary"
              style={{ marginLeft: 12 }}
              onClick={() => this.setState({ redirect: true })}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { updatePet })(withRouter(EditPet));
