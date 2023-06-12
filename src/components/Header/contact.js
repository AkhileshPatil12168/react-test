import useOnline from "../../utils/useOnline";

const Contact = () => {
    const onlineStatus = useOnline()
    if (!onlineStatus) {
        return (<h1>you are offline</h1>)
    }
    return (<div><h2>this is Contact</h2></div>)
}

export default Contact

