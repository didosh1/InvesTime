import '@mantine/core/styles.css';
import { Grid, Container, Paper } from '@mantine/core';
import { Link, Outlet } from "react-router-dom";
import NavbarMinimal from '../Navbar/Navbar';

function Layout() {
  return (
    <div>
       <Container size={"xl"}>
      <Grid gutter="lg">
        <Grid.Col span={2}>
          <Paper>
          <NavbarMinimal></NavbarMinimal>
          </Paper>
        </Grid.Col>
        <Grid.Col span={10}>
          <Paper>
            <Outlet></Outlet>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
    </div>
  );
}

export default Layout;
