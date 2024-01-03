import Chat from '>types/chat';
import { ActionMap } from '>types/index';
import { AppState } from './state';

export enum Types {
  SET_STORE = 'SET_STORE',

  SET_ID = 'SET_ID',
  SET_CHATS = 'SET_CHATS',
}

export type Payload = {
  [Types.SET_STORE]: {
    store: AppState;
  };
  [Types.SET_ID]: {
    id: string;
  };
  [Types.SET_CHATS]: {
    chats: Chat[];
  };
};

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];
