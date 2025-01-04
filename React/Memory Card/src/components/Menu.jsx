export default function Menu({setIsModalOpen}) {
  function handleClick(){
    setIsModalOpen(true)
  }
  return (
    <button
          className="menu text-center"
          onClick={handleClick}>
          <i className="fa fa-bars" 
          style={{fontSize:"30px"}}>
            </i>
    </button>
  )
}
