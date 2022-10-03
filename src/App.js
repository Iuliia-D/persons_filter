import { getPersons } from "./api/axios";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ListPage from "./pages/ListPage";
import DetailsPage from "./pages/DetailsPage";
import DisignersListPage from "./pages/DesignersListPage";
import AnalystsListPage from "./pages/AnalystsListPage";
import ManagersListPage from "./pages/ManagersListPage";
import IosListPage from "./pages/IosListPage.js";
import AndroidListPage from "./pages/AndroidListPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import Modal from "./components/Modal";

function App() {
  const [persons, setPersons] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [modalActive, setModalActive] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getPersons().then((json) => {
      setPersons(json);
      setSearchResults(json);
      setLoading(true);
    });
  }, []);

  return (
    <>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        // sortType={sortType}
        // setSortType={setSortType}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              persons={persons}
              setSearchResults={setSearchResults}
              searchResults={searchResults}
              setModalActive={setModalActive}
              setSearchParams={setSearchParams}
              searchParams={searchParams}
            />
          }
        >
          <Route
            index
            element={
              <ListPage
                searchResults={searchResults}
                loading={loading}
                persons={persons}
                searchParams={searchParams}
              />
            }
          />

          <Route
            path="designers"
            element={
              <DisignersListPage
                searchResults={searchResults}
                loading={loading}
                // personQuery={personQuery}
              />
            }
          />
          <Route
            path="analists"
            element={
              <AnalystsListPage
                searchResults={searchResults}
                loading={loading}
              />
            }
          />
          <Route
            path="managers"
            element={
              <ManagersListPage
                searchResults={searchResults}
                loading={loading}
              />
            }
          />
          <Route
            path="ios"
            element={
              <IosListPage searchResults={searchResults} loading={loading} />
            }
          />
          <Route
            path="android"
            element={
              <AndroidListPage
                searchResults={searchResults}
                loading={loading}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route
          path="/:id"
          element={
            <DetailsPage searchResults={searchResults} persons={persons} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
