import React from "react"
function Home(){
    return(
        <div>
            <p>
                Enter name:
            </p>
            <input className="input" type='text' placeholder="Name..."></input>
            <button>Send</button>
        </div>
    )
}
export default Home;