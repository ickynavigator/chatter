import { Chat } from '>types/chat';

export interface AppState {
  id: string | null;
  chats: Chat[];
}

export const getInitialAppState = (): AppState => ({
  id: null,
  chats: [],
});
