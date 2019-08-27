import React from 'react';
import ListItem from './Item';

class TodoList extends React.Component{
    render() {
       
        var items = this.props.list.map((item, index) =>{
            return( 
                <ListItem key={index} Item={item} doneItem={this.props.doneItem} removeItem={this.props.removeItem} index={index} />
                ); 
            });
        return(

            <ul className="list-group">
            {items}
            </ul>
            
        );
    }
}


export default TodoList;
