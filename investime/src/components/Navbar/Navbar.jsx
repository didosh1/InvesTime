import React, { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import classes from './NavbarStyle.module.css';
import { Link } from 'react-router-dom';

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
  { to: '/home', icon: IconHome2, label: 'Home' },
  { to: '/events', icon: IconGauge, label: 'Events' },
  { to: '/attractions', icon: IconDeviceDesktopAnalytics, label: 'Attractions' },
  { to: '/shop', icon: IconCalendarStats, label: 'Shop' },
  { to: '/profile', icon: IconUser, label: 'Profile' },
];

function NavbarMinimal() {
  const [active, setActive] = useState(0);

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
      <Link to={"/welcome"}><NavbarLink icon={IconLogout} label="Logout" /></Link>
      </Stack>
    </nav>
  );
}

export default NavbarMinimal;