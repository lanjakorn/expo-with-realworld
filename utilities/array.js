/** all pure func */

/**
   * @param  {[array]}        array           | ['USD', 'JPY', 'GBP'] |
   * @param  {[number]}       index           | 0 |
   * @return {[array]}        array           | ['JPY', 'GBP'] | delete element of array by index and return new array
   */
const deleteByIndex = ( array, index ) =>
  array.slice( 0, index ).concat( array.slice( index + 1 ) )

/**
   * @param  {[array]}        array           | ['USD', 'JPY', 'GBP'] |
   * @param  {[string]}       find            | 'USD' | find array index
   * @param  {[string]}       items           | ['USD1', 'USD2', 'USD3'] | find array index
   * @return {[array]}        array           | ['USD1', 'USD2', 'USD3', 'JPY', 'GBP'] | find and replace and return new array
   */
const findAndReplace = ( array, find, items ) => {
  const startIndex = array.findIndex( e => e === find )
  return [
    ...array.slice( 0, startIndex ),
    ...items,
    ...array.slice( startIndex + 1 ),
  ]
}

/**
   * @param  {[array]}        array           | ['USD', 'JPY', 'GBP'] |
   * @return {[array]}        array           | ['USD', 'JPY'] | delete last element and return new array
   */
const pop = array => array.slice( 0, -1 )

/**
   * @param  {[array]}        array           | ['USD', 'JPY', 'GBP'] |
   * @return {[array]}        array           | ['JPY', 'GBP'] | delete first element and return new array]
   */
const shift = array => array.slice( 1 )

/**
   * @param  {[array]}        array           | ['USD', 'JPY', 'GBP', 'IDR', 'CNY'] |
   * @param  {[number]}       start           | 2 | start by index
   * @param  {[number]}       deleteCount     | 1 | delete by index after start by index
   * @param  {[string]}       items           | 'USD1' | find array index
   * @return {[array]}        array           | ['USD', 'JPY', 'USD1', 'IDR', 'CNY'] | insert element and remove and return new array
   */
const splice = ( array, start, deleteCount, ...items ) => [
  ...array.slice( 0, start ),
  ...items,
  ...array.slice( start + deleteCount ),
]

/**
   * @param  {[array]}        array           | ['USD', 'JPY', 'GBP'] |
   * @return {[array]}        array           | ['USD'] | get first element and return new array
   */
const getFirst = array => array.slice( 0, 1 )

/**
   * @param  {[array]}        array           | ['USD', 'JPY', 'GBP'] |
   * @return {[array]}        array           | ['GBP'] | get last element and return new array
   */
const getLast = array => array.slice( -1 )

export { deleteByIndex, findAndReplace, getFirst, getLast, pop, shift, splice }
