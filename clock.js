//  Перепишите класс
// важность: 5
// Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

// P.S. Часики тикают в консоли. Откройте её, чтобы посмотреть.

function Clock1({ template }) {
  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function () {
    clearInterval(timer);
  };

  this.start = function () {
    render();
    timer = setInterval(render, 1000);
  };
}

// let clock = new Clock1({ template: 'h:m:s' });
// clock.start();

class Clock {
  #IDtimer;
  #endTime;
  #timeIsOver = 0;
  #template;
  constructor({ template, endTime }) {
    this.#endTime = endTime;
    this.#template = template;
  }

  // get endTime() {
  //   return this.#endTime;
  // }
  // get template() {
  //   return this.#template;
  // }
  // get timeIsOver() {
  //   return this.#timeIsOver;
  // }
  // set timeIsOver(time) {
  //   this.#timeIsOver = time;
  // }

  stop() {
    clearInterval(this.#IDtimer);
  }

  start() {
    console.log('start this=', JSON.stringify(this));
    console.dir(this);

    this.#render();
    this.#IDtimer = setInterval(() => {
      this.#render();
    }, 1000);
  }

  #render() {
    console.log('render this=', JSON.stringify(this));

    console.log('this.endTime =', this.#endTime);
    console.log('this.timeIsOver', this.#timeIsOver);

    if (
      typeof this.#endTime === 'number' &&
      this.#endTime === this.#timeIsOver
    ) {
      return this.stop();
    }

    this.#timeIsOver += 1;
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.#template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }
}

// const myClock = new Clock({ template: 'h:m:s', endTime: 5 });
const myClock = new Clock({ template: 'h:m:s' });

myClock.start();

setTimeout(() => {
  myClock.stop();
}, 3000);
