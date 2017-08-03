import { Record } from 'immutable'
import { FirebaseListCustom } from 'services/firebase'
import { getProducts } from './actions'

const Task = new Record( {
  completed: false,
  key: null,
  title: null,
} )

export const subscribeEvent = new FirebaseListCustom(
  {
    onLoad: getProducts,
  },
  Task
)
