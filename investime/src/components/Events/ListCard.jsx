import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from './ListCardStyle.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function ListCard({article}) {
  return (
          <Card key= {uuidv4()} p="md" radius="md" component="a" href="#" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
              <Image src={article.image} />
            </AspectRatio>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
              {article.date}
            </Text>
            <Text className={classes.title} mt={5}>
              {article.title}
            </Text>
          </Card>

  );
}