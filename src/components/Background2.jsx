import React, {useEffect, useState} from 'react';
import {useSpring, animated} from "@react-spring/web";

export const Background = () => {
    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    })
    return (
        <animated.div style={{
            ...props,
            backgroundImage: 'url(bg1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: -1
        }}/>
    );
};
