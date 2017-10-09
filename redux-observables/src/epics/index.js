import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';

//takes in stream of actions => gives out stream of actions

function loadEpic(action$) {
  return action$
  // .filter(action => action.type === 'LOAD')
  .ofType('LOAD')
  .do(action => console.log('this is the epic', action))
  .ignoreElements()
}
export const rootEpic = combineEpics(loadEpic);
