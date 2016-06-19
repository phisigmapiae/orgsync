import axios from 'axios';
import firebase from 'firebase'
export const FETCH_BROTHERS = 'FETCH_BROTHERS';

export function fetchPosts() {
  const config = {
    apiKey: "AIzaSyAvIGoVjEIqhWqx7v82qooxqFOOx_N_-yA",
    authDomain: "pspalphaepsilon.firebaseapp.com",
    databaseURL: "https://pspalphaepsilon.firebaseio.com",
    storageBucket: "pspalphaepsilon.appspot.com",
  };
  firebase.initializeApp(config);

  const ref = firebase.database().ref();

    return dispatch => {
      ref.on('value', snapshot => {
        dispatch({
          type: FETCH_BROTHERS,
          payload: snapshot.val()
        })
      });
    }
}
