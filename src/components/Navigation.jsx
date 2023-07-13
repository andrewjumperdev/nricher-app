import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { calcularClientesNecesarios, filterSellers } from "../utils";

const Navigation = ({ data, handleOptionChange }) => {
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
    <nav className="navbar navbar-expand-lg bg-body-transparent shadow-none">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/but.png" alt="Bootstrap" width="160" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="container text-center">
                <p className="fs-6 m-0">Total Besoins clients</p>
                <p className="fs-3 m-0">{clientesNecesarios}</p>
              </div>
            </li>
            <li className="nav-item">
              <div className="container mx-4 d-flex justify-content-around">
                <Dropdown
                  handleChange={handleOptionChange}
                  option={optionSite}
                />
                <Dropdown
                  handleChange={handleOptionChange}
                  option={optionGamme}
                />
                <Dropdown
                  handleChange={handleOptionChange}
                  option={optionSeller}
                />
                <Dropdown
                  handleChange={handleOptionChange}
                  option={optionNature}
                />
              </div>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="text-decoration-none border border-0 bg-transparent mx-5"
              >
                Refresh Filters <br />
                <i className="fa-solid fa-rotate fa-sm"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
