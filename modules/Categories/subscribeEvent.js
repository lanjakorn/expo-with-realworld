import { Record } from 'immutable'
import FirebaseList from './firebaseList'
import { categories, getCategories } from './actions'

const Task = new Record( {
  completed: false,
  key: null,
  title: null,
} )

export const subscribeEvent = new FirebaseList(
  {
    onSuccess: getCategories,
    onFailure: categories.failure,
  },
  Task
)
