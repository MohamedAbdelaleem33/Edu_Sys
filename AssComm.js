import { useEffect, useState,} from "react";
import Navbar1 from "./navbar";
import { Form } from "react-bootstrap";
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage,ref, uploadBytes } from "firebase/storage";




function AssComm () {
  
    const [file,setFile] = useState(null)
    const [msg,setMsg] = useState(null)
    const [content, setContent] = useState('A');

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


    function handleOpenButton () {
      if(content == 'A'){
        axios.get('http://localhost:8000/filesComm')
        .then(res =>{
          const filepath = res.data;
          console.log(filepath[0]);
          const {name,path} = filepath[0];
        window.open(path);
        }
        )  
      }
      else if(content == 'B'){
        axios.get('http://localhost:8000/filesComm')
        .then(res =>{
          const filepath = res.data;
          console.log(filepath[1]);
          const {name,path} = filepath[1];
        window.open(path);
        }
        )  
      }
      else if(content == 'C'){
        axios.get('http://localhost:8000/filesComm')
        .then(res =>{
          const filepath = res.data;
          console.log(filepath[2]);
          const {name,path} = filepath[2];
        window.open(path);
        }
        )  
      }

    }
    
    function handleDownload  ()  {

    }
    function handleContent (newContent) {
          setContent(newContent);
        }
    function handlefile(event)
        {
        setFile(event.target.files[0])
        console.log(event.target.files[0])
        }  


   async function handleUpload(event)
    {
      if(!file){
        setMsg("No File Selected")
        console.log("No file Selected")
        return;
      }
      setMsg("Uploading...")
      const FileRef = ref(storage, `AssignmentsComm/${file.name}`)
      uploadBytes(FileRef,file)

      //const filedata = {"ID":"6000",
      //"filepath":file.name
     // }

 
      
      /*await fetch('http://localhost:8000/files',
        {
          method: "POST",  
          body: {filedata},
          headers:{
            "Content-type":"application/json"
            }
          }
          )*/
      
    //    console.log(filedata)
   // await axios.post('http://localhost:8001/Ass', {filedata} )
     .then(
         (result) => {
         //   file.isUploading = false;
           //  setFile([...file,file])
        //   console.log('success',result)
            //console.log(file.name)
           setMsg("Upload Successful")
        }
        )
       .catch(error => {
        setMsg("Upload Failed")
        console.log("erroor",error)
          }
        )
      }
    
    return ( 

      <div className='Assignment'>
       
        
        <div className="AssNav">     
    <ul>
      <li><a href="#" onClick = {() =>{handleContent('A')}}>Assignemnt 1</a></li>
      <br/>
      <br/>
      <li><a href="#" onClick = {() =>{handleContent('B')}}>Assignemnt 2</a></li>
      <br/>
      <br/>
      <li><a href="#" onClick = {() =>{handleContent('C')}}>Assignemnt 3</a></li>
      <br/>
      <br/>
      <li><a href="#"onClick = {() =>{handleContent('D')}}>Assignemnt 4</a></li>
      <br/>
      <br/>
    </ul>
    </div> 
    
        {content == 'A'? (
          <div className="box">
            <h1>Communication Systems</h1>
            <p>This is the content of Ass1.</p>
            <br/>
            <button onClick={handleOpenButton}>Open Assignment</button>
            
          </div>
          
        ) : content =='B'?  (
                <div className="box">
            <h1>Communication Systems</h1>
            <p>This is the content of Ass2.</p>
            <br/>
            <button onClick={handleOpenButton}>Open Assignment</button>
            
          </div>
         )  :  (
          <div className="box">
           <h1>Communication Systems</h1>
            <p>This is the content of Ass3.</p>
            <br/>
            <button onClick={handleOpenButton}>Open Assignment</button>
            
             </div>
          )
        }
     
   
        <div className="box">
        
        
        <input type="file" name="file" onChange={handlefile}/>
        <br/>
        <button onClick={handleUpload} >Upload</button>
        <br/>
        {msg && <span>{msg}</span>}
        </div>
        </div>
       
    )
}
 
export default AssComm;