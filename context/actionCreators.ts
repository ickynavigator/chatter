import { Chat } from '>types/chat';
import { Actions, Types } from './actions';

export function SetID(id: string): Actions {
  return {
    type: Types.SET_ID,
    payload: {
      id,
    },
  };
}

export function SetChats(chats: Chat[]): Actions {
  return {
    type: Types.SET_CHATS,
    payload: {
      chats,
    },
  };
}

export default {};
