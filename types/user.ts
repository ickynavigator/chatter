interface User {
  id: string | undefined;
  name: string;
}

export const getDefaultUser = (): User => ({
  id: undefined,
  name: 'UNDEFINED',
});

export default User;
