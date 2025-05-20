import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          This is currently a work in progress so it's a bit ugly, but like...
          the button will take you to the kink list so do I really need more
          here?
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          navigate("kinklist");
        }}
      >
        Kink List
      </Button>
    </Container>
  );
}
