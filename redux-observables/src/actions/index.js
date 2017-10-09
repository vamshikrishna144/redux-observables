export const LOAD = 'LOAD'
export const CLEAR  = 'CLEAR'

export function loadItems() {
  return {
    type: 'LOAD'
  }
}

export function clearItems() {
  return {
    type: 'CLEAR'
  }
}
