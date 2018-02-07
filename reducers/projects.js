import data from '../comp/data.json';
import moment from 'moment';

export default function reducer(state=data.projects, action){

  if(!state){
    return state.project;
  }
  return state;
}
  