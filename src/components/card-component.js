import ImageComponent from "./image-component";
import TextComponent from "./text-component";

export default function CardContainer(){
    return (
        <div className="card row">
            <ImageComponent />
            <div className="card-container">
                <TextComponent />
            </div>
        </div>
    )
}