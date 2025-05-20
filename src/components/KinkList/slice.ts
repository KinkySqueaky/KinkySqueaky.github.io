import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  type Responses,
  type Category,
  codeToResponse,
  removeEmptyResponse,
  cleanResponse,
} from "./utils";

export const kinkListSlice = createSlice({
  name: "kinklist",
  initialState: {} as Responses,
  reducers: {
    initialize: (_, action: PayloadAction<string>) =>
      cleanResponse(codeToResponse(action.payload)),
    cleanup: () => ({}),
    recordAnswer: (
      state,
      action: PayloadAction<{
        question: string;
        category: Category;
        value: string;
      }>
    ) => {
      const oldState = JSON.parse(JSON.stringify(state));
      const questionID = action.payload.question;
      const category = action.payload.category;
      const value = action.payload.value;
      if (!(questionID in oldState)) {
        oldState[questionID] = {
          topint: "",
          topexp: "",
          botint: "",
          botexp: "",
        };
      }
      // Set appropriate value
      if (category === "topint") {
        oldState[questionID]["topint"] = value;
      }
      if (category === "topexp") {
        oldState[questionID]["topexp"] = value;
      }
      if (category === "botint") {
        oldState[questionID]["botint"] = value;
      }
      if (category === "botexp") {
        oldState[questionID]["botexp"] = value;
      }
      // Fill out nonexistent entries
      if (!oldState[questionID]["topint"]) {
        oldState[questionID]["topint"] = "H";
      }
      if (!oldState[questionID]["topexp"]) {
        oldState[questionID]["topexp"] = "H";
      }
      if (!oldState[questionID]["botint"]) {
        oldState[questionID]["botint"] = "H";
      }
      if (!oldState[questionID]["botexp"]) {
        oldState[questionID]["botexp"] = "H";
      }
      return removeEmptyResponse(oldState);
    },
  },
});

export const { initialize, cleanup, recordAnswer } = kinkListSlice.actions;
export default kinkListSlice.reducer;
