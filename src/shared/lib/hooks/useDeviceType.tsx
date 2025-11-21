import { useState, useEffect, useRef } from "react";

type DeviceType = 'mobile' | 'tablet' | 'desctop';

function getDeviceType(width: number): DeviceType {
    if (width < 1024) return 'mobile';
    
    return 'desctop';
}

function useDeviceType(): DeviceType {
    
    const [deviceType, setDeviceType] = useState<DeviceType>(() => {
        if (typeof window !== 'undefined') {
            return getDeviceType(window.innerWidth);
        }
        return 'desctop'; // 
    });

    const observerRef = useRef<ResizeObserver | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return; 

        observerRef.current = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width } = entry.contentRect;
                const newDeviceType = getDeviceType(width);
                setDeviceType((prev) => {
                    if (prev !== newDeviceType) {
                        console.log(`Device type changed: ${prev} -> ${newDeviceType}`); // Для отладки
                        return newDeviceType;
                    }
                    return prev;
                });
            }
        });

        
        observerRef.current.observe(document.body);

        
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return deviceType;
}

export default useDeviceType;