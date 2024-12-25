/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */

import ComicsList from "../comicsList/ComicsList"
import AppBanner from '../appBanner/AppBanner.jsx';

const ComicsPage = () => {
  return (
    <>
      <AppBanner/>
      <ComicsList/>
    </>
  ) 
};

export default ComicsPage;