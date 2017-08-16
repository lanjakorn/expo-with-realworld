import { Record } from 'immutable'
import FirebaseList from './firebaseList'
import { solutionCategories, getSolutionCategories } from './actions'

const Task = new Record( {
  completed: false,
  key: null,
  title: null,
} )

export const subscribeEvent = new FirebaseList(
  {
    onSuccess: getSolutionCategories,
    onFailure: solutionCategories.failure,
  },
  Task
)
