import {combineReducers} from 'redux';
import projects from './projects.js';
import resources from './resources.js';
import summary from './summary.js';

export default combineReducers({
    projects: projects,
    resources: resources,
    summary: summary
});