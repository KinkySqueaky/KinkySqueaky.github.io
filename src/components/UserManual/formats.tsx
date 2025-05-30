import Typography, { TypographyProps } from "@mui/material/Typography";
export const Header = (props: TypographyProps) => (
  <Typography variant="h5" align="center" color="secondary" {...props} />
);

export const Body = (props: TypographyProps) => (
  <Typography variant="body1" {...props} />
);
