import styled from "styled-components";
import { Typography, withStyles } from '@material-ui/core';
export const ImgIntroduction = styled.img`
  width: 50%;
`;

export const IconIntroduction = styled.div`
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  margin-right: 20px;
`;

export const DescriptionIntroduction = styled.p`
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  color: #fff;
  font-size: 14px;
  margin-top: 8px;
  margin-right: 20px;
`;
export const BoxIntroduction = styled.div`
  width: 33%;
`;

export const IntroductionSection = styled.section`
  padding-bottom: 120px;
  padding-top:120px;
`;

export const TitleSteps = withStyles({
  root: {
    textAlign: "center",
    fontSize: "35px",
    paddingBottom: "50px",
    fontWeight: "600",
    fontFamily: "Nunito, sans-serif"
  }
})(Typography)

export const DescIntroduction = withStyles({
  root: {
    color: "#8492a6!important",
    fontWeight: "100"
  }
})(Typography)

export const TitleIntroduction = withStyles({
  root: {
    color: "#3c4858!important",
    fontWeight: "100"
  }
})(Typography)
