
class HeadingsService {

  constructor($http, CONFIG){
    this.$http = $http;
    this.URL = CONFIG.API_URL+'home/';
    this._currentHeading = null;
    this.data = [
      {
        id: "1",
        parent_id: null,
        level: "SECCION",
        code: "I",
        title: "Animales vivos y productos del reino animal (Editada 2)",
        description: "Animales vivos y productos del reino animal",
        valid_from: "2011-12-26",
        statute_id: "49",
        unit_id: null,
        unit_statute_id: null,
        tariff_order: "01"
      },
      {
        id: "22",
        parent_id: "1",
        level: "CAPITULO",
        code: "01",
        title: "Animales vivos",
        description: "Animales vivos",
        valid_from: "2011-12-26",
        statute_id: null,
        unit_id: null,
        unit_statute_id: null,
        tariff_order: "01.01"
      },
      {
        id: "119",
        parent_id: "22",
        level: "PARTIDA",
        code: "0101",
        title: "Caballos, asnos, mulos y burdéganos, vivos.",
        description: null,
        valid_from: null,
        statute_id: null,
        unit_id: null,
        unit_statute_id: null,
        tariff_order: "01.01.01"
      },
      {
        id: "120",
        parent_id: "119",
        level: "SUBPARTIDA",
        code: "01012",
        title: "Caballos:",
        description: null,
        valid_from: null,
        statute_id: null,
        unit_id: null,
        unit_statute_id: null,
        tariff_order: "01.01.01.01"
      },
      {
        id: "121",
        parent_id: "120",
        level: "SUBPARTIDA",
        code: "010121",
        title: "Reproductores de raza pura",
        description: "Caballos reproductores de raza pura",
        valid_from: null,
        statute_id: null,
        unit_id: "118",
        unit_statute_id: null,
        tariff_order: "01.01.01.01.01"
      },
      {
        id: "122",
        parent_id: "120",
        level: "SUBPARTIDA",
        code: "010129",
        title: "Los demás:",
        description: null,
        valid_from: null,
        statute_id: null,
        unit_id: null,
        unit_statute_id: null,
        tariff_order: "01.01.01.01.02"
      },
      {
        id: "123",
        parent_id: "122",
        level: "SUBPARTIDA",
        code: "0101291",
        title: "Para carrera",
        description: "Caballos para carrera",
        valid_from: null,
        statute_id: null,
        unit_id: "118",
        unit_statute_id: null,
        tariff_order: "01.01.01.01.02.01"
      },
      {
        id: "124",
        parent_id: "122",
        level: "SUBPARTIDA",
        code: "0101299",
        title: "Los demás",
        description: "Los demás caballos vivos, excepto reproductores de raza pura y para carrera.",
        valid_from: null,
        statute_id: null,
        unit_id: "118",
        unit_statute_id: null,
        tariff_order: "01.01.01.01.02.02"
      },
      {
        id: "125",
        parent_id: "119",
        level: "SUBPARTIDA",
        code: "01013",
        title: "Asnos",
        description: "Asnos vivos",
        valid_from: null,
        statute_id: null,
        unit_id: "118",
        unit_statute_id: null,
        tariff_order: "01.01.01.02"
      },
      {
        id: "126",
        parent_id: "119",
        level: "SUBPARTIDA",
        code: "01019",
        title: "Los demás",
        description: "Mulos y burdéganos, vivos.",
        valid_from: null,
        statute_id: null,
        unit_id: "118",
        unit_statute_id: null,
        tariff_order: "01.01.01.03"
      },
      {
        id: "127",
        parent_id: "119",
        level: "PARTIDA",
        code: "0102",
        title: "Animales vivos de la especie bovina.",
        description: null,
        valid_from: null,
        statute_id: null,
        unit_id: null,
        unit_statute_id: null,
        tariff_order: "01.01.02"
      },
      {
        id: "128",
        parent_id: "127",
        level: "SUBPARTIDA",
        code: "01022",
        title: "Bovinos domésticos:",
        description: null,
        valid_from: null,
        statute_id: null,
        unit_id: null,
        unit_statute_id: null,
        tariff_order: "01.01.02.01"
      },
      {
        id: "129",
        parent_id: "128",
        level: "SUBPARTIDA",
        code: "010221",
        title: "Reproductores de raza pura:",
        description: null,
        valid_from: null,
        statute_id: null,
        unit_id: null,
        unit_statute_id: null,
        tariff_order: "01.01.02.01.01"
      },
      {
        id: "130",
        parent_id: "129",
        level: "SUBPARTIDA",
        code: "010221001",
        title: "Hembras",
        description: "Animales bovinos domésticos, hembras, reproductores de raza pura.",
        valid_from: null,
        statute_id: null,
        unit_id: "118",
        unit_statute_id: null,
        tariff_order: "01.01.02.01.01.01"
      },
      {
        id: "131",
        parent_id: "130",
        level: "SUBPARTIDA",
        code: "010221002",
        title: "Machos",
        description: "Animales bovinos domésticos, machos, reproductores de raza pura.",
        valid_from: null,
        statute_id: null,
        unit_id: "118",
        unit_statute_id: null,
        tariff_order: "01.01.02.01.01.02"
      },
      {
        id: "132",
        parent_id: "128",
        level: "SUBPARTIDA",
        code: "010229",
        title: "Los demás:",
        description: null,
        valid_from: null,
        statute_id: null,
        unit_id: null,
        unit_statute_id: null,
        tariff_order: "01.01.02.01.02"
      },
      {
        id: "133",
        parent_id: "132",
        level: "SUBPARTIDA",
        code: "0102291",
        title: "Para lidia",
        description: "Animales bovinos domésticos, para lidia.",
        valid_from: null,
        statute_id: null,
        unit_id: "118",
        unit_statute_id: null,
        tariff_order: "01.01.02.01.02.01"
      },
      {
        id: "134",
        parent_id: "132",
        level: "SUBPARTIDA",
        code: "0102299",
        title: "Los demás:",
        description: null,
        valid_from: null,
        statute_id: null,
        unit_id: null,
        unit_statute_id: null,
        tariff_order: "01.01.02.01.02.02"
      },
      {
        id: "135",
        parent_id: "134",
        level: "SUBPARTIDA",
        code: "010229901",
        title: "Hembras",
        description: "Los demás animales bovinos domésticos vivos, hembras, excepto reproductores de raza pura y para lidia.",
        valid_from: null,
        statute_id: null,
        unit_id: "118",
        unit_statute_id: null,
        tariff_order: "01.01.02.01.02.02.01"
      },
      {
        id: "136",
        parent_id: "135",
        level: "SUBPARTIDA",
        code: "010229902",
        title: "Machos",
        description: "Los demás animales bovinos domésticos vivos, machos, excepto reproductores de raza pura y para lidia.",
        valid_from: null,
        statute_id: null,
        unit_id: "118",
        unit_statute_id: null,
        tariff_order: "01.01.02.01.02.02.02"
      }
    ];
  }

  /*
   * fetch headings list 
   */
  getAll(callback) {

    const units = ['u', 'kg', 'cm', 'lt'];

    this.data.map(item => {
      item.grav = Math.floor((Math.random() * 25));
      item.iva = Math.floor((Math.random() * 6) + 10);
      item.u = units[Math.floor((Math.random() * 4))] ;
      item.isFav = Math.random() < 0.5 ? true : false;
    });


    return callback(this.data);
      //return this.$http.get(this.URL)
                 //.then(callback, this.handleError);

  };

  getCurrentHeading(){
    return this._currentHeading;
  }

  setCurrentHeading(value){
    this._currentHeading = value;
  }

  /*
   * print error
   */
  handleError(res) {
    console.warn(res);
  }

}

angular.module('app.headings').service('HeadingsService', HeadingsService); 
