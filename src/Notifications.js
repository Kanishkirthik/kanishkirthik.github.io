export default function Notifications(props){
    
    if(props.message){
        return(<h1>{props.message}</h1>);
    }else{
        return(<h1>no notifcation cuurently</h1>);
    }
}