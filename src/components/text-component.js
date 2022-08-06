import {useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import StatsComponent from "./stats-component";

export default function TextComponent(){
    const titleRef = useRef(null);
    const paraRef = useRef(null);

    useEffect(() => {
        gsap.from('.h2', {
            opacity: 0,
            x: 100,
            duration: 1
        })
        gsap.to('.h2', {
            opacity: 1,
            x: 0,
            duration: 1
        })
        gsap.from('.p', {
            opacity: 0,
            x: -100,
            duration: 1
        })
        gsap.to('.p', {
            opacity: 1,
            x: 0,
            duration: 1
        })
    }, []);

    return (
        <div className="text">
            <h2 className="h2" ref={titleRef}>Get <span>insights</span> that help your business grow.</h2>
            <p className='p' ref={paraRef}>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
            <StatsComponent /   >
        </div>
    )
}