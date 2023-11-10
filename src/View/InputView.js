import { Console } from "@woowacourse/mission-utils";

let InputView;

export default InputView = {
  async readInput(message) {
    const input = await Console.readLineAsync(message);
    return input;
  },
};
