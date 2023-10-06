export default function ProductLists(props){
    const list=props.list.filter(i=>i.prize<10);
   
   return(<ul>{list}</ul>);
}