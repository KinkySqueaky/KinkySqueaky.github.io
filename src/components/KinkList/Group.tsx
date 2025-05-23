import { useReducer, memo } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { type GroupInfo } from "./QuestionData";
import Question from "./Question";

interface GroupParams {
  groupData: GroupInfo;
}

const Group = memo(function Group(props: GroupParams) {
  const { groupData } = props;

  const [expanded, toggleExpanded] = useReducer((state) => !state, false);

  return (
    <Box sx={{ mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: expanded ? "16px" : "0px",
        }}
      >
        <Button
          color="white"
          sx={{ textTransform: "unset" }}
          onClick={toggleExpanded}
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          <Typography variant="h4" sx={{ padding: "0px 8px" }}>
            {groupData.title}
          </Typography>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      {expanded && (
        <Grid container spacing={2}>
          {groupData.questions.map((qst) => (
            <Grid item xs={12} sm={6} xl={4} key={qst.ID}>
              <Question questionData={qst} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
});

export default Group;
