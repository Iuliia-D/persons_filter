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
  const [loading, setLoading] = useState(false);

  const [currentPersons, setCurrentPersons] = useState([]);
  const [tabType, setTabType] = useState(tabsTypes.all);
  const [isActive, setActive] = useState(tabsTypes.all);
  //const [sortType, setSortType] = useState(sortType.abc)

  const [searchParams, setSearchParams] = useSearchParams();
  const personQuery = searchParams.get("person") || "";
  // const birthday = searchParams.has("birthday");

  useEffect(() => {
    getPersons().then((json) => {
      setPersons(json);
      setLoading(true);
    });
  }, []);

  const toggleTab = (index) => {
    setTabType(index);
    setActive(index);
  };
  console.log(tabType);

  useEffect(() => {
    const curPersons = persons.filter(
      (person) =>
        person.firstName.toLowerCase().includes(personQuery.toLowerCase()) ||
        person.lastName.toLowerCase().includes(personQuery.toLowerCase()) ||
        person.userTag.toLowerCase().includes(personQuery.toLowerCase())
    );
    //.sort(...sortType)
    setCurrentPersons(curPersons);
  }, [personQuery, persons]);
  console.log(currentPersons);

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
              toggleTab={toggleTab}
              isActive={isActive}
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
