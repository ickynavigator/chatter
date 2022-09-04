import Chat from '>types/chat';
import { ActionMap } from '>types/index';

export enum Types {
  SET_ID = 'SET_ID',
  SET_CHATS = 'SET_CHATS',
}

export type Payload = {
  [Types.SET_ID]: {
    id: string;
  };
  [Types.SET_CHATS]: {
    chats: Chat[];
  };
};

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];
