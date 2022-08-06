import StatsComponent from "./stats-component";

export default function TextComponent(){
    return (
        <div className="text">
            <h2>Get <span>insights</span> that help your business grow.</h2>
            <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            <StatsComponent /   >
        </div>
    )
}