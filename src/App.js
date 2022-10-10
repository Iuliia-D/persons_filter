import { getPersons } from "./api/axios";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ListPage from "./pages/ListPage";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

const sortTypes = {
  abc: "abc",
  birthday: "birthday",
};
const tabsTypes = {
  all: "all",
  design: "design",
  analytics: "analytics",
  management: "management",
  ios: "ios",
  android: "android",
};

function App() {
  const [persons, setPersons] = useState([]);
  const [errorMassage, setErrorMassage] = useState(false);
  const [loading, setLoading] = useState(false);

  const [currentPersons, setCurrentPersons] = useState([]);
  const [tabType, setTabType] = useState(tabsTypes.all);
  const [isActive, setActive] = useState(tabsTypes.all);
  const [sortType, setSortType] = useState(sortTypes.abc);

  const [searchParams, setSearchParams] = useSearchParams();
  const personQuery = searchParams.get("person") || "";

  useEffect(() => {
    getPersons()
      .then((json) => {
        setPersons(json);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorMassage(true);
      });
  }, []);

  const toggleTab = (index) => {
    setTabType(index);
    setActive(index);
  };

  const handleSort = (index) => {
    setSortType(index);
  };

  useEffect(() => {
    const curPersons = persons.filter(
      (person) =>
        person.firstName.toLowerCase().includes(personQuery.toLowerCase()) ||
        person.lastName.toLowerCase().includes(personQuery.toLowerCase()) ||
        person.userTag.toLowerCase().includes(personQuery.toLowerCase())
    );
    setCurrentPersons(curPersons);
  }, [personQuery, persons]);

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
              tabsTypes={tabsTypes}
              tabType={tabType}
              toggleTab={toggleTab}
              isActive={isActive}
              sortType={sortType}
              handleSort={handleSort}
              sortTypes={sortTypes}
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
                currentPersons={currentPersons}
                tabType={tabType}
                sortType={sortType}
                errorMassage={errorMassage}
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
