import { useReducer, memo } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
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
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 2 }}>
        <IconButton onClick={toggleExpanded}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        {groupData.title}
      </Typography>
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
