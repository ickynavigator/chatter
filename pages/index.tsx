import { appContext } from '>context/store';
import type { NextPage } from 'next';
import { useContext } from 'react';

const Home: NextPage = () => {
  const { state } = useContext(appContext);
  const { id } = state;
  return <div>ID: {id}</div>;
};

export default Home;
