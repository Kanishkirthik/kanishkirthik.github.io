export default function FeedBack(props){
    if(props.ispositive){
     return(<h1 style={{color:"green"}}>{props.mesage}</h1>);
    }else{
        return(<h1 style={{color:"red"}}>{props.mesage}</h1>);
    }
}