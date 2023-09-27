import React from 'react'

function Loader() {
    return (
        <div id="cover" className="bg-cover bg-center">
            <img className="h-screen w-screen" src={window.location.origin + '/for_loader.png'}  />
        </div>
    )
}

export default Loader