import SetIdModal from '>components/SetIdModal';
import { appContext } from '>context/store';
import {
  Avatar,
  Box,
  Group,
  Text,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useContext, useState } from 'react';
import { ChevronLeft, ChevronRight, UserCircle } from 'tabler-icons-react';

const Footer: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const { state } = useContext(appContext);
  const { id } = state;

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton
        onClick={() => setOpened(true)}
        sx={{
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          cursor: 'default',
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        }}
      >
        <Group>
          <Avatar radius="xl">
            <UserCircle />
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {id ? `${id}` : 'NO ID'}
            </Text>
          </Box>

          {theme.dir === 'ltr' ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </Group>
      </UnstyledButton>

      <SetIdModal opened={opened} setOpened={setOpened} />
    </Box>
  );
};

export default Footer;
