export default function(props){
   return(
    <>
     {props.isloading?<h1>loading</h1>:<h1>not loading</h1>}
    </>
   );
}