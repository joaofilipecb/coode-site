import Computer from "./images/computer-home.png";
import { Container } from "../../design-system";
import {
  HomeSection,
  ContentHome,
  ImgHome,
  DescriptionHome,
  TitleHome,
} from "./home.style";

export const Home = () => {
  return (
    <HomeSection>
      <Container>
        <ContentHome>
          <div>
            <TitleHome>
              Contrate os Melhores Desenvolvedores JavaScript
            </TitleHome>
            <DescriptionHome>
              Somos especialistas em: Contratar, Gerenciar e Escalar a sua
              equipe de Desenvolvedores JavaScript.
            </DescriptionHome>
          </div>
          <div>
            <ImgHome src={Computer} />
          </div>
        </ContentHome>
      </Container>
    </HomeSection>
  );
};
