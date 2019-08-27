import React from 'react';
import Header from './todoHeader';
import TodoForm from './TodoForm';
import TodoList from './todoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tasks: []
        }
        this.addItems = this.addItems.bind(this);
        this.doneItem = this.doneItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    addItems(task){
        this.setState({
            tasks: this.state.tasks.concat(task)
         }) 
        }
    doneItem(itemIndex){
        var todo = this.state.tasks[itemIndex];
        this.state.tasks.splice(itemIndex, 1);
        this.state.tasks.push(todo); 
        this.setState({tasks: this.state.tasks});   
    }

    removeItem(itemIndex){
        this.state.tasks.splice(itemIndex, 1);
        this.setState({tasks: this.state.tasks});
    }
    render(){
     return (
         <div className="ui container" >
             <Header />
             <TodoForm addItem={this.addItems}  />
             <TodoList list={this.state.tasks} removeItem={this.removeItem} doneItem={this.doneItem} /> 
             </div>
        );
    }
}
export default App;
