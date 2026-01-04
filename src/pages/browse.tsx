import "./page.css";
import Search from "../components/search/search";
import Filter from "../components/filter/filter";
import Card from "../components/card/card";
import Next from "../components/card/next";

import type { OpportunitiesType } from "../../api";

import { Opportunity } from "../../api";
import { useState, useEffect } from "react";

export default function Browse() {
  const [result, setResult] = useState<OpportunitiesType[]>([]);

  useEffect(() => {
    const pageResults: OpportunitiesType[] = [];
    let currentPage = 1;

    async function fetchData() {
      for (let i = 0; i < 6; ++i) {
        const data = await Opportunity(currentPage);
        pageResults.push(...data.results);
        ++currentPage;
        console.log(data);
      }
      setResult(pageResults);
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
        ))}
      </div>
      <Next />
    </div>
  );
}
