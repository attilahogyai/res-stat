import data from '../comp/data.json';
export default function reducer(state=data.resources, action){
    if(!state){
        return state.resources;
    }
    return state;
}
  