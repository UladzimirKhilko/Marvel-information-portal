/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader.jsx';
import Spinner from '../spinner/Spinner.jsx';

const Page404 = lazy(() => import('../pages/404.jsx'));
const MainPage = lazy(() => import('../pages/MainPage.jsx'));
const ComicsPage = lazy(() => import('../pages/ComicsPage.jsx'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout.jsx'));
const SingleCharacterLayout = lazy(() => import ('../pages/singleCharacterLayout/SingleCharacterLayout.jsx'));
const SinglePage = lazy(() => import('../pages/SinglePage.jsx'));

const App = () => {
  
  return (
    <Router future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              < Route path="/comics" element={<ComicsPage/>}/>  
              <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>}/>
              <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}/>
              <Route path="*" element={<Page404/>}/>
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
