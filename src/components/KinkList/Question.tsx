import { useState } from "react";

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
import { type Category } from "./Utils";

interface QuestionParams {
  questionData: QuestionInfo;
  response: { [key in Category]: string } | undefined;
  onChange: (questionID: string, type: string, value: string) => void;
}

export default function Question(params: QuestionParams) {
  const { questionData, response: initialResponse, onChange } = params;

  const [expanded, setExpanded] = useState(true);

  const hideCollapse = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("sm")
  );

  const handleChange = (category: string) => (value: string) => {
    onChange(questionData.ID, category, value);
  };

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
                <AnswerButtons
                  value={
                    initialResponse ? initialResponse["topint"] : undefined
                  }
                  onChange={handleChange("topint")}
                />
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
                <AnswerButtons
                  value={
                    initialResponse ? initialResponse["topexp"] : undefined
                  }
                  onChange={handleChange("topexp")}
                />
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
                <AnswerButtons
                  value={
                    initialResponse ? initialResponse["botint"] : undefined
                  }
                  onChange={handleChange("botint")}
                />
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
                <AnswerButtons
                  value={
                    initialResponse ? initialResponse["botexp"] : undefined
                  }
                  onChange={handleChange("botexp")}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Card>
  );
}
