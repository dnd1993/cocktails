import React, { useState } from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const [data, setData] = useState([]);
  return (
    <main>
      <SearchForm />
      <CocktailList data={data} setData={setData} />
    </main>
  );
};

export default Home;
