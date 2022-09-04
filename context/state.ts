import Chat from '>types/chat';

export interface AppState {
  id: string | undefined;
  chats: Chat[];
}

export const getInitialAppState = (): AppState => ({
  id: undefined,
  chats: [],
});
