const Section = ({children, title}) => {
    return ( 
        <section className="w-full h-screen" >
            <h1 className="text-6xl text-center my-10 text-purple-400">{title}</h1>
            {
                children
            }
        </section>
     );
}
 
export default Section;