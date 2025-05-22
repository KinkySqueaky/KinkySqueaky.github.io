import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import * as RoutePaths from "../../constants/RoutePaths";
import Grid from "@mui/material/Grid";

const QuickStart = memo(function QuickStart() {
  return (
    <Container
      maxWidth="xxl"
      sx={{
        paddingTop: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Typography align="center" variant="h4">
        Squeaky's User Manual - Quick Start
      </Typography>
      <Typography variant="body1">
        If you don't feel like reading the detailed version, fuck it, this
        section is for you. Hi! I'm Squeaky. I lean sub/bottom pretty hard, but
        I'll top for certain things, usually in a service top role. I'm
        exploring my top side a bit more though. For negotiation, we just gotta
        talk things through, and I'm more strict with people I've not played
        with before (duh). I'd highly recommend reading the detailed version
        because there's a lot of nuance to this stuff, but whatever.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={4}>
          <Typography variant="body1">
            My limits:
            <ul>
              <li>Anything permanent or illegal</li>
              <li>Age play</li>
              <li>Toilet play</li>
              <li>Tickling</li>
              <li>Branding</li>
              <li>Cutting</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Typography variant="body1">
            My main interests as a bottom:
            <ul>
              <li>Service</li>
              <li>Bondage</li>
              <li>Pet play</li>
              <li>Pain</li>
              <li>Chastity</li>
              <li>Hypnosis</li>
              <li>Sounding</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Typography variant="body1">
            My main interests as a top:
            <ul>
              <li>Whacking people</li>
              <li>Tying people up</li>
              <li>Maybe hypnotizing people</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="body1">
        Anyway, that was the quick start guide. Not much here, right? Yeah, it's
        more suited for quick pick-up play. Go read the{" "}
        <Link href={`#/${RoutePaths.USERMANUAL}`}>detailed version</Link> if you
        want to play in a serious or more intense capacity (there will be a
        quiz, closed book).
      </Typography>
    </Container>
  );
});

export default QuickStart;
