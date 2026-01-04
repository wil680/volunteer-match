import "./page.css";
import Search from "../components/search/search";
import Filter from "../components/filter/filter";
import Card from "../components/card";

import { Opportunity } from "../../api";
import { useState, useEffect } from "react";

export default function Browse() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await Opportunity();
      setResult(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="browse">
      <div className="browse-bars">
        <Search />
        <Filter />
      </div>
      <div className="card-container">
      {result.map((res, index) => (
        <Card data={res} key={index} />
      ))}</div>
    </div>
  );
}
