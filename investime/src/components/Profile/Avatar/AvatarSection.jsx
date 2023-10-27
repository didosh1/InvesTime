import React, { useContext } from 'react';
import { Avatar, Text, Group, Card } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { AuthContext } from '../../../context/AuthContext';

export default function AvatarSection() {
  const { auth } = useContext(AuthContext);
  return (
    <Card withBorder p="xl" radius="md" m={40}>
      <Group wrap="nowrap">
        <Avatar
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
          size={94}
          radius="md"
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Software engineer
          </Text>

          <Text fz="lg" fw={500}>
            {auth.fio}
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" />
            <Text fz="xs" c="dimmed">
              {auth.email}
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
