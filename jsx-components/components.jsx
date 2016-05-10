var RecursionProblem = React.createClass({
  getInitialState: function (){
    return { show: false };
  },
  handleChange: function (event){
  },
  showAnswer: function (event){
    this.setState({ show: true });
  },
  render: function (){
    var self = this;

    return (
    <div className="problem">
      <h2>{self.props.problem.name}</h2>
      <div className="description">{self.props.problem.description}</div>
      <div className="problem-code-examples">
        <div className="problem-code problem-box">
        {this.props.problem.code}
        </div>
        <div className="problem-examples problem-box">
        {this.props.problem.example}
        </div>
      </div>
      <div className={ "solution " + ((this.state.show) ? 'show': 'hidden' )}>
        <pre>{this.props.problem.answer}</pre>
      </div>
      <button onClick={self.showAnswer}>Show Solution</button>
    </div>
    );
  }
});

var RecursionProblems = React.createClass({
  render: function (){
    var random_problem = Math.round(Math.random()*(this.props.problems.length - 1));
    console.log(random_problem);

    return (
    <div className="problems">
      <RecursionProblem problem={this.props.problems[random_problem]} />    
    </div>
    );
  }
}); 