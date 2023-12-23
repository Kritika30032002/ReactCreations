
const ToggleButton = ({setOpen}) => {
  return (
    <>

    <button >
    
    <input type="checkbox" id="checkbox"/>
    <label onClick={()=> setOpen((prev)=>!prev)} htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
    </label>


    </button>
    
    </>
  )
}

export default ToggleButton