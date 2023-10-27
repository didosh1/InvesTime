import React, { useState, useContext} from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
  IconUser,
  IconLogout,
  IconMap,
  IconBalloon,
  IconPhoto,
  IconCoin,
} from '@tabler/icons-react';
import classes from './NavbarStyle.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function NavbarLink({ icon: Icon, label, active, onClick }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { to: '/home', icon: IconMap, label: 'Карта' },
  { to: '/events', icon: IconBalloon, label: 'Мероприятия' },
  { to: '/attractions', icon: IconPhoto, label: 'Достопримечательности' },
  { to: '/shop', icon: IconCoin, label: 'Магазин' },
  { to: '/profile', icon: IconUser, label: 'Профиль' },
];

function NavbarMinimal() {
  const [active, setActive] = useState(0);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate()
  const exitHandler = () =>{
    navigate("/welcome")
    setAuth({ fio: null,
      email: null,
      role: null,})

  }
  const links = mockdata.map((link, index) => (
    <Link to={link.to}>
    <NavbarLink
      icon={link.icon}
      label={link.label}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      {/* <Center>
        <MantineLogo type="mark" size={30}/>
      </Center> */}

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
      <NavbarLink icon={IconLogout} label="Выйти" onClick={exitHandler}/>
      </Stack>
    </nav>
  );
}

export default NavbarMinimal;