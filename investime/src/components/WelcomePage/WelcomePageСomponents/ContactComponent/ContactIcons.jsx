import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './ContactIconsStyle.module.css';

function ContactIcon({ icon: Icon, title, description, ...others }) {
  return (
    <Box className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={16}  /> {/* Устанавливаем размер 16 для иконки */}
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </Box>
  );
}

const MOCKDATA = [
  { title: 'Почта', description: 'dostankodiana79@gmail.com', icon: IconAt },
  { title: 'Телефон', description: '+375-25-647-85-38', icon: IconPhone },
  { title: 'Адрес', description: 'пр. Независимости 62', icon: IconMapPin },
  { title: 'Рабочие часы', description: '8:00 – 23:00', icon: IconSun },
];

export default function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack h={300}>{items}</Stack>;
}