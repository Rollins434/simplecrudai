import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPerson {
  id: any;
  firstName: string;
  lastName: string;
  status: boolean;
}

interface PersonState {
  persons: IPerson[];
}

const initialState: PersonState = {
  persons: [],
};

export const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (
      state,
      action: PayloadAction<{
        id: any;
        fname: string;
        lname: string;
        status: boolean;
      }>
    ) => {
      state.persons.push({
        id: action.payload.id,
        firstName: action.payload.fname,
        lastName: action.payload.lname,
        status: action.payload.status,
      });
    },

    deltePerson: (state, action) => {
      state.persons = state.persons.filter((data) => {
        return data.id !== action.payload;
      });
    },
    updatePerson: (state,  action: PayloadAction<{
        id: any;
        fname: string;
        lname: string;
        status: boolean;
      }>) => {
      state.persons = state.persons.filter((data) => {
        console.log(data)
        return data.id == action.payload.id ? action.payload : data;
      });
    },
    // getPerson: (state, action) => {
    // state.persons = state.persons.find((item) => return { item.id == action.payload});
     
    // },
  },
});

export default PersonSlice.reducer;
export const { addPerson, deltePerson, updatePerson,  } = PersonSlice.actions;
