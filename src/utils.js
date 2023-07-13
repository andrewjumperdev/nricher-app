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

export function filterSellers(data, categoryTitle) {

  const category = [];

  for (let item of data) {
    const itemFiltr = item[categoryTitle];
    if (itemFiltr && !category.includes(itemFiltr)) {
      category.push(itemFiltr);
    }
  }

  return category;
}

export function calcularClientesNecesarios(data) {
  const atributos = Object.values(data);
  const elementosUnicos = [...new Set(atributos.filter((atributo) => atributo !== ""))];

  const clientesNecesarios = elementosUnicos.length;

  return clientesNecesarios;
}


export function filterDatos (datos, filtros) {
  // Filtrar por Site
  if (filtros.site && filtros.site !== 'Todos') {
    datos = datos.filter(item => item.Site === filtros.site);
  }

  // Filtrar por Gamme
  if (filtros.gamme && filtros.gamme !== 'Todas') {
    datos = datos.filter(item => item.Gamme === filtros.gamme);
  }

  // Filtrar por Seller
  if (filtros.seller && filtros.seller !== 'Todos') {
    datos = datos.filter(item => item.Seller === filtros.seller);
  }

  // Filtrar por Nature
  if (filtros.nature && filtros.nature !== 'Todas') {
    datos = datos.filter(item => item.Nature === filtros.nature);
  }

  return datos;
}