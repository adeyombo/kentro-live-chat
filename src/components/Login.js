import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import firebase from "firebase/app";

import { auth } from '../firebase'

const Login = () => {
  return (
    <div id="login-page">
        <div id="login-card">
            <h2>Welcome to KentroChat 🚀</h2>
            <div 
                className="login-button google"
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                <GoogleOutlined /> Sign in with Google
            </div>
        </div>
    </div>
  )
}

export default Login