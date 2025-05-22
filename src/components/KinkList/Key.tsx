import { memo, useReducer } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Box, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import Typography, { TypographyProps } from "@mui/material/Typography";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const KeyItem = (props: BoxProps) => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      gap: "8px",
    }}
    {...props}
  />
);
const KeyButton = (props: ButtonProps) => (
  <Button
    variant="outlined"
    sx={{ minWidth: "32px", maxWidth: "32px", height: "32px", padding: "4px" }}
    {...props}
  />
);
const KeyLabel = (props: TypographyProps) => (
  <Typography variant="body2" sx={{ lineHeight: "32px" }} {...props} />
);

const Key = memo(function Key() {
  const [expanded, toggleExpanded] = useReducer((state) => !state, true);
  return (
    <Card
      sx={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        width: "576px",
      }}
    >
      <Typography align="center" variant="h6">
        <IconButton onClick={toggleExpanded}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        Key
      </Typography>
      {expanded && (
        <>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <KeyItem>
                  <KeyButton color="btnHL">HL</KeyButton>
                  <KeyLabel>Hard limit</KeyLabel>
                </KeyItem>
                <KeyItem>
                  <KeyButton color="btnSL">SL</KeyButton>
                  <KeyLabel>Soft limit</KeyLabel>
                </KeyItem>
                <KeyItem>
                  <KeyButton color="btn0">0</KeyButton>
                  <KeyLabel>No interest/experience</KeyLabel>
                </KeyItem>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <KeyItem>
                  <KeyButton color="btn1">1</KeyButton>
                  <KeyLabel>Slight interest/experience</KeyLabel>
                </KeyItem>
                <KeyItem>
                  <KeyButton color="btn2">2</KeyButton>
                  <KeyLabel>Moderate interest/experience</KeyLabel>
                </KeyItem>
                <KeyItem>
                  <KeyButton color="btn3">3</KeyButton>
                  <KeyLabel>Significant interest/experience</KeyLabel>
                </KeyItem>
                <KeyItem>
                  <KeyButton color="btn4">4</KeyButton>
                  <KeyLabel>Extreme interest/experience</KeyLabel>
                </KeyItem>
              </Stack>
            </Grid>
          </Grid>
        </>
      )}
    </Card>
  );
});

export default Key;
