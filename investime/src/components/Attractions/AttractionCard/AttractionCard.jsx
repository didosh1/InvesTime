import React from 'react';
import { Image, Card, Text, Group, Button, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconStar } from '@tabler/icons-react';
import classes from './AttractionCardStyle.module.css'
import '@mantine/carousel/styles.css';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

export default function AttractionCard({ data }) {
  const slides = data.images.map((img) => (
    <Carousel.Slide key={uuidv4()}>
      <Image src={img} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group justify="space-between" mt="lg">
        <Text fw={500} fz="lg">
          {data.title}
        </Text>

        <Group gap={5}>
          <IconStar style={{ width: rem(16), height: rem(16) }} />
          <Text fz="xs" fw={500}>
          {data.rating}
          </Text>
        </Group>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        {data.description}
      </Text>

      <Group justify="space-between" mt="md">
        <Link to={"/home"}><Button variant="gradient"
      gradient={{ from: 'blue', to: 'lime', deg: 255 }} radius="md">Посмотреть на карте</Button>
        </Link>
      </Group>
    </Card>
  );
}