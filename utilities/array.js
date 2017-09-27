/**
   * @param  {[array]}        array           | [1, 2, 3] |
   * @param  {[number]}       index           | 0 |
   * @return {[array]}        array           | [2, 3] | delete element of array by index and return new array
   */
const deleteByIndex = ( array, index ) =>
  array.slice( 0, index ).concat( array.slice( index + 1 ) )

/**
   * @param  {[array]}        array           | [1, 2, 3] |
   * @param  {[string]}       find            | 1 | find array index
   * @param  {[any]} spread   items           | 1.1, 1.2, 1.3 | find array index
   * @return {[array]}        array           | [1.1, 1.2, 1.3, 2, 3] | find and replace and return new array
   */
const findAndReplace = ( array, find, ...items ) => {
  const startIndex = array.findIndex( e => e === find )
  return [
    ...array.slice( 0, startIndex ),
    ...items,
    ...array.slice( startIndex + 1 ),
  ]
}

/**
   * @param  {[array]}        array           | [1, 2, 3] |
   * @return {[array]}        array           | [1, 2] | delete last element and return new array
   */
const pop = array => array.slice( 0, -1 )

/**
   * @param  {[array]}        array           | [1, 2, 3] |
   * @return {[array]}        array           | [2, 3] | delete first element and return new array]
   */
const shift = array => array.slice( 1 )

/**
   * @param  {[array]}        array           | [1, 2, 3, 4, 5] |
   * @param  {[number]}       start           | 2 | start by index
   * @param  {[number]}       deleteCount     | 1 | delete by index after start by index
   * @param  {[any]} spread   items           | 99 | find array index
   * @return {[array]}        array           | [1, 2, 99, 4, 5] | insert element and remove and return new array
   */
const splice = ( array, start, deleteCount, ...items ) => [
  ...array.slice( 0, start ),
  ...items,
  ...array.slice( start + deleteCount ),
]

/**
   * @param  {[array]}        array           | [1, 2, 3] |
   * @return {[array]}        array           | [1] | get first element and return new array
   */
const getFirst = array => array.slice( 0, 1 )

/**
   * @param  {[array]}        array           | [1, 2, 3] |
   * @return {[array]}        array           | [3] | get last element and return new array
   */
const getLast = array => array.slice( -1 )

/**
   * @param  {[array]}        array           | [1, 2, 3] |
   * @return {[array]}        array           | [3, 2, 1] | shuffle array and return new array
   */
const shuffle = array => array.sort( () => Math.random() - 0.5 )

/**
   * @param  {[array]}        array           | [1, 2, 3] |
   * @return {[array]}        array           | [2] | suffer array and return only one element
   */
const random = array => array[ Math.floor( Math.random() * array.length ) ]

export {
  deleteByIndex,
  findAndReplace,
  getFirst,
  getLast,
  pop,
  random,
  shift,
  shuffle,
  splice,
}
