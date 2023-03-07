import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import INVITATION from './pages/InvitationPage';
import NotFound from './pages/NotFound';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
    return (
        <Router>
            <AppContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/invitationPage" element={<INVITATION />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AppContainer>
        </Router>
    );
}

export default App;
