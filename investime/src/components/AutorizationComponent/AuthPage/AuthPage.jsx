import {
  Paper,
  Box,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Container,
} from '@mantine/core';
import classes from './AuthPageStyle.module.css';
import AuthenticationForm from '../AuthFormComp/AuthenticationForm';
const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '40vh', // Занимаем всю доступную высоту
};

export default function AuthenticationPage() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
          <Container size={"lg"}>
              <AuthenticationForm style={formStyles}></AuthenticationForm>
          </Container>
      </Paper>
    </div>
  );
}