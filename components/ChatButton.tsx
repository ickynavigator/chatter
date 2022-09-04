import { Group, Text, UnstyledButton } from '@mantine/core';
import Link from 'next/link';

interface MainLinkProps {
  label: string;
  id: string;
}

// eslint-disable-next-line arrow-body-style
const ChatButton = ({ label, id }: MainLinkProps) => {
  return (
    <Link href={`/chat/${id}`} passHref>
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
    </Link>
  );
};

export default ChatButton;
