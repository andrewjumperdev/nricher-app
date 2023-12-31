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
  const [selectedOption, setSelectedOption] = useState("");

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

  const handleOptionChange = (data) => {
    setSelectedOption(data);
  };

  const calMoyPrix = calMoyPrice(csvData);

  const filtrarPorSitio = (datos, sitio) => {
    console.log(datos, sitio);
    return datos.filter((dato) => dato.PLATEFORME === sitio);
  };

  const newData = filtrarPorSitio(csvData, selectedOption);
  const dataToPass = newData.length > 0 ? newData : csvData;
  const productsFiltrTop = TopProducts(dataToPass);


  return (
    <>
      <Navigation data={csvData} handleOptionChange={handleOptionChange} />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ArticleChart
              title={"BC par #Avis"}
              data={productsFiltrTop}
              selectedOption={selectedOption}
            />
          </div>
          <div className="col-6">
            <ArticleChart
              title={"Marchant par #Avis"}
              data={productsFiltrTop}
            />
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col py-5">
            <PrixMoyenChart data={calMoyPrix} />
          </div>
        </div>
      </div>
      <Suspense
        fallback={
          <div className="container w-100 d-flex justify-content-center">
            <div className="m-5 spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <ArticleTable data={csvData} />
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default App;
