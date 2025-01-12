function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(5, 10); // Correct usage

try {
  let result2 = add(5, '10'); // This will throw an error now
} catch (error) {
  console.error(error); // Handle the error gracefully
}
//Alternatively, using type predicates for better type handling
function isNumber(value: any): value is number {
    return typeof value === 'number';
}
function addSafe(a: any, b: any): number {
    if (!isNumber(a) || !isNumber(b)) {
        throw new Error('Arguments must be numbers');
    }
    return a + b;
}
let result3 = addSafe(5,10); // Correct usage
try {
    let result4 = addSafe(5, '10'); // This will throw an error
} catch (error) {
    console.error(error);
}