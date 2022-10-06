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

function App() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const personQuery = searchParams.get("person") || "";
  const birthday = searchParams.has("birthday");

  useEffect(() => {
    getPersons().then((json) => {
      setPersons(json);
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
              setSearchParams={setSearchParams}
              searchParams={searchParams}
              personQuery={personQuery}
              birthday={birthday}
            />
          }
        >
          <Route
            index
            element={
              <ListPage
                loading={loading}
                persons={persons}
                searchParams={searchParams}
                personQuery={personQuery}
              />
            }
          />

          <Route
            path="designers"
            element={
              <DisignersListPage
                loading={loading}
                persons={persons}
                searchParams={searchParams}
                personQuery={personQuery}
              />
            }
          />
          <Route
            path="analists"
            element={
              <AnalystsListPage
                loading={loading}
                persons={persons}
                searchParams={searchParams}
                personQuery={personQuery}
              />
            }
          />
          <Route
            path="managers"
            element={
              <ManagersListPage
                loading={loading}
                persons={persons}
                searchParams={searchParams}
                personQuery={personQuery}
              />
            }
          />
          <Route
            path="ios"
            element={
              <IosListPage
                loading={loading}
                persons={persons}
                searchParams={searchParams}
                personQuery={personQuery}
              />
            }
          />
          <Route
            path="android"
            element={
              <AndroidListPage
                loading={loading}
                persons={persons}
                searchParams={searchParams}
                personQuery={personQuery}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="/:id" element={<DetailsPage persons={persons} />} />
      </Routes>
    </>
  );
}

export default App;
