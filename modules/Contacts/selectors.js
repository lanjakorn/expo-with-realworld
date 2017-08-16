import { createSelector } from 'reselect'

const currentSolutionSelector = state => state.contacts.contact
const contactsByIdSelector = state => state.contacts.contactsById
const isFetchingSelector = state => state.contacts.isFetching

const contactsSelector = createSelector(
  currentSolutionSelector,
  contactsByIdSelector,
  ( currentContact, items ) => {
    return items[ currentContact ]
  }
)

export {
  currentSolutionSelector,
  isFetchingSelector,
  contactsByIdSelector,
  contactsSelector,
}
