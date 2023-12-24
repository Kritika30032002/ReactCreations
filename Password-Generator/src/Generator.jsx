import React from "react";

function Generator(props){
    return(
        <>
            <div className='generate'>
                <input type="text" />
                <button>Copy</button>
                <div className='addons'>
                    <div id='len'>
                        <input type="range" min="8" max="16" id='size'/>
                        <label htmlFor="size">Length ({props.leng})</label>
                    </div>
                    <input type="checkbox" />Numbers
                    <input type="checkbox" />Characters
                </div>
            </div>
        </>
    );
}

export default Generator;