import EventPlan from "./Model/EventPlan.js";
import OutputView from "./View/OutputView.js";
import InputView from "./View/InputView.js";

class App {
  async run() {
    OutputView.printMessage("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
    const eventPlan = new EventPlan();
    await InputView.readDate(eventPlan);
  }
}

export default App;
