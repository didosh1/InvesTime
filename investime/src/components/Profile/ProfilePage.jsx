import { Card, Container, Grid, Title } from '@mantine/core';
import AchiveCard from './AchiveComp/AchiveCard';
import AchiveStatistic from './AchiveStatistic/AchiveStatistic';
import AchivesBox from './AchivesBox/AchivesBox';


export default function ProfilePage() {

  return (
    <Container size="lg">
    <Grid gutter="lg" align='center'>
      <Grid.Col span="auto">
        <AchiveCard />
      </Grid.Col>
      <Grid.Col span="auto">
        <AchiveStatistic />
      </Grid.Col>
    </Grid>
    <Grid gutter="lg" align='center'>
        <Grid.Col>
            
        </Grid.Col>
        <Grid.Col>
            <Card>
                <Title order={2} mb={20}> Достижения</Title>
                <AchivesBox />
            </Card>
        </Grid.Col>
        
    </Grid>
  </Container>
);
}