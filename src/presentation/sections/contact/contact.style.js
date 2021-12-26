import styled from "styled-components";
import { Typography, withStyles } from '@material-ui/core';

export const ContactSection = styled.section`
  padding-bottom: 120px;
  padding-top:120px;
`;

export const TitleContact = withStyles({
  root: {
    color: "#060220 !important",
    fontWeight: "600",
    fontSize: "35px",
    textAlign: "center",
    fontFamily: "Nunito, sans-serif"
  }
})(Typography)