const currentContactUsSelector = state => state.contactUs.contactUs
const contactUsByIdSelector = state => state.contactUs.contactUsById
const isFetchingSelector = state => state.contactUs.isFetching

const getFirstContactUsSelector = state =>
  state.contactUs.contactUsById[ Object.keys( state.contactUs.contactUsById )[ 0 ] ]

export { currentContactUsSelector, contactUsByIdSelector, isFetchingSelector, getFirstContactUsSelector }
