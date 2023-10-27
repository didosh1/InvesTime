import React from 'react';
import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './ContactUsStyle.module.css';
import ContactIconsList from './ContactIcons';

export default function ContactUs() {

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Свяжитесь с нами</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Оставьте свой email и мы добавим вас на сайт в течении суток.
          </Text>

          <ContactIconsList />
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Имя"
            placeholder="Иван Иванов"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Ваше сообщение"
            placeholder="У меня возник вопрос..."
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button className={classes.control}>Отправить сообщение</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
