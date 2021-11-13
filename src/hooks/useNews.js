import { useEffect, useState } from "react";

const useNews = () => {
    const [newses, setNewses] = useState([]);
    useEffect(() => {
        fetch('https://nameless-journey-27300.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setNewses(data))
    }, []);
    return [newses, setNewses];
}
export default useNews;