import "./Services.scss"
import {motion} from "framer-motion"


const Services = () => {
  return (
    <motion.div className="services">
        <motion.div className="textContainer">
            <p>I focus on Learning new Technologies in the Field
                <br/> and move forward
            </p>
            <hr/>
        </motion.div>

        <motion.div className="titleContainer">

            <div className="title">
                <img src="/people.webp" alt="" className="src" />
                <h1>
                    <b>Accurate</b> Designs
                </h1>
            </div>
            <div className="title">
                <h1>
                <b>For yours </b>Company.
                </h1>
                <button>SERVICES I PROVIDE..</button>
            </div>
        </motion.div>
        <motion.div className="listContainer">

            <div className="box">
                <h2>AUTOCAD</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Maxime deleniti alias culpa sunt, ut accusantium adipisci
                      assumenda quaerat voluptate qui quo eveniet harum. Minima
                       voluptate explicabo ipsa rerum error, amet adipisci soluta
                        accusamus velit, illum fugiat aperiam quia?

                </p>
                <button>Go</button>

            </div>
            <div className="box">
                <h2>AUTOCAD</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Maxime deleniti alias culpa sunt, ut accusantium adipisci
                      assumenda quaerat voluptate qui quo eveniet harum. Minima
                       voluptate explicabo ipsa rerum error, amet adipisci soluta
                        accusamus velit, illum fugiat aperiam quia?

                </p>
                <button>Go</button>

            </div>
            <div className="box">
                <h2>AUTOCAD</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Maxime deleniti alias culpa sunt, ut accusantium adipisci
                      assumenda quaerat voluptate qui quo eveniet harum. Minima
                       voluptate explicabo ipsa rerum error, amet adipisci soluta
                        accusamus velit, illum fugiat aperiam quia?

                </p>
                <button>Go</button>

            </div>
            <div className="box">
                <h2>AUTOCAD</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Maxime deleniti alias culpa sunt, ut accusantium adipisci
                      assumenda quaerat voluptate qui quo eveniet harum. Minima
                       voluptate explicabo ipsa rerum error, amet adipisci soluta
                        accusamus velit, illum fugiat aperiam quia?

                </p>
                <button>Go</button>

            </div>

        </motion.div>
    </motion.div>
  )
}

export default Services