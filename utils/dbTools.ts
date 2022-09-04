import Message from '>types/message';
import { firestore } from '>utils/firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

interface IAddChat {
  id: string;
  senderID: string;
  message: string;
}
export const addChat = async ({ id, senderID, message }: IAddChat) => {
  const docRef = doc(firestore, 'chats', id);

  const newMessage: Message = {
    id: docRef.id,
    message,
    senderID,
    timestamp: new Date().toISOString(),
  };

  await updateDoc(docRef, {
    messages: arrayUnion(newMessage),
  });
};

export default {};
