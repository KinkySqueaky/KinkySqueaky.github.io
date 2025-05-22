import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useStableNavigate } from "../../hooks/StableNavigate";

export default function Error() {
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
        Oopsie whoopsie, you ended up somewhere you shouldn't be!
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={() => {
            navigate("");
          }}
        >
          Go Home!
        </Button>
      </Box>
    </Container>
  );
}
