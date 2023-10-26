import { Title, Text, Button, Container } from '@mantine/core';
import Dots from './Dots';
import classes from './HeroStyle.module.css';

export default function Hero() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        Добро{' '}
          <Text component="span" className={classes.highlight} inherit>
          пожаловать на
          </Text>{' '}
          сайт Investime!
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
          Investime – приложение для повышения интереса к местным мероприятиям и достопримечательностям.
          </Text>
        </Container>

        
      </div>
    </Container>
  );
}