import { BrowserRouter, Routes, Route /*createHashRouter, RouterProvider*/ } from "react-router-dom";


import Homepage from './components/Homepage';
import ChatsScreen from './components/ChatsScreen';
import SignUpScreen from './components/SignUpScreen';
import LoginScreen from './components/LoginScreen';
import {ViewContactsScreen} from './components/ViewContactsScreen';

/*
const router = createHashRouter(
  [
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/login',
      element: <LoginScreen />
    },
    {
      path: '/sign-up',
      element: <SignUpScreen />
    },
    {
      path: '/chats',
      element: <ChatsScreen />
    },
    {
      path: '/contacts',
      element: <ViewContactsScreen />
    },
    {
      path: '/contacts/:initSelectedContactId',
      element: <ViewContactsScreen />
    },
  ],
  {
    basename: '/Letter/' // 👈 add this here for GitHub Pages
  }
);
*/
function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/sign-up" element={<SignUpScreen />} />
        <Route path="/chats" element={<ChatsScreen />} />
        <Route path="/contacts" element={<ViewContactsScreen />} />
        <Route path="/contacts/:initSelectedContactId" element={<ViewContactsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
