import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup/ButtonGroup";

interface AnswerButtonsParams {
  value: string | undefined;
  onChange: (value: string) => void;
}

export default function AnswerButtons(params: AnswerButtonsParams) {
  const { value, onChange } = params;
  console.log(value);

  const handleChange = (newValue: string) => {
    const useValue = newValue === value ? "H" : newValue;
    onChange(useValue);
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
        variant={value === "A" ? "contained" : undefined}
        onClick={() => {
          handleChange("A");
        }}
      >
        HL
      </Button>
      <Button
        color="btnSL"
        variant={value === "B" ? "contained" : undefined}
        onClick={() => {
          handleChange("B");
        }}
      >
        SL
      </Button>
      <Button
        color="btn0"
        variant={value === "C" ? "contained" : undefined}
        onClick={() => {
          handleChange("C");
        }}
      >
        0
      </Button>
      <Button
        color="btn1"
        variant={value === "D" ? "contained" : undefined}
        onClick={() => {
          handleChange("D");
        }}
      >
        1
      </Button>
      <Button
        color="btn2"
        variant={value === "E" ? "contained" : undefined}
        onClick={() => {
          handleChange("E");
        }}
      >
        2
      </Button>
      <Button
        color="btn3"
        variant={value === "F" ? "contained" : undefined}
        onClick={() => {
          handleChange("F");
        }}
      >
        3
      </Button>
      <Button
        color="btn4"
        variant={value === "G" ? "contained" : undefined}
        onClick={() => {
          handleChange("G");
        }}
      >
        4
      </Button>
    </ButtonGroup>
  );
}
