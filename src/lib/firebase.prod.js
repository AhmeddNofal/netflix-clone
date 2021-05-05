import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBmxwo_d2XpVUHwlsP2Ham039m8fsNZvgE",
    authDomain: "netflix-clone-891ff.firebaseapp.com",
    projectId: "netflix-clone-891ff",
    storageBucket: "netflix-clone-891ff.appspot.com",
    messagingSenderId: "671148335627",
    appId: "1:671148335627:web:acd3414d12fa18d29e5d0e"
  };

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };