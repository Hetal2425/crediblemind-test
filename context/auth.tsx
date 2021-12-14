import { createContext,FC,useContext,useState,useEffect } from "react";
import {User,getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from 'firebase/auth';
import app from '../lib/firebaseConfig';
import Router from 'next/router'


interface Iauth{
    user: User | null,
    login: ()=> void,
    logout: ()=> void
}

const auth =getAuth(app);
const AuthContext = createContext<Iauth>({
    user:null, login: () =>{},logout:()=>{}
})

const AuthProvider:FC = ({children}) =>{
     const [user,setUser] = useState<User | null>(null)
     useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth,(user)=>{
             if(user){
                 setUser(user)
                 Router.push("/news")       
             }
             else{
                 Router.push('/')
                 setUser(null)
             }
         })
         return unsubscribe;
     }, [])
     const login = async ()=>{
         try{
           await signInWithPopup(auth,new GoogleAuthProvider());
           Router.push('/news')
         }
         catch(error){
             console.error(error);
         }
     }
     const logout = async ()=>{
         try{
            await signOut(auth)
         }
         catch(error){
        console.error(error)
         }
     }
 return(
   <AuthContext.Provider value={{
       user,login,logout
   }}>
       {children}
   </AuthContext.Provider>
 )
}
const useAuth =()=> useContext(AuthContext);

export {AuthProvider,useAuth};