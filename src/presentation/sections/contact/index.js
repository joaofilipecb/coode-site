import {
  ContactSection,
  TitleContact
} from "./contact.style";
import { Grid, TextField, Button } from '@material-ui/core';
import { Container } from '../../design-system';

export const Contact = () => {


  return (
    <ContactSection id="contact">
      <Container>
        <TitleContact>Contato</TitleContact>
        <Grid container spacing={4}>
          <Grid sm={3} />
          <Grid sm={6}>
            <TextField label="Seu nome" fullWidth={true} />
            <TextField label="E-mail" fullWidth={true} />
            <TextField label="Empresa" fullWidth={true} />
            <TextField label="Seu telefone" fullWidth={true} />
            <Button style={{ background: '#2f55d4', color: '#fff', marginTop: '30px' }} size="large" variant="contained">Enviar</Button>
          </Grid>
          <Grid sm={3} />
        </Grid>
      </Container>
    </ContactSection>
  );
};


