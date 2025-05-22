import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import * as RoutePaths from "../../constants/RoutePaths";
import { useStableNavigate } from "../../hooks/StableNavigate";

export default function Home() {
  const navigate = useStableNavigate();
  return (
    <Container
      maxWidth="sm"
      sx={{
        paddingTop: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Typography align="center" variant="h4">
        This is currently a work in progress so it's a bit ugly, but like... the
        button will take you to the kink list so do I really need more here?
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={() => {
            navigate(RoutePaths.KINKLIST);
          }}
        >
          Kink List
        </Button>
      </Box>
      <Typography align="center" variant="h4">
        Or maybe you're here for my user manual. In that case here's a different
        button.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={() => {
            navigate(RoutePaths.USERMANUAL);
          }}
        >
          User Manual
        </Button>
      </Box>
    </Container>
  );
}
