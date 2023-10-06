export default function UserComponnents(props){
    const list =props.list.map((i)=>(<li>{i.name}<span></span>{i.email}</li>))
    return(<ul>{list}</ul>);
}