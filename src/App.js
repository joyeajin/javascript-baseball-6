import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  // 램덤 숫자 생성
  createRamdomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }

  async play() {}
}

export default App;
