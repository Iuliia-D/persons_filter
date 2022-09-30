import { getPersons } from "./api/axios";
import { Routes, Route } from "react-router-dom";
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

function App() {
  const [persons, setPersons] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPersons().then((json) => {
      // const jsonAbc = sorter.sort(json).asc("firstName");
      // console.log(jsonAbc);
      // setPersons(jsonAbc);
      // setSearchResults(jsonAbc);
      setPersons(json);
      setSearchResults(json);
      setLoading(true);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              persons={persons}
              setSearchResults={setSearchResults}
              searchResults={searchResults}
            />
          }
        >
          <Route
            index
            element={
              <ListPage searchResults={searchResults} loading={loading} />
            }
          />

          <Route
            path="designers"
            element={
              <DisignersListPage
                searchResults={searchResults}
                loading={loading}
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
