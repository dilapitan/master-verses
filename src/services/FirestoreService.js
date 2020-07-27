import firebase from '../config/firebase-config'

const db = firebase.firestore()

export const getMemoryVerses = () => {
  return db
    .collection('memory-verses')
    .orderBy('letter', 'asc')
    .orderBy('number', 'asc')
    .get()
}
