import Online from "./Online";
import Offline from "./Offline";
export default function UserStatus(props){
  
    if(props.isOnline=='online'){
        return(<Online/>);
    }
    else{
        return(<Offline/>);
    }
}
 