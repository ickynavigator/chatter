import Bubble from '>components/Bubble';
import useRefreshSpecificChat from '>hooks/useRefreshSpecificChat';
import { Box, Button, Group, Loader, Stack, TextInput } from '@mantine/core';
import withLoggedin from 'HOC/withLoggedin';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Send } from 'tabler-icons-react';

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const { values, loading, error } = useRefreshSpecificChat({
    id: (id as string) || '',
  });

  const [value, setValue] = useState('');
  const onSendHandler = () => {
    if (value.length <= 0) return;

    setValue('');
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
    return <Loader size="xl" />;
  }

  if (!values) {
    return <div>No messages</div>;
  }

  return (
    <Stack
      style={{
        height: '100%',
      }}
    >
      <Box
        style={{
          flexGrow: '1',
        }}
      >
        <Stack>
          {values.messages &&
            values.messages.map(item => {
              const { message, id: idx } = item;

              return <Bubble key={idx} message={message} isUser />;
            })}
        </Stack>
      </Box>

      <Group mt="auto">
        <TextInput
          placeholder="Type a message"
          value={value}
          onChange={e => setValue(e.currentTarget.value)}
          style={{ flexGrow: '1' }}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              onSendHandler();
            }
          }}
        />
        <Button disabled={value.length < 1} onClick={onSendHandler}>
          <Send />
        </Button>
      </Group>
    </Stack>
  );
};

export default withLoggedin(Index);
