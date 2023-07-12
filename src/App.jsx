import React, { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Papa from "papaparse";
import { calMoyPrice, TopProducts } from "./utils";
import ArticleChart from "./components/ArticleChart";
import PrixMoyenChart from "./components/PrixMoyenChart";

const ArticleTable = lazy(() => import("./components/ArticleTable"));

const App = () => {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/dataset_front_dev.csv");
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value);
      const { data } = Papa.parse(csv, { header: true });
      setCsvData(data);
    };

    fetchData();
  }, []);

  const productsFiltrTop = TopProducts(csvData);
  const calMoyPrix = calMoyPrice(csvData);

  console.log(calMoyPrix);

  return (
    <>
      <Navigation />
      <div className="container d-flex">
        <ArticleChart title={'BC par #Avis'} data={productsFiltrTop} />
        <ArticleChart title={'Marchant par #Avis'} data={productsFiltrTop} />
      </div>
      <div className="container">
        <PrixMoyenChart data={calMoyPrix} />
      </div>
      <Suspense
        fallback={
          <div>
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <ArticleTable data={csvData} />
      </Suspense>
    </>
  );
};

export default App;
