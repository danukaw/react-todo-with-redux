var React = require('react');
var {connect} = require('react-redux');
var actions = require('Actions');

export var AddTodo = React.createClass({

 onSubmit : function (e) {
   var {dispatch} = this.props;
   e.preventDefault();
   var toDo = this.refs.todo.value;

   if(toDo.length > 0) {
     console.log("todo ==> ", toDo);
     this.refs.todo.value = "";
     //this.props.onSetTodo(toDo);
     dispatch(actions.addToDo(toDo));
   } else {
      this.refs.todo.focus();
   }

 },

 render : function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todo" placeholder="What Do you need to do"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo)
