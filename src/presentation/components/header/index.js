import Logo from "./images/logo.svg";
import { globalStyles } from "../../../application/styles/global";
import { Box, Grid } from '@material-ui/core';
import HeaderText from "./header.text";
import { LinkHeader, HeaderStyle, ImgLogoStyle } from "./header.style";

export const Header = () => {
  return (
    <HeaderStyle>
      <Box style={globalStyles.defaultContainer}>
        <Grid container>
          <Grid sm={3}>
            <ImgLogoStyle src={Logo} />
          </Grid>
          <Grid sm={9}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {HeaderText.map((value, i) => <LinkHeader href={`#${value.link}`} key={i}>{value.title}</LinkHeader>)}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </HeaderStyle>
  );
};