import React,{useState} from "react";
import Dropdown from "./Dropdown";
import { calcularClientesNecesarios, filterSellers } from "../utils";

const Navigation = ({ data, handleOptionChange  }) => {

  const optionsSite = filterSellers(data, "PLATEFORME");
  const optionsGamme = filterSellers(data, "GAMME");
  const optionsSeller = filterSellers(data, "SELLER");
  const optionsNature = filterSellers(data, "CATEGORY_FINAL");

  const optionSite = { title: "Site", options: optionsSite };
  const optionGamme = { title: "Gamme", options: optionsGamme };
  const optionSeller = { title: "Vendu Par", options: optionsSeller };
  const optionNature = { title: "Nature", options: optionsNature };

  const clientesNecesarios = calcularClientesNecesarios(data);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <div className="row">
          <div className="col">
            <a className="navbar-brand" href="#">
              <img src="/but.png" alt="Bootstrap" width="160" height="50" />
            </a>
          </div>
          <div className="col">
            <div className="container text-center">
              <h6>Total Besoins clients</h6>
              <p className="h1">{clientesNecesarios}</p>
            </div>
          </div>
        </div>

        <div className="col d-flex justify-content-around">
          <Dropdown handleChange={handleOptionChange} option={optionSite} />
          <Dropdown handleChange={handleOptionChange} option={optionGamme} />
          <Dropdown handleChange={handleOptionChange} option={optionSeller} />
          <Dropdown handleChange={handleOptionChange} option={optionNature} />
        </div>
        <div className="col">
          <button type="button" className="btn btn-link">
            Refresh
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
