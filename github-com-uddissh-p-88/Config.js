import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD2ka51XmCV1UTjkPvfg_rlGhVXV9bDf0o',
  authDomain: 'story-telling-ca4ab.firebaseapp.com',
  databaseURL: 'https://story-telling-ca4ab-default-rtdb.firebaseio.com',
  projectId: 'story-telling-ca4ab',
  storageBucket: 'story-telling-ca4ab.appspot.com',
  messagingSenderId: '228717791741',
  appId: '1:228717791741:web:5121c76c63fedde46df194',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
