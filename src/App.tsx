import React from 'react';
import './App.css';

import styled from 'styled-components';
import ChatsView from 'components/ChatListScreen';

const Container = styled.div`height: 100vh`;

const App: React.FC = () => {
  return (
    <Container>
      <ChatsView />
    </Container>
  );
};

export default App;
