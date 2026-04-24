class Simple {
  static #S_P_MAX_COUNT_INSTANCE = 2;
  static #S_P_COUNT_INSTANCE = 0;
  static prosto = 'prosto static';

  #P_100 = 100;

  pInit;

  constructor(init) {
    if (this.constructor !== Simple) {
      // throw new Error('Наследование класса Simle запрещено.');
      console.log('Произошлло наследование класса Simple.');
    }
    if (!Simple.#S_P_ISCREATE()) {
      throw new ReferenceError(
        `Превышен порог создания объектов для класса Simple.`
      );
    }

    Simple.#S_P_COUNT_INSTANCE++;

    this.pInit = init;
  }

  static #S_P_ISCREATE() {
    return this.#S_P_MAX_COUNT_INSTANCE > this.#S_P_COUNT_INSTANCE;
  }

  static S_METHOD_GET_REMAINING() {
    return this.#S_P_MAX_COUNT_INSTANCE - this.#S_P_COUNT_INSTANCE;
  }

  static staticMethod() {}

  sum(a, b) {
    return a + b + this.#P_100;
  }

  diff(a, b) {
    return (a - b) * this.pInit;
  }
}

class ExSimple extends Simple {
  constructor(init) {
    super(init);
  }

  m() {
    console.log('метод m() класса', ExSimple.name);
  }
}

console.dir('ExSimple', ExSimple);

const instanceSimple = new Simple(10);
console.log(instanceSimple.sum(2, 4));
console.log(instanceSimple.diff(4, 2));
const exSimple = new ExSimple(100);
console.log(exSimple.sum(2, 4));
console.log(exSimple.diff(4, 2));
exSimple.m();
console.log(ExSimple.prosto);
