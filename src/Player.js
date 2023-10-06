export default function Player(props){
    const list=props.player.map(p=>(<li>{p}</li>));
    return(<ul>{list}</ul>);
}