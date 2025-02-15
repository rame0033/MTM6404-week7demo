function CustomBox(props){
    const style ={
        backgroundColor: props.backgroundColor ?? "white",
        color: props.fontColor ?? "black",
    };
    return(
        <div className="box" style={style}>
            Box
        </div>
    )

}

function CustomButton(props){
    const variant = props.variant ?? "primary";
    const className=`btn btn-${variant}
    ${props.isLarge ? "btn-lg" : ""}
    ` ;
    return <button className={className}>Click me!</button>
}

function App(){
    return (
        <>
        <CustomBox backgroundColor="lightblue" fontColor="darkblue" />
        <CustomButton />;
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)