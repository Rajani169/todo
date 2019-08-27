import React from 'react';
const removeStyle ={
    color: '#c0c0c0',
    }

class ListItem extends React.Component{
     constructor(props){
        super(props);
     this.state = {
      done: false
     }
    }
remove = ()=> {
        var index = parseInt(this.props.index);
        this.props.removeItem(index);
           }

complete=()=>{
        var index = parseInt(this.props.index);
        this.props.doneItem(index);
    }


/*handleOnClick = ()=> {
            if(this.state.done === false){
                this.setState({
                    done: true
                })
            }
            else if(this.state.done === true){
                this.setState({
                    done: false
                })
            }
    };
    */
    render(){
       /* var todoClass = this.state.done ? 
        "done" : "undone";
        */
        return(
           <li className='list-group-item listStyling'>
               
            <i className="check icon col-md-3" onClick ={this.complete}></i>
            <span className="col-md-3">{this.props.Item}</span>
             <i className="remove icon close" onClick= {this.remove} style={removeStyle}></i>
             
             </li>
         );
    }
}
export default ListItem;
