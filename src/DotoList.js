export default function DotoList(props){
    if(props.isCompleted){
        return(<li>{props.name}+{'completd'}</li>);
    }else{
        return(<li>{props.name}</li>);
    }
}