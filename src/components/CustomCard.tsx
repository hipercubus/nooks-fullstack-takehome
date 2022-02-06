import { ReactNode } from "react";
import { Card } from "@mui/material";

type Props = {
  children: ReactNode;
  maxWidth?: string;
  minWidth?: string;
};
function CustomCard({
  children,
  maxWidth = "30rem",
  minWidth = "30rem",
}: Props) {
  return (
    <Card sx={{ maxWidth, minWidth, background: "#ffffffcc" }}>{children}</Card>
  );
}

export default CustomCard;
