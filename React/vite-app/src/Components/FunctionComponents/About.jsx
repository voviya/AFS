const About=(props)=>
{
    var styling={
        fontSize:"20px",
       textAlign:"center"
    }
    return (
        <section>
        <h4 style={styling}>Learning Props</h4>
        <h2>This is About Page.</h2>
        <p >This is {props.college} College.</p>
        <p> Other Colleges : {props.clg1},{props.clg2}</p>
        </section>
    )
}
export default About;