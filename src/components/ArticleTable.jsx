import React from "react";

const ArticleTable = ({data}) => {

  if (!data) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Article</th>
            <th scope="col"># Avis</th>
            <th scope="col">Prix</th>
            <th scope="col">Site</th>
            <th scope="col">Vendeur</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
        {data.length > 0 &&
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.BC}</td>
                <td></td>
                <td>{item.PRICE}</td>
                <td>{item.PLATEFORME}</td>
                <td>{item.SELLER}</td>
                <td>https://soyunlinkdeprueba.com</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleTable;
