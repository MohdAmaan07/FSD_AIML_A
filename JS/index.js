let emp = ["John Doe", "Jane Smith", "Emily Johnson", "Michael Brown"];

let [emp1,emp2,emp3, emp4]  = emp;

console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);

const set = new Set([1, 2, 3, 4, 5]);
console.log(set);

const evenNumbers = [...set].filter(num => num % 2 === 0);
console.log(evenNumbers);

const reduced = [...set].reduce((acc, num) => acc + num, 0);
console.log(reduced);