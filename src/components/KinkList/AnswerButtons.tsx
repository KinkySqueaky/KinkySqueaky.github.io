import { memo } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup/ButtonGroup";
import { Category } from "./utils";

import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../../store/store";
import { recordAnswer } from "./slice";

interface AnswerButtonsParams {
  questionID: string;
  category: Category;
}

const AnswerButtons = memo(function AnswerButtons(props: AnswerButtonsParams) {
  const { questionID, category } = props;

  const answerData = useSelector(
    (state: RootState) => state.kinklist?.[questionID]?.[category]
  );
  const dispatch = useDispatch();

  const handleChange = (newValue: string) => {
    const useValue = newValue === answerData ? "H" : newValue;
    dispatch(
      recordAnswer({
        question: questionID,
        category: category,
        value: useValue,
      })
    );
  };

  return (
    <ButtonGroup
      variant="outlined"
      sx={{
        "& .MuiButtonGroup-grouped": {
          transitionDuration: "0ms",
          minWidth: "32px",
          maxWidth: "32px",
          height: "32px",
          padding: "4px",
        },
      }}
    >
      <Button
        color="btnHL"
        variant={answerData === "A" ? "contained" : undefined}
        onClick={() => {
          handleChange("A");
        }}
      >
        HL
      </Button>
      <Button
        color="btnSL"
        variant={answerData === "B" ? "contained" : undefined}
        onClick={() => {
          handleChange("B");
        }}
      >
        SL
      </Button>
      <Button
        color="btn0"
        variant={answerData === "C" ? "contained" : undefined}
        onClick={() => {
          handleChange("C");
        }}
      >
        0
      </Button>
      <Button
        color="btn1"
        variant={answerData === "D" ? "contained" : undefined}
        onClick={() => {
          handleChange("D");
        }}
      >
        1
      </Button>
      <Button
        color="btn2"
        variant={answerData === "E" ? "contained" : undefined}
        onClick={() => {
          handleChange("E");
        }}
      >
        2
      </Button>
      <Button
        color="btn3"
        variant={answerData === "F" ? "contained" : undefined}
        onClick={() => {
          handleChange("F");
        }}
      >
        3
      </Button>
      <Button
        color="btn4"
        variant={answerData === "G" ? "contained" : undefined}
        onClick={() => {
          handleChange("G");
        }}
      >
        4
      </Button>
    </ButtonGroup>
  );
});

export default AnswerButtons;
