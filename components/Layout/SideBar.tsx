import ChatButton from '>components/ChatButton';
import { AppState } from '>context/state';
import useRefreshChats from '>hooks/useRefreshChats';

interface ISideBar {
  chats: AppState['chats'];
  id: string;
}
const SideBar: React.FC<ISideBar> = ({ chats, id }) => {
  useRefreshChats({ id });

  if (chats.length <= 0) {
    return <div>No chats</div>;
  }

  return (
    <>
      {chats.map(chat => {
        const { id: idx } = chat;

        return <ChatButton key={idx} label={idx} id={idx} />;
      })}
    </>
  );
};

export default SideBar;
