var problem_data = [{
  name: 'Palindrome Detection',
  description: 'Eliminate consecutive duplicates in a list. If the list contains repeated elements they should be replace with a single copy of the element. The order of the elements cannot be changed.',
  code: 'function palindrome(string){}',
  example: 'palindrome(\'\'rotor\'\') ==> true',
  answer: ''}, 

  {
  name: 'Recursive Factorial',
  description: 'Create a function that computes the factorial of a number n. A factorial is the product of the integers from 1 through n.',
  code: 'function factorial(n){}',
  example: 'factorial(5) => 120 (1 * 2 * 3 * 4 * 5)',
  answer: ''}, 

  {
  name: 'String Reverse',
  description: 'Write a function that recursively reverses a string.',
  code: 'function stringReverse(str){}',
  example: 'testing -> gnitset',
  answer: ''}, 

  {
  name: 'Array Sum',
  description: 'Compute the sum of all of the numbers in an array. Assume there is no array depth.',
  code: 'function arraySum(arr){}',
  example: 'arraySum([5,2,6]) -> 13',
  answer: ''}, 

  {
  name: 'Exponent Calculator',
  description: 'Find the exponent of a number when the power is provided.',
  code: 'function exp(base, exp){}',
  example: 'exp(8,3) -> 62',
  answer: ''}, 

  {
  name: 'Even Number Check',
  description: 'Write a recursive function that determines if a number n is even.',
  code: 'function even(n){}',
  example: 'even(7) -> false',
  answer: ''},   
];

var Problems = React.createFactory(RecursionProblems);

var projects = Problems({ problems: problem_data });

ReactDOM.render(projects, $('.problems-container')[0]);