import React from 'react'
import * as firebase from "firebase/app"
import "firebase/auth"
import {FirebaseAuthProvider,FirebaseAuthConsumer,IfFirebaseAuthed,IfFirebaseAuthedAnd} from "@react-firebase/auth"
import {config} from "../config.ts"


function ButtonFirebase(){
    return <FirebaseAuthProvider firebase={firebase} {...config}>
            <div><button onClick={ ()=> {const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(googleAuthProvider)
        }}>Sign In with google</button>
        <button
          onClick={() => {
            firebase.auth().signOut();
          }}>
          Sign Out
        </button>
    </div>

    <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre style={{ height: 300, overflow: "auto" }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>
        <div>
          <IfFirebaseAuthed>
            {() => {
              firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken){console.log(idToken)})
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
    </FirebaseAuthProvider>

}

export default ButtonFirebase