import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { AuthProvider } from './context/AuthContext';
import ExchangeItemsBoard from './pages/ExchangeItemsBoard/ExchangeItemsBoard'
import LoginPage from './pages/LoginSignupPage/LoginPage';
import SignupPage from './pages/LoginSignupPage/SignupPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import BookStorage from './pages/BookStorage/BookStorage'
import ExchangePage from './pages/ExchangePage/ExchangePage';
import BookPage from './pages/BookPage/BookPage'
import CreateBookItem from './pages/CreateBookItem/CreateBookItem'
import ChangeProfile from './pages/ChangeProfile/ChangeProfile'
import InformationPage from './pages/InformationPage/InformationPage';
import CreateExchangeItem from './pages/CreateExchangeItem/CreateExchangeItem'
import ThemeButtons from './components/Common/ThemeButtons/ThemeButtons'

import PersistentDrawerLeft from './pages/TestPage/TestPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* <Header/> */}
        <Routes>
          <Route path='/' element={<ExchangeItemsBoard/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/my-profile' element={<ProfilePage/>}/>
          <Route path='/user-:userSlug' element={<ProfilePage/>}/>
          <Route path='/bs-me' element={<BookStorage/>}/>
          <Route path='/obs-oe-:userSlug' element={<BookStorage/>}/>
          <Route path='/cbi' element={<CreateBookItem/>}/>
          <Route path='/cei' element={<CreateExchangeItem/>}/>
          <Route path='/info' element={<InformationPage/>}/>
          <Route path='/exchange-:currentExchangeSlug'element={<ExchangePage/>}/>
          <Route path='/bs-me/book-:bookSlug' element={<BookPage/>}/>
          <Route path='/book-:bookSlug' element={<BookPage/>}/>
          <Route path='/change-profile' element={<ChangeProfile/>}/>
          {/* <Route path='/test' element={<PersistentDrawerLeft/>}/> */}
        </Routes>
        <ThemeButtons/>
      </AuthProvider>
    </Router>
  );
}

export default App;
