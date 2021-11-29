import {
  ImgIntroduction,
  IconIntroduction,
  DescriptionIntroduction,
  TitleIntroduction,
  BoxIntroduction,
  IntroductionSection,
} from "./introduction.style";
import { Box, Grid, Typography } from '@material-ui/core';
import { Container } from '../../design-system';
import discovery from "./images/discovery.svg";
import testing from "./images/testing.svg";
import match from "./images/match.svg";
export const Introduction = () => {
  return (
    <IntroductionSection>
      <Container>
        <Grid container spacing={4}>
          <Grid item sm={4}>
            <Box
              sx={{
                width: '100%',
                height: 300,
                '&:hover': {
                  transition: 'all .5s ease',
                  transform: "translate(0px, -20px)"
                },
                padding: '20px',
                boxShadow: '0 0 3px rgba(60,72,88,.15) !important',
                borderRadius: '5px',
                boxSizing: 'border-box',
              }}
            >
              <Typography variant="h6" component="h2">Discovery</Typography>
              <Typography variant="body1" component="h2">Selecionamos os melhores profissionais do mercado através de uma imensa base de dados.</Typography>
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box
              sx={{
                width: '100%',
                height: 300,
                '&:hover': {
                  transition: 'all .5s ease',
                  transform: "translate(0px, -20px)"
                },
                padding: '20px',
                boxShadow: '0 0 3px rgba(60,72,88,.15) !important',
                borderRadius: '5px',
                boxSizing: 'border-box',
              }}
            >
              <Typography variant="h6" component="h2">Testing</Typography>
              <Typography variant="body1" component="h2">Uma etapa extremamente ágil com foco em avaliar tecnicamente os melhores perfis para a posição.</Typography>
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box
              sx={{
                width: '100%',
                height: 300,
                '&:hover': {
                  transition: 'all .5s ease',
                  transform: "translate(0px, -20px)"
                },
                padding: '20px',
                boxShadow: '0 0 3px rgba(60,72,88,.15) !important',
                borderRadius: '5px',
                boxSizing: 'border-box',
              }}
            >
              <Typography variant="h6" component="h2">Match</Typography>
              <Typography variant="body1" component="h2">Na última etapa, avaliamos se o profissional possui fit com o projeto e com a cultura da empresa.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </IntroductionSection >
  );
};
