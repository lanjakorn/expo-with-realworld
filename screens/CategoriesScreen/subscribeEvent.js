import { Record } from 'immutable'
import { FirebaseList } from 'services/firebase'
import { getCategories } from './actions'

const Task = new Record( {
  completed: false,
  key: null,
  title: null,
} )

export const subscribeEvent = new FirebaseList(
  {
    onLoad: getCategories,
  },
  Task
)
