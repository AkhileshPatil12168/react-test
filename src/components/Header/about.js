import useOnline from "../../utils/useOnline";




const About = () => {
    const onlineStatus = useOnline()
    if (!onlineStatus) {
        return (<h1>you are offline</h1>)
    }
    return (<div><h2>this is about</h2></div>)
}

export default About

