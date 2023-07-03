import { useEffect, useState,} from "react";
import Navbar1 from "./navbar";
import { Form } from "react-bootstrap";
import axios from 'axios';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, listAll, ref , getDownloadURL , getMetadata } from "firebase/storage";


const AdminAss = () => {

  
    const [msg,setMsg] = useState(null);
    const [content, setContent] = useState('A');
    const [filelist,setFilelist] = useState([]);
     const [filelistname,setFilelistname] = useState([]);  //array to get all files in storage for specific path
   

    const firebaseConfig = {
        apiKey: "AIzaSyAIbTZkU0FkGkGEYaUcqpMxpOHTey1VDZk",
        authDomain: "edu-system-7a2d5.firebaseapp.com",
        projectId: "edu-system-7a2d5",
        storageBucket: "edu-system-7a2d5.appspot.com",
        messagingSenderId: "920783828304",
        appId: "1:920783828304:web:fc5db10c4e43134e7a2855",
        measurementId: "G-Y3LN87WNE4"
      };
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const filelistRef = ref(storage,"AssSec/");
    const metadata = getMetadata(filelistRef);
     
 
   
 

    function handleShow () {
        listAll(filelistRef).then((res) =>{
            res.items.forEach((item) => {
                    getDownloadURL(item).then((url => { //Get url for each file
                    setFilelist((prev) => [...prev,url]); //grab the current value in the list to be list of 2 or more items
                    getMetadata(item).then((metadata => { //Get name for each file
                    setFilelistname((pre) => [...pre,metadata.name]); //grab the current value in the list to be list of 2 or more items
                     // console.log(metadata.name);
                     // console.log(url);
                }))
              }))
            })
         }
        )
        
      }
      const alldata = [...filelist,...filelistname];


    function handleContent (newContent) {
        setContent(newContent);
      }
      const getfiles = (url) => {
        window.open(url);  
      };


    return (

        <div className='AdminAss'>
       
        
        <div className="AssNav">     
    <ul>
      <li><a href="#" onClick = {() =>{handleContent('A')}}>Assignment 1</a></li>
      <br/>
      <br/>
      <li><a href="#" onClick = {() =>{handleContent('B')}}>Assignment 2</a></li>
      <br/>
      <br/>
      <li><a href="#" onClick = {() =>{handleContent('C')}}>Assignment 3</a></li>
      <br/>
      <br/>
      <li><a href="#"onClick = {() =>{handleContent('D')}}>Assignment 4</a></li>
      <br/>
      <br/>
    </ul>
    </div> 
    
     <div className="box">      
     <button onClick={handleShow}>ShowFiles</button>
     <br/>
     
       {
       filelistname.map((name,index) => {
     
        return (
          <a onClick={() => getfiles(filelist[index])} href={filelist} target="_blank">{name}</a> //target :blank for opening in another tab
        );
      })}

              
            
     </div>
     </div>

      );
}
 
export default AdminAss;