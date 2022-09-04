/* eslint-disable arrow-body-style */
import Unauthorized from '>components/Unauthorized';
import { appContext } from '>context/store';
import { ComponentType, useContext } from 'react';

const withLoggedin = <T,>(Component: ComponentType<T>) => {
  return (props: T) => {
    const { state } = useContext(appContext);
    const { id } = state;

    if (!id) {
      return <Unauthorized />;
    }

    return <Component {...props} />;
  };
};

export default withLoggedin;
