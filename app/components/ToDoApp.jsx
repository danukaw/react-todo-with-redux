var React = require('react');
//modules which were introduced
import ToDoList from 'ToDoList'
import AddTodo from 'AddTodo'
import ToDoSearch from 'ToDoSearch';

var  moment = require('moment');
var uuidv1 = require('uuid/v1');
export class ToDoApp extends React.Component{

  render() {

    return (
        <div>
          <h1 className="page-title">Todo App</h1>
          <div className="row">
            <div className="column small-centered small-11 medium-6 large-5" >
              <div className="container">
                <ToDoSearch/>
                <ToDoList/>
                <AddTodo/>
              </div>
            </div>
          </div>
        </div>
      );
  }

};

//export default ToDoApp;

module.exports = ToDoApp;