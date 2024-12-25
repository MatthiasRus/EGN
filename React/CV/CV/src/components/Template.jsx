export default function Template(props){
    return(
        <>
         <h1>
            Your data
        </h1>
        <p>
            {JSON.stringify(props.data)}
        </p>
        </>
    ) 
}