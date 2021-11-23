import {
  CREATE_PET,
  RETRIEVE_PETS,
  UPDATE_PET,
  DELETE_PET,
} from "./actionTypes";

import PetsService from "../services/petsService";

export const createPet =
  ({ name, animal, breed, location, age, gender }) => async (dispatch) => {
    try {
      const res = await PetsService.create({
        name,
        animal,
        breed,
        location,
        age,
        gender,
      });

      dispatch({
        type: CREATE_PET,
        payload: res.data,
      });
    } catch (err) {
      console.error(err)
    }
  };

export const retrievePets = () => async (dispatch, b) => {
  try {
    const res = await PetsService.getAll();
    dispatch({
      type: RETRIEVE_PETS,
      payload: res.data1,
    });
  } catch (err) {
    console.error(err);

  }
};

export const updatePet = (id, data) => async (dispatch) => {
  try {
    const res = await PetsService.update(id, data);
    dispatch({
      type: UPDATE_PET,
      payload: res.data,
    });

  } catch (err) {
    console.error(err);
  }
};

export const deletePet = (id) => async (dispatch) => {
  try {
    await PetsService.delete(id);
    dispatch({
      type: DELETE_PET,

      payload: { id },
    });
  } catch (err) {
    console.error(err);
  }
};
