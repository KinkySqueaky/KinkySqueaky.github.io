import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Oopsie whoopsie, you ended up somewhere you shouldn't be!
        </Typography>
      </Box>
    </Container>
  );
}
