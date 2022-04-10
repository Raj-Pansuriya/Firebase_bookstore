import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    getDoc, updateDoc
} from 'firebase/firestore'

// Firebase Configuration
// TODO: Add your projects firebase configuration object which looks something like below
// 
//   const firebaseConfig = {
//      apiKey: "some value",
//      authDomain: "some value",
//      projectId: "some value",
//      storageBucket: "some value",
//      messagingSenderId: "some value",
//      appId: "some value"
//      };

// initialize firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'books')

// queries
// const q = query(colRef, where("author", "==", "Patrick Rothfuss"), orderBy('createdAt'))
const q = query(colRef, orderBy('createdAt'))

// realtime collection data
// pass `colRef` as a param instead of `q` to fetch full data
// pass `q` as a param instead of `colRef` to execute the given query
onSnapshot(q, (snapshot) => {
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
})

// add document
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
    // Prevent default action on submit. Page reloads on submit, we don't want that
    e.preventDefault()

    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        createdAt: serverTimestamp()
    })
        .then(() => {
            addBookForm.reset()
        })
})

// delete documeny
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
    // Prevent default action on submit. Page reloads on submit, we don't want that
    e.preventDefault()

    const docRef = doc(db, 'books', deleteBookForm.id.value)

    deleteDoc(docRef)
        .then(() => {
            deleteBookForm.reset()
        })
})

// get a single document
const docRef = doc(db, 'books', 'DwioSledInyghDX93o3m')

onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id)
})

// update a document
const updateForm = document.querySelector('.update')
updateForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'books', updateForm.id.value)

    updateDoc(docRef, {
        title: 'updated title',
    })
        .then(() => {
            updateForm.reset()
        })
})