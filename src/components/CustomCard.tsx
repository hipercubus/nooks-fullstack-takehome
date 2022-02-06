import { ReactNode } from "react";
import { Card } from "@mui/material";

type Props = {
  children: ReactNode;
  width?: string;
};
function CustomCard({ children, width = "30rem" }: Props) {
  return <Card sx={{ width, background: "#ffffffcc" }}>{children}</Card>;
}

export default CustomCard;
