import React,{useState} from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function App(){
  const[emai,set] = useState("");
  const[password, setPassword]=useState("");
  const [user, setUser]=useState(null);

  const handleLogin = async () => {
    try{
  
    const userCredential=await signInWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);
    }
    catch(error){
      Alert.alert("Error",error.message);
    }
  }
  
  const handleLogout = async() => {
      await auth.signOut();
      setUser(null)
    
  }
  
  const handleSignUp = async () => {
    try{

    }
    catch(error){
      Alert.alert("Error",error.message)
    }
  }
  return
}

