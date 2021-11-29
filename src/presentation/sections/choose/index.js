import { ChooseSection, BoxImage } from "./choose.style";
import {
  Container,
  Img,
  H2,
  Description,
  BoxSection,
} from "../../design-system";
import goal from "./01.png";
import agility from "./02.png";
import { Col, Row } from "react-grid-system";
export const Choose = () => {
  return (
    <ChooseSection>
      <Container>
        <Row>
          <Col sm={5}>
            <BoxImage>
              <Img src={goal} />
            </BoxImage>
          </Col>
          <Col sm={1} />
          <BoxSection ml={60} mt={220} sm={5}>
            <H2>Assertividade</H2>
            <Description>
              Utilizamos inúmeros dados para encontrar perfis que correspondam
              às suas necessidades. Nosso objetivo é encontrar os melhores
              profissionais para o seu projeto.
            </Description>
          </BoxSection>
        </Row>
        <Row>
          <Col sm={1}></Col>
          <BoxSection ml={40} mt={180} sm={5}>
            <H2 textAlign="right">Agilidade</H2>
            <Description textAlign="right">
              Temos uma metodologia extremamente enxuta no processo de
              contratação. Nosso objetivo é focar nos pontos essenciais do
              candidato.
            </Description>
          </BoxSection>
          <Col sm={1} />
          <Col sm={3}>
            <BoxImage>
              <Img src={agility} />
            </BoxImage>
          </Col>
        </Row>
      </Container>
    </ChooseSection>
  );
};
