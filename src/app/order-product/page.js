"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router = useRouter()
    const plaseOrderHandler = () => {
        console.log("order placed");
        router.push("/")
    }
    return(
        <div>
            <p>To place your order , Please click the button below</p>
            <button onClick={plaseOrderHandler} className="bg-teal-400 p-2 rounded text-center">Place Order</button>
        </div>
    )
}