import { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { type GroupInfo } from "./QuestionData";
import Question from "./Question";
import { type Responses } from "./Utils";

interface GroupParams {
  groupData: GroupInfo;
  responses: Responses;
  onChange: (questionID: string, type: string, value: string) => void;
}

export default function Group(params: GroupParams) {
  const { groupData, responses: initialResponses, onChange } = params;

  const [expanded, setExpanded] = useState(true);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 2 }}>
        <IconButton
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        {groupData.title}
      </Typography>
      {expanded && (
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {groupData.questions.map((qst) => (
            <Grid item xs={12} sm={6} xl={4} key={qst.ID}>
              <Question
                questionData={qst}
                response={initialResponses[qst.ID]}
                onChange={onChange}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
