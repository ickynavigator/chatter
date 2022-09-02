import { SetID } from '>context/actionCreators';
import { appContext } from '>context/store';
import { Button, Group, Modal, TextInput } from '@mantine/core';
import React, { useContext, useState } from 'react';

interface I {
  opened: boolean;
  setOpened: (value: boolean) => void;
}
const Index: React.FC<I> = ({ opened, setOpened }) => {
  const { state, dispatch } = useContext(appContext);
  const { id } = state;
  const [newId, setNewId] = useState(id || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewId(e.target.value);
  };

  const handleSubmit = () => {
    if (newId) {
      dispatch(SetID(newId));
    }
  };

  return (
    <Modal opened={opened} onClose={() => setOpened(false)} title="Set ID">
      <Group>
        <TextInput
          placeholder="Set ID"
          onChange={handleChange}
          style={{ flexGrow: '1' }}
        />
        <Button
          onClick={handleSubmit}
          disabled={id === newId || newId.length < 1}
        >
          Set ID
        </Button>
      </Group>
    </Modal>
  );
};

export default Index;
