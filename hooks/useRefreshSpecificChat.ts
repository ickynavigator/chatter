import Chat from '>types/chat';
import { firestore } from '>utils/firebase';
import {
  collection,
  DocumentData,
  query,
  QuerySnapshot,
  where,
} from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

interface I {
  id: Chat['id'];
}
const useRefreshSpecificChat = ({ id }: I) => {
  const [values, loading, error] = useCollection(
    query(collection(firestore, 'chats'), where('id', '==', id)),
  );

  const handleChange = <T>(coll: QuerySnapshot<DocumentData> | undefined) => {
    if (!coll) return undefined;

    const chats = coll.docs.map(doc => ({
      ...doc.data(),
    }));

    return chats[0] as unknown as T;
  };

  return {
    loading,
    error,

    values: handleChange<Chat>(values),
  };
};

export default useRefreshSpecificChat;
