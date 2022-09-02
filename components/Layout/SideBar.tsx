import { AppState } from '>context/state';
import useRefreshChats from '>hooks/useRefreshChats';

interface ISideBar {
  chats: AppState['chats'];
  id: string;
}
const SideBar: React.FC<ISideBar> = ({ chats, id }) => {
  useRefreshChats({ id });

  return <div>{chats && chats.length > 0 ? chats.length : <>No Chats</>}</div>;
};

export default SideBar;
