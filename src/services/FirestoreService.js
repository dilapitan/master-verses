import firebase from '../config/firebase-config'

const db = firebase.firestore()

export const getMemoryVerses = () => {
  return db.collection('memory-verses').orderBy('category', 'asc').get()
}
