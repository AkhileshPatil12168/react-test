import useOnline from "../../utils/useOnline";



const Cart = () => {
    const onlineStatus = useOnline()
    if (!onlineStatus) {
        return (<h1>you are offline</h1>)
    }
    return (<div><h2>this is Cart</h2></div>)
}

export default Cart

