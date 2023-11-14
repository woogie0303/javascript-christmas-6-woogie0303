import { Console } from "@woowacourse/mission-utils";
import eventPlanController from "../Controller/EventPlanController.js";
import { CHRISTMAS_EVENT } from "../utils/Constant.js";

const InputView = {
  async readDate(eventPlan) {
    const input = await Console.readLineAsync(CHRISTMAS_EVENT.visitDateInputPrint);

    eventPlanController.visitDateHandler(eventPlan, input);
  },

  async readMenu(eventPlan) {
    const input = await Console.readLineAsync(CHRISTMAS_EVENT.orderMenuInputPrint);

    eventPlanController.ordermenuHandler(eventPlan, input);
  },
};

export default InputView;
