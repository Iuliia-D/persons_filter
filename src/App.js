import { getPersons } from "./api/axios";
import { Routes, Route, Link } from "react-router-dom";

import ListPage from "./pages/ListPage";
import DetailsPage from "./pages/DetailsPage";
import DisignersListPage from "./pages/DesignersListPage";
import AnalystsListPage from "./pages/AnalystsListPage";
import ManagersListPage from "./pages/ManagersListPage";
import IosListPage from "./pages/IosListPage.js";
import AndroidListPage from "./pages/AndroidListPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListPage />} />
          <Route path="/:department/:userTag" element={<DetailsPage />} />
          <Route path="designers" element={<DisignersListPage />} />
          <Route path="analists" element={<AnalystsListPage />} />
          <Route path="managers" element={<ManagersListPage />} />
          <Route path="ios" element={<IosListPage />} />
          <Route path="android" element={<AndroidListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
