import '@mantine/core/styles.css';
import { Grid, Container, Paper } from '@mantine/core';
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavbarMinimal from '../Navbar/Navbar';
import { AuthContext } from '../../context/AuthContext';
import { useLayoutEffect, useContext, useState } from 'react';
import HeaderWelcome from '../WelcomePage/WelcomePageСomponents/Header/HeaderWelcome';
import FooterWelcome from '../WelcomePage/WelcomePageСomponents/Footer/FooterWelcome';

function Layout() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (auth.role !== "Клиент") {
      console.log("Redirecting to /welcome");
      navigate("/welcome");
      navigate(0);
    }
  }, [auth.role, navigate]);

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