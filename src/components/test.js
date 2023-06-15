import { useEffect, useState } from "react";

const Backend = ()=>{
    const [test, setTest] = useState(null);
    useEffect(() => {
        getTest();
      }, []);

    async function getTest() {
        const resTest = await fetch(
          "http://192.168.1.11:3000/"
        );
        const data = await resTest.json()
        console.log(data.data.name)
        setTest(data.data)
    }
    
    return (
        <div>
            <p>name :{test?.name} </p>
            <p>age :{test?.age} </p>
        </div>
    )
}

export default Backend