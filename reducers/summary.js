import data from '../comp/data.json';
import moment from 'moment';
const startTime = function(){
  return moment('2018-01-01');     
};
const getInterval = function(int){
  let m=startTime().add(int,'months');
  return [m.clone().startOf('month'),m.clone().endOf('month')];
}
const getManDayForPeriod = function(resource, interval){
  let d=moment(resource.date);
  if(d.isBetween(interval[0], interval[1])){
    return resource.day;
  }
  return 0;
}
export default function reducer(state=data, action){
  let intervals=state.meta.resolution.map((item) => {
    let i=getInterval(item);
    i[2]=0;
    return i;
  });
/*
    let md=data.planned.reduce((summ, item)=>{
      if(summ instanceof Object) {
        summ=this.getManDayForPeriod(summ, interval);
      }
      return summ + this.getManDayForPeriod(item, interval);
    });
    */
  state.meta.intervals = intervals;

  // calculate resouce for project level
  let newProjects=state.projects.map((project)=>{
    project.sumIntervals=intervals.map(function(interval) {
      let newI = interval.slice(0);
      newI[2]=0;
      project.planned.forEach(function(plan){
        newI[2] += getManDayForPeriod(plan, newI)
      }, this);
      interval[2]+=newI[2];
      return newI;
    }, this);
    return project;
  });
  state.projects = newProjects;
  return state;
}
