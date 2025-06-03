import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as RoutePaths from "../../constants/RoutePaths";
import { Line } from "../../utils/formats";

import Intro from "./Intro";
import VanillaLife from "./VanillaLife";
import BasicsOfPlay from "./BasicsOfPlay";
import QuirksOfPlay from "./QuirksOfPlay";
import Limits from "./Limits";
import BottomDetails from "./BottomDetails";
import TopDetails from "./TopDetails";

export default function UserManual() {
  return (
    <Container
      maxWidth="xxl"
      sx={{
        paddingTop: "16px",
        paddingBottom: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Typography align="center" variant="h4">
        Squeaky's User Manual
      </Typography>
      <Typography variant="body1">
        Hi, hello, this is my user manual. This is the full thing, but if you're
        strapped for time, maybe check out the{" "}
        <Link
          href={`#/${RoutePaths.USERMANUAL}/${RoutePaths.QUICKSTART}`}
          onClick={() =>
            window.scrollTo({
              top: 0,
            })
          }
        >
          Quick Start
        </Link>{" "}
        version. Otherwise, feel free to check out the various sections below
        (they're collapsible UwU)!
      </Typography>

      <Line />
      <Intro />
      <Line />
      <VanillaLife />
      <Line />
      <BasicsOfPlay />
      <Line />
      <QuirksOfPlay />
      <Line />
      <Limits />
      <Line />
      <BottomDetails />
      <Line />
      <TopDetails />
    </Container>
  );
}
