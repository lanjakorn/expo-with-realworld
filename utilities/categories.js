const hasSubCategories = (
  subCategories,
  oldCategories,
  normalizedsubCategories,
  key
) => {
  switch ( toString.call( oldCategories ) ) {
  case '[object Object]': {
    return subCategories
      ? {
        ...oldCategories,
        ...normalizedsubCategories[ key ],
      }
      : { ...oldCategories }
  }
  case '[object Array]':
  default: {
    return subCategories
      ? [ ...oldCategories, ...normalizedsubCategories[ key ] ]
      : [ ...oldCategories ]
  }
  }
}

export { hasSubCategories }
