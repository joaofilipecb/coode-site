import {
  ImgIntroduction,
  IconIntroduction,
  DescriptionIntroduction,
  BoxIntroduction,
  DescIntroduction,
  IntroductionSection,
  TitleIntroduction,
} from "./introduction.style";
import { Box, Grid } from '@material-ui/core';
import { Container } from '../../design-system';
import IntroductionText from './introduction.text';

export const Introduction = () => {

  const defineIcon = () => {

  }

  return (
    <IntroductionSection>
      <Container>
        <Grid container spacing={4}>
          {IntroductionText.map((value) =>
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
              > <Box sx={{
                height: "65px",
                width: "65px",
                lineHeight: "65px",
                backgroundColor: "rgba(47, 85, 212, .1)",
                textAlign: "center",
                lineHeight: "80px",
                color: "#2f55d4",
                borderRadius: "10px",
                marginBottom: "1.4rem"
              }}>{defineIcon(value.title)}</Box>
                <Box sx={{ marginBottom: "1rem" }}>
                  <TitleIntroduction variant="h6" component="h2">{value.title}</TitleIntroduction>
                </Box>
                <DescIntroduction variant="body1" component="h2">{value.description}</DescIntroduction>
              </Box>
            </Grid>)}
        </Grid>
      </Container>
    </IntroductionSection >
  );
};
