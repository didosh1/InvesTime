import { useForm } from '@mantine/form';
import { useToggle, upperFirst } from '@mantine/hooks';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import RumblerButton from '../RamblerButton';
import SomethingButton from '../SomethingButton';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { api } from '../../../axiosConfig';
import { useEffect, useContext} from 'react';
import { AuthContext } from '../../../context/AuthContext';

export default function AuthenticationForm(props) {
  const [type, toggle] = useToggle(['login', 'register']);
  const navigate = useNavigate();
  const { linkType } = useParams();
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    if (linkType === 'register') {
      toggle();
    }
  }, [linkType, toggle]);

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
    <Paper radius="md" padding="xl" {...props}>
      <Text ta={"center"}size="lg" weight={500}>
        Welcome to <Text display={"inline"} c="rgb(79, 181, 69)">Investime</Text>
      </Text>
      <form onSubmit={form.onSubmit(async () => {
  try {
    if (type === "login"){
        const response = await api.post('/auth/login', {
            email: form.values.email,
            password: form.values.password,
          });

        setAuth({role:"Клиент", email: response.data.email, fio: response.data.fio});
    }
    else{
        const response = await api.post('/auth/registration', {
            email: form.values.email,
            fio: form.values.name,
            password: form.values.password,
          });
          setAuth({role:"Клиент", email: form.values.name, fio: form.values.name});
    }
    
    navigate("/home");
  } catch (error) {
    console.error('Error:', error);
  }
})}>
        <Stack spacing="lg">
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@investime.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />

          {type === 'register' && (
            <Checkbox color="rgb(79, 181, 69)"
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group justify="space-between"  style={{ marginTop: '10px' }}>
          <Anchor component="button" type="button" c="rgb(79, 181, 69)" onClick={() => toggle()} size="xs">
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl" color="rgb(79, 181, 69)">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
