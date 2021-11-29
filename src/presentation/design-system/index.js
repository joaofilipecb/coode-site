import styled from "styled-components";
import { containerStyles } from "../../application/styles";
import { Col } from "react-grid-system";
import { space, typography } from "styled-system";
export const Container = styled.div(containerStyles);
export const Img = styled.img`
  width: 100%;
`;

export const H2 = styled.h2`
  font-size: 35px;
  font-weight: 600;
  color: #060220;
  ${space}
  ${typography}
`;

export const Description = styled.p`
  font-weight: 100;
  line-height: 34px;
  font-size:21px;
  ${space}
  ${typography}
`;

export const BoxSection = styled(Col)(space);
