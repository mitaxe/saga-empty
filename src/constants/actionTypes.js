export const FETCH_DATA = createActionType('FETCH_DATA')


function createActionType (name) {
  return {
    REQUEST: `${name}_REQUEST`,
    SUCCESS: `${name}_SUCCESS`,
    FAIL: `${name}_FAIL`
  }
}