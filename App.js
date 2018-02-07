import React, { Component } from 'react';
import logo from './logo.svg';
import Moment from 'react-moment';
import './App.css';
import {connect} from 'react-redux';
import store from './store';
import moment from 'moment';


 /** Callendar component */
 const Calendar = connect(
  (state) => ({
    intervals: state.summary.meta.intervals
  })
)( ({intervals}) => 
{
  let m=intervals.map(interval => (<th className="month" >
  <Moment format="MM.DD">
  {interval[0]}
  </Moment> - {interval[2]}
  </th>));  
  return [<th className="month">Date</th>].concat(m);
});

/** Project bar compoent */
const ProjectBar = connect(
  (state) => ({
    projects: state.projects
  })
)( ({projects}) => 
{
  return projects.map(project => (
    <tr className="light-blue accent-1" key={project.name}>
    <td>{project.name}</td>
    <Project data={project} key={project.name}/>
    </tr>
  ));  
});
const Project =  ({data}) => 
{
  return data.sumIntervals.map(interval => {
    return <td className="project">{interval[2]}</td>;
  });  
};


class App extends Component {
  constructor(props){
    super(props);
    store.subscribe(() =>{
      
      console.log("store change", JSON.stringify(store.getState()));
    });
    store.dispatch({type:"INIT", playload: 1});
  /*
    this.state ={
      cells: [1,2,3,4,5,6,7,8,9,10,11,12],
      projects: data.projects,
      resources: data.resources
    }
    */ 
  }  
  getInterval(int){
    let m=this.startTime().add(int,'months');
    return [m.clone().startOf('month'),m.clone().endOf('month')];
  }
 



  render() {
    return (
      <table>
      <tr>
      <Calendar key="cal"/>
      </tr>
      <ProjectBar key="bp"/>
      </table>      
    );
  }
}

export default App;
