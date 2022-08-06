import {useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ImageComponent(){
    const divRef = useRef(null);

    useEffect(() => {
        gsap.from('.bg', { opacity: 0, duration: 1, y: -200, transform:'scale(2)' });
        gsap.to('.bg', {opacity: 1, duration: 1, y: 0, transform:'scale(1)'})
    }, [])
    return <div className="bg" ref={divRef}></div>
}