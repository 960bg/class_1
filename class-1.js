function MyClass1() {
  MyClass1.prototype.constructor = {
    a: 'a',
    home() {
      return 'home';
    },
  };
  return 2;
}

console.dir(MyClass1);

const extendClass = new MyClass1();

console.dir(extendClass);
