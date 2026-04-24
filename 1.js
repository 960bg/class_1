class one {
  prop = 'prop';
  fn() {
    console.log('fn');
  }
}

// console.dir(one);
// console.dir(new one());

function gh() {
  gh.prototype.fn1 = function function1_function1() {
    return 5;
  };
  let b = 'b';

  gh.staticProp = 'staticProp';
  gh.staticMethod = function () {
    return this.staticProp + ' gh.staticMethod';
  };
}

const a_gh = new gh();

console.log(gh.staticProp);
console.log(gh.staticMethod());
console.dir(gh);

console.log(gh.fn1());

for (const key in a_gh) {
  console.log(a_gh[key]);
}
