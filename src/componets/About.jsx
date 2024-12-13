import Section from "../Layouts/Section";

const About = () => {
    return ( 
        <Section title={"About Me"}>
             <div className="flex flex-col md:flex-row overflow-hidden">
                <div className="bg-slate-500 w-100 h-100 rounded-xl overflow-hidden mx-8 basis-1/2 ">
                    <img className="object-cover h-full max-h-none" src="/11zon_cropped.jpeg" alt="" />
                </div>
                <div className="text-pretty basis-1/2 p-10 md:px-10 ">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ratione mollitia deleniti illum amet sed, obcaecati veniam incidunt, iusto quasi beatae voluptate minima laboriosam laborum earum vitae officiis assumenda temporibus magni, fugiat ullam. Ducimus officiissdfasdfsadfad fad modi amet ea, nulla sed voluptatem, quos totam omnis necessitatibus error perferendis esse a vero.</p>
                </div>
            </div>
        </Section>
     );
}

export default About;