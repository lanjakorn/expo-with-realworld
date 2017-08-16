import { Record } from 'immutable'
import FirebaseList from './firebaseList'
import { contacts, getContacts } from './actions'

const Task = new Record( {
  completed: false,
  key: null,
  title: null,
} )

export const subscribeEvent = new FirebaseList(
  {
    onSuccess: getContacts,
    onFailure: contacts.failure,
  },
  Task
)
