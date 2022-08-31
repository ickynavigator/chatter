export interface User {
  name: string;
}

export const getDefaultUser = (): User => ({
  name: 'UNDEFINED',
});
