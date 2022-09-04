/* eslint-disable no-nested-ternary */
import { Paper, Text } from '@mantine/core';

interface IBubbleProps {
  message: string;
  isUser: boolean;
}
const Bubble: React.FC<IBubbleProps> = props => {
  const { message, isUser } = props;

  return (
    <Paper
      withBorder
      p="sm"
      shadow="md"
      radius="lg"
      sx={theme => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? isUser
              ? theme.colors.indigo[9]
              : theme.colors.dark[6]
            : isUser
            ? theme.colors.blue[6]
            : theme.colors.dark[6],

        width: 'fit-content',
        minWidth: '20rem',
        marginLeft: isUser ? 'auto' : '0',
      })}
    >
      <Text>{message}</Text>
    </Paper>
  );
};

export default Bubble;
