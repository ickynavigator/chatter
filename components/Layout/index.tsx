import { AppShell } from '@mantine/core';
import NavBar from './NavBar';

export interface ILayout {
  children: React.ReactNode;
}
// eslint-disable-next-line arrow-body-style
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <AppShell
      padding="md"
      navbar={<NavBar />}
      styles={theme => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
