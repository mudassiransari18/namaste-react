import { useEffect, useState } from "react";

export default useOnline = () => {
    
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const setOnline = () => {
            setIsOnline(true);
        }
        const setOffline = () => {
            setIsOnline(false);
        }

        window.addEventListener("online", setOnline);
        window.addEventListener("offline", setOffline);

        return () => {
            window.removeEventListener("online", setOnline);
            window.removeEventListener("offline", setOffline);
        }
    }, []);
    return isOnline;
}