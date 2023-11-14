import EventPlan from "./Model/EventPlan.js";
import OutputView from "./View/OutputView.js";
import InputView from "./View/InputView.js";
import { CHRISTMAS_EVENT } from "./utils/Constant.js";

class App {
  async run() {
    OutputView.printMessage(CHRISTMAS_EVENT.start);
    const eventPlan = new EventPlan();
    await InputView.readDate(eventPlan);
  }
}

export default App;
