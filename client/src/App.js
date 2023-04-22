import React, { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BackgroundColor } from './GlobalStyle';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import QuestionsPage from './pages/QuestionsPage';
import DetailQuestionPage from './pages/DetailQuestion';
import AskPage from './pages/AskPage';
import ProfilePage from './pages/ProfilePage';
import EditPage from './pages/EditPage';

function App() {
  //탭 메뉴 선택을 위한 state 설정
  const [curTab, setTab] = useState('home');
  const onTabSelect = useCallback((curTab) => setTab(curTab), []);
  return (
    <BrowserRouter>
      <BackgroundColor />
      <Routes>
        <Route path='/' element={<QuestionsPage curTab={curTab} onTabSelect={onTabSelect} />} />
        <Route path='/questions/:question_id' element={<DetailQuestionPage curTab={curTab} onTabSelect={onTabSelect} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/questions/ask' element={<AskPage />} />
        <Route path='/questions/ask' element={<EditPage />} />

        <Route path='*' element={<QuestionsPage curTab={curTab} onTabSelect={onTabSelect} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
