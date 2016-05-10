var problem_data = [{
  name: 'Palindrome Detection',
  description: 'Eliminate consecutive duplicates in a list. If the list contains repeated elements they should be replace with a single copy of the element. The order of the elements cannot be changed.',
  code: 'function palindrome(str){}',
  example: 'palindrome(\'\'rotor\'\') ==> true',
  answer: 
  'function palindrome(str) {' +
  'if (str <= 1) {' +
    'return true;' +
  '}' +
  'else {' +
    'if (str.charAt(0) === str.charAt(str.length-1)) {' +
      'return palindrome(str.slice(1).slice(0,-1))' +
    '}' +
    'else {' +
      'return false;' +
    '}'
  }
}'},

  {
  name: 'Recursive Factorial',
  description: 'Create a function that computes the factorial of a number n. A factorial is the product of the integers from 1 through n.',
  code: 'function factorial(n){}',
  example: 'factorial(5) => 120 (1 * 2 * 3 * 4 * 5)',
  answer: 
  'function factorial(n) {
  if (n === 0) {
    return 1;
  }
  else {
    return n * factorial(n-1);
  }
}'}, 

  {
  name: 'String Reverse',
  description: 'Write a function that recursively reverses a string.',
  code: 'function stringReverse(str){}',
  example: 'testing -> gnitset',
  answer: 'function stringReverse(str) {' +
  'if (str.length === 1) {' +
    'return str;' +
  '}' +
  'else {' +
    'return stringReverse(str.slice(1)) + str.charAt(0);' +
  '}'
}'}, 

  {
  name: 'Array Sum',
  description: 'Compute the sum of all of the numbers in an array. Assume there is no array depth.',
  code: 'function arraySum(arr){}',
  example: 'arraySum([5,2,6]) -> 13',
  answer: 
  'function arraySum(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  else {
    return arr[0] + arraySum(arr.slice(1));
  }
}'
}, 

  {
  name: 'Exponent Calculator',
  description: 'Find the exponent of a number when the power is provided.',
  code: 'function exp(base, exp){}',
  example: 'exp(8,3) -> 62',
  answer: 

  'function exp(base, exp) {
  if (exp === 0) {
    return 1;
  }
  else {
    return base * expon(base, exp-1);
  }
}'
}, 

  {
  name: 'Even Number Check',
  description: 'Write a recursive function that determines if a number n is even.',
  code: 'function even(n){}',
  example: 'even(7) -> false',
  answer: 
  'function even (n) {
  if (n < 1) {
    if (n === 0) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return even2(n-2);
  }
}'
},   
];

var Problems = React.createFactory(RecursionProblems);

var projects = Problems({ problems: problem_data });

ReactDOM.render(projects, $('.problems-container')[0]);