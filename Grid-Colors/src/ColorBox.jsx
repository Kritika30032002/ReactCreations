import { useState } from "react";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'black',
    'white', 'grey', 'brown', 'cyan', 'magenta', 'lime', 'indigo', 'teal', 'maroon', 'navy',
    'olive', 'crimson', 'coral', 'gold', 'silver', 'violet', 'plum', 'tan', 'salmon', 'orchid',
    'khaki', 'ivory', 'indigo', 'hotpink', 'fuchsia', 'firebrick', 'darkgreen', 'darkblue']

const randNo = () => (Math.floor(Math.random() * colors.length) + 1)

export default function ColorBox() {
    let [color, setColor] = useState(colors[randNo()]);

    const change = () => {
        const randColor = colors[randNo()]
        setColor(randColor);
    }

    return (
        <>
            <div onClick={change} className="colorbox" style={{ backgroundColor: color, width: 100, height: 100 }}>
            </div>
        </>
    );
}