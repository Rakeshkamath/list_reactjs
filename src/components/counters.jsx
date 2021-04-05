import React, { Component } from 'react'
import Counter from "./counter";

class Counters extends Component {
    
    render() { 
        const {onAdd,onReset,counters,onDelete,onIncrement,onDecrement}=this.props;
        return ( 
        <div>
            <button 
            onClick={onReset} 
            className="btn btn-primary btn-sm m-4">
                Reset
                </button>
                <button 
            onClick={onAdd} 
            className="btn btn-primary btn-sm m-2">
                Add
                </button>
           {counters.map(counter => (
           <Counter 
           key={counter.id} 
           onDelete={onDelete} 
           onIncrement={onIncrement}
           onDecrement={onDecrement}
           counter={counter}
           />    
              
            ))}
        </div> 
        );
    }
}
 
export default Counters;