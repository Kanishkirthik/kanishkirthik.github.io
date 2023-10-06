export default function ShopingCart(props){
    const list=props.products.map((i)=>(<li key={i.id}><b>{i.name}</b><span>{i.prize}</span></li>));
    console.log(list);
    return(<ul>{list}</ul>);
}