import { Record } from 'immutable'
import FirebaseList from './firebaseList'
import { solutions, getSolutions } from './actions'

const Task = new Record( {
  completed: false,
  key: null,
  title: null,
} )

export const subscribeEvent = new FirebaseList(
  {
    onSuccess: getSolutions,
    onFailure: solutions.failure,
  },
  Task
)
