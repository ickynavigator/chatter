import { Group, Text, UnstyledButton } from '@mantine/core';

interface MainLinkProps {
  label: string;
}

// eslint-disable-next-line arrow-body-style
const ChatButton = ({ label }: MainLinkProps) => {
  return (
    <UnstyledButton
      sx={theme => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

export default ChatButton;
