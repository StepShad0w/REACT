import React from "react"
export default function IntroSection(){
    // return(
    //     <section>
    //         <h1>Hello</h1>
    //         <h1>World</h1>
    //         <h1>!</h1>
    //     </section>
    // )
    const e = React.createElement
    return React.createElement("section", null, [e("h1",{className:"center",style:{color:"red"}, key:1}, "Hello"),React.createElement("h1",{className:"center", key: 2}, "World")])
}