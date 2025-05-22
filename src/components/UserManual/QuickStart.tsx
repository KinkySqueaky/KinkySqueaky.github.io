import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as RoutePaths from "../../constants/RoutePaths";
import Grid from "@mui/material/Grid";

import { Body } from "./formats";

export default function QuickStart() {
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
      <Body>
        If you don't feel like reading the detailed version, fuck it, this
        section is for you. Hi! I'm Squeaky. I lean sub/bottom pretty hard, but
        I'll top for certain things, usually in a service top role. For
        negotiation, we just gotta talk things through, and I'm more strict with
        people I've not played with before (duh). I'd highly recommend reading
        the detailed version because there's a lot of nuance to this stuff, but
        whatever, let's get into it.
      </Body>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={4}>
          <Body>
            My limits:
            <ul>
              <li>Anything permanent or illegal</li>
              <li>Age play</li>
              <li>Toilet play</li>
              <li>Tickling</li>
              <li>Branding</li>
              <li>Cutting</li>
            </ul>
          </Body>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Body>
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
          </Body>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Body>
            My main interests as a top:
            <ul>
              <li>Whacking people</li>
              <li>Tying people up</li>
              <li>Maybe hypnotizing people</li>
            </ul>
          </Body>
        </Grid>
      </Grid>

      <Body>
        Anyway, that was the quick start guide. Not much here, right? Yeah, it's
        more suited for quick pick-up play. Go read the{" "}
        <Link
          href={`#/${RoutePaths.USERMANUAL}`}
          onClick={() =>
            window.scrollTo({
              top: 0,
            })
          }
        >
          detailed version
        </Link>{" "}
        if you want to play in a serious or more intense capacity (there will be
        a quiz, closed book).
      </Body>
    </Container>
  );
}
