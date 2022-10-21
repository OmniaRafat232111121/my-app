import Rea
class Items extends React.Component{

    render(){
        const {items}=this.props;
        const itemList=items.map((item)=>{
            return(
                <div>
            {item.id}
            {item.name}
            {item.age}
                </div>
            )
        }) 
        return(
       <>
       <h1>{itemList}</h1>
       </>
        );
    }
}