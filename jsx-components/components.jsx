var RecursionProblem = React.createClass({
  getInitialState: function (){
    return { answer: '', show: false };
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
      <button onClick={self.showAnswer}>Show Solution</button>
    </div>
    );
  }
});

var RecursionProblems = React.createClass({
  render: function (){
    return (
    <div className="problems">
      {this.props.problems.map(function (problem){
        return <RecursionProblem problem={problem} />
      })}
    </div>
    );
  }
}); 