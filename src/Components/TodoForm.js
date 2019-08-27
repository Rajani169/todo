import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
         this.state={
             item: ''
         }
        this.handleClick= this.handleClick.bind(this); 
        this.handleChange= this.handleChange.bind(this);
    }
    handleChange(e){
       this.setState({
           item: e.target.value 
       });
    }
    handleClick(event){  
        event.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({
            item: ''
        })
    } 
    render(){
        return (
                 
                    <form className="form-inline">
                    <input type="text" ref='itemName' className="form-control" onChange={this.handleChange} value={this.state.item} placeholder="Enter tasks here..."/>
                    <button type="submit" className="btn btn-primary" onClick={this.handleClick}>ADD</button>
                    </form>
                    
                    
        );
    }
}

export default TodoForm;