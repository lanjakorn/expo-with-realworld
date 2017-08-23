const currentContactUsSelector = state => state.contactUs.contactUs
const contactUsByIdSelector = state => state.contactUs.contactUsById
const isFetchingSelector = state => state.contactUs.isFetching

export { currentContactUsSelector, contactUsByIdSelector, isFetchingSelector }
