import {LOAD, CLEAR, loadItems, clearItems} from '../actions';
const items = [
{"task":"HTML I","done":true},
{"task":"CSS","done":true},
{"task":"Responsive design","done":true},
{"task":"Git","done":true},
{"task":"JavaScript I","done":true},
{"task":"JavaScript II","done":false}
]

const initialState = {
  items: []
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD: {
      return {
        items: items.slice()
      }
    }
    case CLEAR: {
      return {
        items: []
      }
    }
    dafault: return state;
  }
  return state;
}

export default reducer;
