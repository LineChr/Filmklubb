import { useEffect, useState } from "react";
import Image from "next/image"

export default function ThemeToggle() {

const [lightmode, setLightmode] = useState(() => {
    return localStorage.getItem("theme") === "light";
});

useEffect(() => {
    if (lightmode) {
        document.body.classList.add("light")
        localStorage.setItem("theme", "light")
    }else {
        document.body.classList.remove("light")
        localStorage.removeItem("theme")
    }
}, [lightmode]);

    
    return(
        <button onClick={() => setLightmode(!lightmode)}>
            {lightmode ? 
            <Image src="/moon.png" alt="" width={20} height={20}/> 
            : 
            <Image src="/sun.png" alt="" width={20} height={20}/>
            }
                        
        </button>
    )
}