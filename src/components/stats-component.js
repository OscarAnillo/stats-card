import {useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function StatsComponent(){
    const divRef =useRef(null);

    useEffect(() => {
        gsap.from('.stats', {
            y: 300,
            opacity: 0,
            duration: 1,
            ease: 'bounce',
        })
        gsap.to('.stats', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'bounce',
        })
    }, []);

    return (
        <div className="stats" ref={divRef}> 
            <div>
                <h2>10k+</h2>
                <p>Companies</p>
            </div>
            <div>
                <h2>314</h2>
                <p>Templates</p>
            </div>
            <div>
                <h2>12M+</h2>
                <p>Queries</p>
            </div>
        </div>
    )
}