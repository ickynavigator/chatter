import { SetChats } from '>context/actionCreators';
import { appContext } from '>context/store';
import Chat from '>types/chat';
import { firestore } from '>utils/firebase';
import {
  collection,
  DocumentData,
  query,
  QuerySnapshot,
  where,
} from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

interface I {
  id: Chat['id'];
}
const useRefreshChats = ({ id }: I) => {
  const { dispatch } = useContext(appContext);

  const [values, loading, error] = useCollection(
    query(
      collection(firestore, 'chats'),
      where('members', 'array-contains', id),
    ),
  );

  const handleChange = <T>(coll: QuerySnapshot<DocumentData>) => {
    const chats = coll.docs.map(doc => ({
      ...doc.data(),
    }));

    return chats as unknown as T;
  };

  useEffect(() => {
    if (!loading && !error && values) {
      dispatch(SetChats(handleChange<Chat[]>(values)));
    }
  }, [values, loading, error, dispatch]);

  return {
    loading,
    error,

    values,
  };
};

export default useRefreshChats;
