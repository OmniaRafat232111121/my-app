class Items extends React.Component{

    render(){
        const {items}=this.props;
        const itemList=items.map((item)=>{
            return(
                <div>
            {ite}
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