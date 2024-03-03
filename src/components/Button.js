const button = (props) => {
    
    
    return (
        <>
            <button style={{
                color: props.fontcol,
                backgroundColor: props.bgcol,
                borderRadius: props.brds,
                padding : props.pd,
                fontWeight : props.fw
            }}>
                {props.children}
            </button>
        </>
    )
}
export default button;