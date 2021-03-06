import React, { Component } from 'react';
import NavBar from './components/navbar'
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {  
    counters:[
       {id:1, value:0 },
       {id:2, value:0 },
       {id:3, value:0 },
       {id:4, value:0 }
    ]
};
constructor() {
  super();
  console.log('App - Constructor');
  
}
componentDidMount(){
  console.log('App - Mounted');
}
handleReset=() =>{
const counters= this.state.counters.map(c=>{
        c.value=0;
        return c;
    });
 this.setState({counters});
};
handleAdd=() =>{
  
  };

handleIncrement=counter =>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
};
handleDecrement=counter =>{
  const counters=[...this.state.counters];
  const index=counters.indexOf(counter);
  counters[index]={...counter};
  counters[index].value--;
  this.setState({counters});

};

handleDelete= (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
};
  render() {
    console.log('App - Rendered');
    return (
      <React.Fragment>
      <NavBar 
      totalCounters={this.state.counters.filter(c=>c.value>0).length}
      />
      <main className='containter'>
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset} 
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        />
      </main>
      </React.Fragment>

    );
  }
}

export default App;