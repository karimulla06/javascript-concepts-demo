const name1 = {
  fn: 'Virat',
  ln: 'Kohli'
};

function printName(city, state) {
  console.log(this.fn + ' ' + this.ln + ', ' + city + ', ' + state);
}
printName('vizag', 'Andhra Pradesh');

// call
printName.call(name1, 'vizag', 'Andhra Pradesh');

// apply
printName.apply(name1, ['vizag', 'Andhra Pradesh']);

// bind
const printBind1 = printName.bind(name1);
printBind1('Hyderabad', 'Telangana');

const printBind2 = printName.bind(name1, 'Bangalore');
console.log('aaaa');
printBind2('karnataka');

// polifill for bind
Function.prototype.myBind = function(ref, ...args) {
  const fn = this;
  return function(...params) {
    fn.apply(ref, [...args, ...params]);
  };
};

const printMyBind1 = printName.myBind(name1);
printMyBind1('Agra', 'Delhi');

const printMyBind2 = printName.myBind(name1, 'Kochi');
printMyBind2('Kerala');
