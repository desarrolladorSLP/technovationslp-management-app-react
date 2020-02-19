import React from 'react'
import * as firebase from "firebase/app"
import "firebase/auth"
import { FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseAuthedAnd } from "@react-firebase/auth"
import CONFIG from '../../config'
import Button from '../button'
import { signOut, signInWithPopup, sendToBackendToken, firebaseAuth } from '../../app/services/firebase'

const SIGN_IN_WITH_GOOGLE = "Sign In with google"
const SIGN_OUT = "Sign Out"

function ButtonFirebase() {
  return <FirebaseAuthProvider firebase={firebase} {...CONFIG}>
    <Button onClick={signInWithPopup} text={SIGN_IN_WITH_GOOGLE} color="#000000"></Button>
    <Button
      onClick={signOut} text={SIGN_OUT} color="#000000">
      {sendToBackendToken}
    </Button>
    <div>
      <IfFirebaseAuthed>
        {firebaseAuth}
      </IfFirebaseAuthed>
      <IfFirebaseAuthedAnd
        filter={({ providerId }) => providerId !== "anonymous"}
      >
        {({ providerId }) => {
          console.log("you are authenticated");//return <div>You are authenticated with {providerId}</div>;
        }}
      </IfFirebaseAuthedAnd>
    </div>
  </FirebaseAuthProvider>
}

export default ButtonFirebase