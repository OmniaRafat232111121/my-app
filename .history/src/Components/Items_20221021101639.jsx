class Items extends React.Component{

    render(){
        const {items}=this.props;
        const itemList=items 
        return(
       <>
       <h1>{itemList}</h1>
       </>
        );
    }
}