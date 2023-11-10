import controller from "./Controller/Controller.js";

class App {
  async run() {
    await controller.initHandler();
  }
}

export default App;
