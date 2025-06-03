import Typography, { TypographyProps } from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export const Header = (props: TypographyProps) => (
  <Typography variant="h5" align="center" color="secondary" {...props} />
);

export const Body = (props: TypographyProps) => (
  <Typography variant="body1" {...props} />
);

export const Line = () => <Divider sx={{ marginTop: 1, marginBottom: 1 }} />;
