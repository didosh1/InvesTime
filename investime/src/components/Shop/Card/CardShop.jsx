import { Paper, Text, Title, Button} from '@mantine/core';
import classes from './CardShopStyle.module.css'

export default function CardShop({ article }) {
  
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{ backgroundImage: `url(${article.images[0]})` }}
        className={classes.card}
      >
        <div>
          <Title c={"white"} display={"inline"} size="xs">
            Стоимость: {article.price}
          </Title>
          <Title order={3} className={classes.title}>
            {article.title}
          </Title>
        </div>
        <Button variant="gradient"
      gradient={{ from: 'blue', to: 'lime', deg: 255 }} color="dark">
          Купить билет
        </Button>
      </Paper>
    );
  }
