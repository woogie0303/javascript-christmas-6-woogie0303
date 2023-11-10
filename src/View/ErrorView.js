import { Console } from "@woowacourse/mission-utils";

class ErrorView {
  printError(message) {
    Console.print(message);
  }
}

const errorView = new ErrorView();

export default errorView;
