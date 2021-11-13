import { useEffect, useState } from "react";

const useManageOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://nameless-journey-27300.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    return [orders, setOrders];
}
export default useManageOrder;