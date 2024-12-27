export default function SideBar({handleClick}){
   
    
    return(
        <div className="buttons">
        <h1>
           CV
       </h1>

       <button onClick={handleClick} >Contact</button>
       <button onClick={handleClick}>Education</button>
       <button onClick={handleClick}>Experience</button>
       <button onClick={handleClick}>Awards</button>
       <button onClick={handleClick}>Preview</button>
       </div>
    )
}

