import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Error = ({setError}) =>{
    
    return(
        <div style={{backgroundColor:"red",width:"350px",padding:"10px",marginTop:"10px", display:"flex",justifyContent:"space-between"}}>
            <h2 style={{color:"white"}}>Error:Please Enter the Task</h2>
            <FontAwesomeIcon style={{color:"white",cursor:"pointer"}} onClick={() =>setError(false)} icon={faClose}></FontAwesomeIcon>
        </div>
    )
}
export default Error