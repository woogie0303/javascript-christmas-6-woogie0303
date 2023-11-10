import Model from "../Model/Model.js";

class Controller {
  constructor() {
    this.model = new Model();
  }

  async initHandler() {}
}

const controller = new Controller();

export default controller;
