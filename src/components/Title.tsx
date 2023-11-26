import React from "react";
import "./css/Title.scss";
import Typography from "@mui/material/Typography";
interface Props {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;
  children: any;
  onClick?: () => void;
}
export const Title = ({ variant, children, onClick, ...rest }: Props) => {
  return (
    <Typography
      component="div"
      className={`Heading ${variant}`}
      variant={variant ? variant : "h6"}
      {...rest}
      onClick={onClick}
    >
      {children}
    </Typography>
  );
};
