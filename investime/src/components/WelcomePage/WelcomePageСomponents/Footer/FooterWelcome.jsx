import { Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './FooterWelcomeStyle.module.css';
import Investlogo from './Investlogo';
export default function FooterWelcome() {
    


  return (
  
    <div className={classes.footer}>

      <div className={classes.inner}>
        <Investlogo size={20} />
        <Group gap={5} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon component='a' href="https://twitter.com/centrinvest" size="lg" color="white" variant="subtle">
            <IconBrandTwitter   style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon component='a' href="https://www.youtube.com/@centrinvest" size="lg" color="white" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon  size="lg" color="white" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}