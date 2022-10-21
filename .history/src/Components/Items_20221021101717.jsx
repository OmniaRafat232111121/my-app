class Items extends React.Component{

    render(){
        const {items}=this.props;
        const itemList=items.map((item)=>{
            return(
                <div>
            {item.id}
            {item.id}
            {item.id}
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