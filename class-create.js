class MyClass1 {
  constructor() {
    console.log('Это конструктор MyClass1');
  }
  static st = 1;
  fedor() {
    console.log('MyClass1 fedor');
  }
}

class MyClass2 {
  constructor() {
    console.log('Это конструктор MyClass2');
  }
  static st = 1;
  petr() {
    console.log('MyClass2 Petr');
  }

  doFedr(object) {
    console.log('MyClass2 doFedr(object):');

    object.fedor();
  }
}

const m1 = new MyClass1();
const m2 = new MyClass2();

m2.doFedr(m1);
