export function TopProducts(data) {
    const productosBC = data.filter((producto) => producto.hasOwnProperty('BC'));
  
    productosBC.sort((a, b) => {
      const ventasA = parseInt(a['PRICE'] || '0');
      const ventasB = parseInt(b['PRICE'] || '0');
      return ventasB - ventasA;
    });
  
    return productosBC.slice(0, 5);
  }
  


export function calMoyPrice(datos) {
    const plataformas = {}; // Objeto para almacenar las sumas y conteo por plataforma
  
    // Iterar sobre los datos y calcular la suma y conteo de precios por plataforma
    datos.forEach((dato) => {
      const plataforma = dato.PLATEFORME;
      const precio = parseFloat(dato.PRICE);
  
      if (plataformas.hasOwnProperty(plataforma)) {
        plataformas[plataforma].suma += precio;
        plataformas[plataforma].conteo += 1;
      } else {
        plataformas[plataforma] = {
          suma: precio,
          conteo: 1
        };
      }
    });
  
    // Calcular la media por plataforma
    const medias = {};
    for (const plataforma in plataformas) {
      if (plataformas.hasOwnProperty(plataforma)) {
        const suma = plataformas[plataforma].suma;
        const conteo = plataformas[plataforma].conteo;
        const media = suma / conteo;
        medias[plataforma] = media;
      }
    }
  
    return medias;
  }