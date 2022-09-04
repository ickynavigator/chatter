import Message from './message';
import User from './user';

interface Chat {
  id: string;

  members: User['id'][];
  messages: Message[];
}

export default Chat;
