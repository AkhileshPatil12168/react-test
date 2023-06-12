import { useState, useEffect } from "react"

const useOnline = () => {
    const [isOnline, setOnline] = useState(true)
    useEffect(() => {

        const handelOnline = () => {
            setOnline(true)
        }
        const handelOffline = () => {
            setOnline(false)
        }
        window.addEventListener("online", () => {
            setOnline(true)
        })
        window.addEventListener("offline", () => {
            setOnline(false)
        })

        return () => {
            window.removeEventListener("online", handelOnline)
            window.removeEventListener("offline", handelOffline)
        }
    }, [])
    return isOnline

}
export default useOnline