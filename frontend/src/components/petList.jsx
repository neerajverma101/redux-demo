import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { retrievePets, deletePet } from "../actions/actions";

import { Table, Button } from "react-bootstrap";

const listRow = {
  padding: "2rem",
};

class PetList extends Component {
  componentDidMount() {
    this.props.retrievePets();
  }

  removePet = (id) => {
    this.props.deletePet(id).then(() => {
      this.props.retrievePets();
    });
  };

  render() {
    const { pets } = this.props;

    return (
      <div style={listRow}>
        <h4>Pet List</h4>
        <div className="col-md-6">
          <div>
            <Link to="/add-pet">
              <Button style={{ marginBottom: 12 }} variant="primary">
                Add pet
              </Button>
            </Link>
          </div>

          <Table responsive striped bordered hover className="u-full-width">
            <thead>
              <tr>
                <th>Name</th>

                <th>Animal</th>

                <th>Breed</th>

                <th>Location</th>

                <th>Age</th>

                <th>Gender</th>

                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {pets &&
                pets.map(
                  ({ id, name, animal, breed, location, age, gender }, i) => (
                    <tr key={i}>
                      <td>{name}</td>

                      <td>{animal}</td>

                      <td>{breed}</td>

                      <td>{location}</td>

                      <td>{age}</td>

                      <td>{gender}</td>

                      <td>
                        <Button
                          variant="secondary"
                          size="sm"
                          style={{ marginTop: 0 }}
                          onClick={() => this.removePet(id)}
                        >
                          Delete
                        </Button>

                        <Button
                          variant="secondary"
                          size="sm"
                          style={{ marginLeft: 12, marginTop: 0 }}
                        >
                          <Link
                            to={{
                              pathname: `/edit-pet`,
                              state: {
                                id: id,
                              },
                            }}
                            className="link"
                          >
                            Edit
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pets: state.pets,
  };
};

export default connect(mapStateToProps, { retrievePets, deletePet })(PetList);
