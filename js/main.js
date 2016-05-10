var problem_data = [{
  name: 'Palindrom Detection',
  description: 'Eliminate consecutive duplicates in a list. If the list contains repeated elements they should be replace with a single copy of the element. The order of the elements cannot be changed.',
  code: 'function (){}',
  example: 'f -> lorem',
  answer: ''
}];

var Problems = React.createFactory(RecursionProblems);

var projects = Problems({ problems: problem_data });

ReactDOM.render(projects, $('.problems-container')[0]);