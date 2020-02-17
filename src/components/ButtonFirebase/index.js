import React from 'react'
import * as firebase from "firebase/app"
import "firebase/auth"
import { FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseAuthedAnd } from "@react-firebase/auth"
import CONFIG from '../../config'
import axios from 'axios'
import Button from '../button'

const SIGN_IN_WITH_GOOGLE="Sign In with google"
const SIGN_OUT = "Sign Out"

const signInWithPopup = () => {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(googleAuthProvider)
}

const signOut = () => {
  firebase.auth().signOut();
}

const sendToBackendToken = () => {
  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
    console.log(idToken)
  })
}

function ButtonFirebase() {
  return <FirebaseAuthProvider firebase={firebase} {...CONFIG}>
    <Button onClick={signInWithPopup} text={SIGN_IN_WITH_GOOGLE} color="#000000"></Button>
    <Button
      onClick={signOut} text={SIGN_OUT} color="#000000">
      {sendToBackendToken}
    </Button>
    <div>
      <IfFirebaseAuthed>
        {() => {
          firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            console.log(idToken)
            axios({
              method: 'post',
              url: 'https://teckers-backend.herokuapp.com/oauth/token',
              data: {
                grant_type: 'firebase',
                firebase_token_id: idToken
              }
            }, {
              headers: {
                "Content-type": "application/x-www-form-urlencoded",
              }
            }, {
              auth: {
                username: 'iOSApp',
                password: '65r3kelv'
              }
            })
              .then(function (response) {
                console.log(response)
              })
              .catch(function (error) {
                console.log(error)
              });
          })
          return <div>You are authenticated</div>;
        }}
      </IfFirebaseAuthed>
      <IfFirebaseAuthedAnd
        filter={({ providerId }) => providerId !== "anonymous"}
      >
        {({ providerId }) => {
          return <div>You are authenticated with {providerId}</div>;
        }}
      </IfFirebaseAuthedAnd>
    </div>
    {/* <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre style={{ height: 300, overflow: "auto" }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer> */}
  </FirebaseAuthProvider>

}

export default ButtonFirebase