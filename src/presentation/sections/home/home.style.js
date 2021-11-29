import styled from "styled-components";
import {
  homeStyle,
  descriptionHeader,
  titleHeader,
} from "../../../application/styles";
export const HomeSection = styled.section(homeStyle.global);

export const TitleHome = styled.h2(titleHeader);
export const DescriptionHome = styled.p(descriptionHeader);

export const ImgHome = styled.img`
  width: 450px;
`;

export const ContentHome = styled.div`
  display: flex;
  div {
    width: 50%;
  }
`;
