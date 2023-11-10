import { Console } from "@woowacourse/mission-utils";
import eventPlanController from "../Controller/EventPlanController.js";

const InputView = {
  async readDate(eventPlan) {
    const input = await Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n");

    eventPlanController.visitDateHandler(eventPlan, input);
  },
};

export default InputView;
