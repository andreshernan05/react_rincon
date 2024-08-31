const products = [
  {
    id: 1,
    title: '3-Window 34',
    anio: 2000,
    numero: 132,
    price: '5000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/01.jpg',
  },
  {
    id: 2,
    title: '40 Woodie',
    anio: 2004,
    numero: 146,
    price: '5000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/02.jpg',
  }, {
    id: 3,
    title: '49 Merc',
    anio: 2022,
    numero: 2,
    price: '7000',
    tipo: 'basico',
    edicion: 'cine y pelicula',
    variante: 'unica',
    image:
      '/src/assets/img/03.jpg',
  }, {
    id: 4,
    title: '52 Chevy',
    anio: 2020,
    numero: 201,
    price: '5500',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/04.jpg',
  }, {
    id: 5,
    title: '67 Custom Mustang',
    anio: 2010,
    numero: 103,
    price: '6500',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/05.jpg',
  }, {
    id: 6,
    title: '70 Plymouth Superbird',
    anio: 2019,
    numero: 6,
    price: '15000',
    tipo: 'basico',
    edicion: '51º aviersario',
    variante: 'unica',
    image:
      '/src/assets/img/06.jpg',
  }, {
    id: 7,
    title: '1956 Corvette',
    anio: 2024,
    numero: 29,
    price: '8500',
    tipo: 'basico',
    edicion: 'cine y pelicula',
    variante: 'unica',
    image:
      '/src/assets/img/07.jpg',
  }, {
    id: 8,
    title: '1967 Pontiac GTO',
    anio: 2005,
    numero: 128,
    price: '45000',
    tipo: 'sth',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/08.jpg',
  }, {
    id: 9,
    title: '2015 Ford Mustang GT',
    anio: 2018,
    numero: 0,
    price: '55000',
    tipo: 'sth',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/09.jpg',
  }, {
    id: 10,
    title: 'Brutalistic',
    anio: 2007,
    numero: 127,
    price: '15000',
    tipo: 'th',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/10.jpg',
  }, {
    id: 11,
    title: 'Qombee',
    anio: 2008,
    numero: 166,
    price: '15000',
    tipo: 'th',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/11.jpg',
  }, {
    id: 12,
    title: 'Bone Shaker',
    anio: 2019,
    numero: 7,
    price: '10000',
    tipo: 'basico',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/12.jpg',
  },
  {
    id: 13,
    title: 'Chaparral 2',
    anio: 2000,
    numero: 55,
    price: '40000',
    tipo: 'sth',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/13.jpg',
  }, {
    id: 14,
    title: 'Corvette Grand Sport Roaster',
    anio: 2017,
    numero: 52,
    price: '50000',
    tipo: 'sth',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/14.jpg',
  }, {
    id: 15,
    title: 'Corvette Stingray',
    anio: 1997,
    numero: 560,
    price: '9500',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/15.jpg',
  }, {
    id: 16,
    title: 'Cruiser Bruiser',
    anio: 2016,
    numero: 0,
    price: '38000',
    tipo: 'sth',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/16.jpg',
  }, {
    id: 17,
    title: 'Crunch Chief',
    anio: 1996,
    numero: 419,
    price: '9500',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/17.jpg',
  }, {
    id: 18,
    title: 'Custom 59 Cadillac',
    anio: 2006,
    numero: 42,
    price: '55000',
    tipo: 'sth',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/18.jpg',
  }, {
    id: 19,
    title: 'Dream van XGW',
    anio: 2023,
    numero: 5,
    price: '18000',
    tipo: 'premium',
    edicion: 'cine y pelicula',
    variante: 'unica',
    image:
      '/src/assets/img/19.jpg',
  }, {
    id: 20,
    title: 'Fiat 500',
    anio: 2023,
    numero: 1,
    price: '20000',
    tipo: 'basico',
    edicion: 'spring',
    variante: 'unica',
    image:
      '/src/assets/img/20.jpg',
  }, {
    id: 21,
    title: 'Flashfire',
    anio: 1992,
    numero: 140,
    price: '20000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/21.jpg',
  }, {
    id: 22,
    title: 'Ford 32 Delivery',
    anio: 1999,
    numero: 996,
    price: '20000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/22.jpg',
  }, {
    id: 23,
    title: 'Ford 56',
    anio: 2002,
    numero: 0,
    price: '50000',
    tipo: 'sth',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/23.jpg',
  }, {
    id: 24,
    title: 'ford GT 40',
    anio: 2021,
    numero: 78,
    price: '19000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/24.jpg',
  }, {
    id: 25,
    title: 'Ford GT 90',
    anio: 1999,
    numero: 1073,
    price: '18000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/25.jpg',
  }, {
    id: 26,
    title: 'Ford Thunderbolt',
    anio: 2001,
    numero: 46,
    price: '15000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/26.jpg',
  },
  {
    id: 27,
    title: 'Hiway Hauler',
    anio: 2023,
    numero: 4,
    price: '25000',
    tipo: 'premium',
    edicion: 'cine y pelicula',
    variante: 'unica',
    image:
      '/src/assets/img/27.jpg',
  }, {
    id: 28,
    title: 'Kool Kombi',
    anio: 2022,
    numero: 2,
    price: '30000',
    tipo: 'premium',
    edicion: 'cine y pelicula',
    variante: 'unica',
    image:
      '/src/assets/img/28.jpg',
  }, {
    id: 29,
    title: 'Lamborghini Miura Sv',
    anio: 2022,
    numero: 202,
    price: '9000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/29.jpg',
  }, {
    id: 30,
    title: 'Mini Cooper S Challenge',
    anio: 2023,
    numero: 3,
    price: '22000',
    tipo: 'basico',
    edicion: 'spring',
    variante: 'unica',
    image:
      '/src/assets/img/30.jpg',
  }, {
    id: 31,
    title: 'Mustang Mach 1',
    anio: 1999,
    numero: 1105,
    price: '15000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/31.jpg',
  }, {
    id: 32,
    title: 'Mutt Cutt Van',
    anio: 2024,
    numero: 0,
    price: '25000',
    tipo: 'premium',
    edicion: 'cine y pelicula',
    variante: 'unica',
    image:
      '/src/assets/img/32.jpg',
  }, {
    id: 33,
    title: 'Nissan Fairlady Z',
    anio: 2021,
    numero: 2,
    price: '15000',
    tipo: 'basico',
    edicion: 'Spring',
    variante: 'unica',
    image:
      '/src/assets/img/33.jpg',
  }, {
    id: 34,
    title: 'Nissan Skyline 2000',
    anio: 2018,
    numero: 0,
    price: '60000',
    tipo: 'sth',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/34.jpg',
  }, {
    id: 35,
    title: 'Pagani 17 Huayra Roaster',
    anio: 2023,
    numero: 13,
    price: '8000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/35.jpg',
  }, {
    id: 36,
    title: 'Panoz Gtr-1',
    anio: 2009,
    numero: 70,
    price: '12000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/36.jpg',
  }, {
    id: 37,
    title: 'Phaeton',
    anio: 2002,
    numero: 7,
    price: '60000',
    tipo: 'sth',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/37.jpg',
  },
  {
    id: 38,
    title: 'Phaeton',
    anio: 2013,
    numero: 182,
    price: '10000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/38.jpg',
  },
  {
    id: 39,
    title: 'Porsche Carrera Gt',
    anio: 2008,
    numero: 115,
    price: '10000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/39.jpg',
  },
  {
    id: 40,
    title: 'Second Wind',
    anio: 1997,
    numero: 527,
    price: '12000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/40.jpg',
  },
  {
    id: 41,
    title: 'Street Creeper',
    anio: 2019,
    numero: 203,
    price: '35000',
    tipo: 'sth',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/41.jpg',
  }, {
    id: 42,
    title: 'Super Smooth',
    anio: 2004,
    numero: 105,
    price: '55000',
    tipo: 'sth',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/42.jpg',
  }, {
    id: 43,
    title: 'Twin Mill',
    anio: 2023,
    numero: 2,
    price: '20000',
    tipo: 'basico',
    edicion: '55º aniversario',
    variante: 'unica',
    image:
      '/src/assets/img/43.jpg',
  }, {
    id: 44,
    title: 'Twin Mill',
    anio: 2019,
    numero: 93,
    price: '12000',
    tipo: 'th',
    edicion: 'especial',
    variante: 'unica',
    image:
      '/src/assets/img/44.jpg',
  },
  {
    id: 45,
    title: 'Twin Mill Braile',
    anio: 2023,
    numero: 85,
    price: '12000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/45.jpg',
  },
  {
    id: 46,
    title: 'Volkswagen Type 181',
    anio: 2009,
    numero: 17,
    price: '15000',
    tipo: 'basico',
    edicion: 'normal',
    variante: 'unica',
    image:
      '/src/assets/img/46.jpg',
  },

];

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};

export const getCategory = (tipo) => {
  return new Promise((resolve) => {
    const filteredProducts = products.filter((product) => product.tipo === tipo);
    resolve(filteredProducts);
  });
};