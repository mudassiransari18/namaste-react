import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {
    
    const btnClick = () => {
        isVisible ? setIsVisible(false) : setIsVisible(true);
    }

    return (
        <div className="border border-black">
            <h2 className="font-bold text-2xl">{ title }</h2>
            <button className="" onClick={ () => btnClick() }>{ isVisible ? "Hide" : "Show" }</button>
            { isVisible && <p>{ description }</p>}
        </div>
    )
}

export default Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("");
    
    const btnClickParent = (event, section) => {
        event === true ? setVisibleSection(section) : setVisibleSection("")
    }
    return (
        <>
            <h1 className="text-2xl">Instamart</h1>
            <Section isVisible={visibleSection === "About"} setIsVisible={ (event) => btnClickParent(event, "About")} title={"About Instamart"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"} />
            <Section isVisible={visibleSection === "Team"} setIsVisible={ (event) => btnClickParent(event, "Team")} title={"Team Instamart"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"} />
            <Section isVisible={visibleSection === "Careers"} setIsVisible={ (event) => btnClickParent(event, "Careers")} title={"Careers"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"} />
        </>        
    );
}