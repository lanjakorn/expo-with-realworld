import { Record } from 'immutable'
import FirebaseList from './firebaseList'
import { faqs, getFaqs } from './actions'

const Task = new Record( {
  completed: false,
  key: null,
  title: null,
} )

export const subscribeEvent = new FirebaseList(
  {
    onSuccess: getFaqs,
    onFailure: faqs.failure,
  },
  Task
)
