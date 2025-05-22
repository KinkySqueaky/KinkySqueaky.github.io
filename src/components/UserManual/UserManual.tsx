import { memo } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as RoutePaths from "../../constants/RoutePaths";

const UserManual = memo(function UserManual() {
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
        Squeaky's User Manual
      </Typography>
      <Typography variant="body1">
        Hi, hello, this is my user manual. This is the full thing, but if you're
        strapped for time, maybe check out the{" "}
        <Link href={`#/${RoutePaths.USERMANUAL}/${RoutePaths.QUICKSTART}`}>
          Quick Start
        </Link>{" "}
        version. Otherwise, feel free to check out the various sections below!
      </Typography>
    </Container>
  );
});

export default UserManual;
