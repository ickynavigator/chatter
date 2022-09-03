import { appContext } from '>context/store';
import { Navbar, ScrollArea } from '@mantine/core';
import { useContext } from 'react';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

const NavBar: React.FC = () => {
  const { state } = useContext(appContext);
  const { chats, id } = state;

  return (
    <Navbar p="xs" width={{ base: 350 }}>
      <Navbar.Section mt="xs">
        <Header />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs" mt="xs">
        {id ? <SideBar chats={chats} id={id} /> : <>Log in</>}
      </Navbar.Section>

      <Navbar.Section>
        <Footer />
      </Navbar.Section>
    </Navbar>
  );
};

export default NavBar;
