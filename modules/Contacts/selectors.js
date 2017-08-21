import { createSelector } from 'reselect'

const contactsByIdSelector = state => state.contacts.contactsById
const currentContactSelector = state => state.contacts.contact
const isFetchingSelector = state => state.contacts.isFetching

const contactsSelector = createSelector(
  currentContactSelector,
  contactsByIdSelector,
  ( currentContact, items ) => {
    return items[ currentContact ]
  }
)

export {
  contactsByIdSelector,
  contactsSelector,
  currentContactSelector,
  isFetchingSelector,
}
