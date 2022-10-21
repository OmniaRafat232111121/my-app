class Items extends React.Component{

    render(){
        const {items}=this.props;
        const itemList=items.map((it)) 
        return(
       <>
       <h1>{itemList}</h1>
       </>
        );
    }
}