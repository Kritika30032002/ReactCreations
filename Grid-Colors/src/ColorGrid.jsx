import ColorBox from './ColorBox'
import './ColorGrid.css'

export default function ColorGrid () {
    return (
        <>
            <div className="colorgrid row">
                <div className="col">
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                </div>
                <div className="col">
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                </div>
                <div className="col">
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                </div>
                <div className="col">
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                </div>
                <div className="col">
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                    <ColorBox />
                </div>
            </div>
        </>
    );
}