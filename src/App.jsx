import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PostDetails from '../pages/PostDetails';
import Header from '../components/Header';
import PostContextProvider from './context/PostContextProvider';

function App() {
  return (
    <PostContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </Router>
    </PostContextProvider>
  );
}

export default App;
