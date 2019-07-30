import ChatsList from './ChatList';
import ChatsNavbar from './ChatNavbar';
import React, {Fragment} from 'react';

const ChatsView: React.FC = () => {
  return (
    <Fragment>
      <ChatsNavbar />
      <ChatsList />
    </Fragment>
  )
}

export default ChatsView;
