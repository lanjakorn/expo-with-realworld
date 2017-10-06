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

/**
   * @param  {[array]}        array           | 
   *                                            [ 
   *                                              { group: 1 }, 
   *                                              { group: 2 },
   *                                              { group: 2 }
   *                                            ] 
   *                                          |
   * @param  {[key]}          string          | 'group' |
   * @return {[array]}        array           | [1, 2] | return new array by removing the duplicates
   */
const uniq = ( array, key ) =>
  key
    ? array.reduce(
      ( p, c ) => ( p.every( e => e !== c[ key ] ) ? [ ...p, c[ key ] ] : p ),
      []
    )
    : array.reduce( ( p, c ) => ( p.every( e => e !== c ) ? [ ...p, c ] : p ), [] )

const trackFirstElementByKey = ( array, key ) =>
  array.reduce(
    ( p, c ) => {
      return p.stack.every( e => e !== c[ key ] )
        ? {
          stack: [ ...p.stack, c[ key ] ],
          newArray: [ ...p.newArray, { ...c, isFirst: true } ],
        }
        : {
          stack: p.stack,
          newArray: [ ...p.newArray, c ],
        }
    },
    { stack: [], newArray: [] }
  ).newArray

const sortByKey = ( array, key ) => {
  const sortBy = ( key, reverse ) => {
    const moveSmaller = reverse ? 1 : -1
    const moveLarger = reverse ? -1 : 1

    /**
       * @param  {*} a
       * @param  {*} b
       * @return {Number}
       */
    return ( a, b ) => {
      if ( a[ key ] < b[ key ] ) {
        return moveSmaller
      }
      if ( a[ key ] > b[ key ] ) {
        return moveLarger
      }
      return 0
    }
  }
  return array.sort( sortBy( key ) )
}

const countByKey = ( array, key ) =>
  array.reduce( ( p, c ) => {
    const first = p[ c[ key ] ] || []
    return { ...p, [ c[ key ] ]: [ ...first, c ] }
  }, {} )

export {
  deleteByIndex,
  findAndReplace,
  trackFirstElementByKey,
  getFirst,
  getLast,
  pop,
  random,
  shift,
  shuffle,
  splice,
  uniq,
  sortByKey,
  countByKey,
}
