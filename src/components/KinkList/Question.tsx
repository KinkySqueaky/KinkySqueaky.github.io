import { useState, memo } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material/styles";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AnswerButtons from "./AnswerButtons";
import { type QuestionInfo } from "./QuestionData";

interface QuestionParams {
  questionData: QuestionInfo;
}

const Question = memo(function Question(props: QuestionParams) {
  const { questionData } = props;

  const [expanded, setExpanded] = useState(true);

  const hideCollapse = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("sm")
  );

  return (
    <Card sx={{ width: "100%", padding: 2 }}>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {!hideCollapse && (
          <IconButton
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        )}

        {questionData.title}
      </Typography>
      {(hideCollapse || expanded) && (
        <>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
          <Box mb={1}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  {questionData.top} Interest
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AnswerButtons questionID={questionData.ID} category="topint" />
              </Grid>
            </Grid>
          </Box>
          <Box mb={1}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  {questionData.top} Experience
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AnswerButtons questionID={questionData.ID} category="topexp" />
              </Grid>
            </Grid>
          </Box>
          <Box mb={1}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  {questionData.bottom} Interest
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AnswerButtons questionID={questionData.ID} category="botint" />
              </Grid>
            </Grid>
          </Box>
          <Box mb={1}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  {questionData.bottom} Experience
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AnswerButtons questionID={questionData.ID} category="botexp" />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Card>
  );
});

export default Question;
