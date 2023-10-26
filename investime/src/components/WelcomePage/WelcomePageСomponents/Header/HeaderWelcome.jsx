import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import Mantinelogo from './Mantinelogo';
  import { useDisclosure } from '@mantine/hooks';
  import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconMap,
    IconChevronDown,
  } from '@tabler/icons-react';
  import classes from './HeaderWelcomeStyle.module.css';
import { Link } from 'react-router-dom';
  
  const mockdata = [
    {
      icon: IconCode,
      title: 'Удобство использования',
      description: 'Мы поможем вам с выбором мероприятия, подскажем дату и место проведения, а также дадим в подарок баллы!',
    },
    {
      icon: IconCoin,
      title: 'Экономия',
      description: 'Благодаря нашей системе баллов вы сможете сэкономить на посещении различных мероприятий.',
    },
    {
      icon: IconBook,
      title: 'Информация',
      description: 'На нашем сайте можно изучить основную информацию о мероприятиях и достопримечательностях.',
    },
    {
      icon: IconMap,
      title: 'Карта',
      description: 'Для удобства на сайте есть карта.'
    },
  ];
  
  function HeaderWelcome() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
  
    const links = mockdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.green [8]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
  
    return (
      <Box pb={120}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <Mantinelogo size={30} />
  
            <Group h="100%" gap={0} visibleFrom="sm">
              <a href="#" className={classes.link}>
                Главная
              </a>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        О нас
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16)}}
                        className={classes.icon}
                        
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>О нас</Text>
                    
                  </Group>
  
                  <Divider my="sm" />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>
  
                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Начать
                        </Text>
                        <Text size="xs" c="dimmed">
                          Присоединитесь к нам и начните жить по-новому!
                        </Text>
                      </div>
                      <Link to={"/authentication"}><Button className={classes.button} variant="default">Начать</Button></Link>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="#" className={classes.link}>
                Мероприятия
              </a>
              <a href="#" className={classes.link}>
                Достопримечательности
              </a>
            </Group>
  
            <Group visibleFrom="sm">
              <Link to={"/authentication"}><Button className={classes.button} variant='default'>Войти</Button> </Link>
              <Link to={"/authentication"}><Button className={classes.button2}>Зарегистрироваться</Button> </Link>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
  
            <a href="#" className={classes.link}>
              Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  О нас
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>
  
            <Divider my="sm" />
  
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Войти</Button>
              <Button>Зарегистрироваться</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }
  
  export default HeaderWelcome;