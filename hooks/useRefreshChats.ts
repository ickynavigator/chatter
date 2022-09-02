import { SetChats } from '>context/actionCreators';
import { appContext } from '>context/store';
import { Chat } from '>types/chat';
import { firestore } from '>utils/firebase';
import { collection, query, where } from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

interface I {
  id: Chat['senderID'];
}
const useRefreshChats = ({ id }: I) => {
  const { dispatch } = useContext(appContext);

  const [values, loading, error] = useCollectionData(
    query(collection(firestore, 'chats'), where('senderID', '==', id)),
  );

  useEffect(() => {
    if (!loading && !error) {
      dispatch(SetChats(values as Chat[]));
    }
  }, [values, loading, error, dispatch]);

  return {
    loading,
    error,

    values,
  };
};

export default useRefreshChats;
