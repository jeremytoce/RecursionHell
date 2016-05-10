var RecursionProblem = React.createClass({
  displayName: "RecursionProblem",

  getInitialState: function () {
    return { answer: '', show: false };
  },
  handleChange: function (event) {},
  showAnswer: function (event) {
    this.setState({ show: true });
  },
  render: function () {
    var self = this;

    return React.createElement(
      "div",
      { className: "problem" },
      React.createElement(
        "h2",
        null,
        self.props.problem.name
      ),
      React.createElement(
        "div",
        { className: "description" },
        self.props.problem.description
      ),
      React.createElement(
        "div",
        { className: "problem-code-examples" },
        React.createElement(
          "div",
          { className: "problem-code problem-box" },
          this.props.problem.code
        ),
        React.createElement(
          "div",
          { className: "problem-examples problem-box" },
          this.props.problem.example
        )
      ),
      React.createElement(
        "div",
        { className: "solution " + (this.state.show ? 'show' : 'hidden') },
        this.props.problem.answer
      ),
      React.createElement(
        "button",
        { onClick: self.showAnswer },
        "Show Solution"
      )
    );
  }
});

var RecursionProblems = React.createClass({
  displayName: "RecursionProblems",

  render: function () {
    var random_problem = Math.round(Math.random() * (this.props.problems.length - 1));
    console.log(random_problem);

    return React.createElement(
      "div",
      { className: "problems" },
      React.createElement(RecursionProblem, { problem: this.props.problems[random_problem] })
    );
  }
});