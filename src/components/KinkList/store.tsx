import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  type Responses,
  type Category,
  codeToResponse,
  removeEmptyResponse,
  cleanResponse,
} from "./utils";

export const store = configureStore({
  reducer: {
    kinklist: (state: Responses = {}, action) => {
      switch (action.type) {
        case "ANSWER":
          const oldState = JSON.parse(JSON.stringify(state));
          const questionID = action.question as string;
          const category = action.category as Category;
          const value = action.value as string;
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
        case "INIT":
          return cleanResponse(codeToResponse(action.data as string));
        case "CLEANUP":
          return {};
      }
      return state;
    },
  },
});

export const useKLDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useKLSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>();
