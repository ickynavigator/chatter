import {
  ActionIcon,
  Box,
  Group,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { MoonStars, Sun } from 'tabler-icons-react';

const Header: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box
      sx={theme => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      })}
    >
      <Group position="apart">
        <Text size="xl">Chatter</Text>
        <Group>
          <ActionIcon
            variant="default"
            onClick={() => toggleColorScheme()}
            size={30}
          >
            {colorScheme === 'dark' ? (
              <Sun size={16} />
            ) : (
              <MoonStars size={16} />
            )}
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  );
};

export default Header;
