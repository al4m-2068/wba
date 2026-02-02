import { useState } from "react"
import { prList } from "../../../data/products"
import { NormalButton, DisabledButton } from "../../Button/Buttons"
import "../Sections.css"

export function ProductItem({product}){
    const [counter, setCounter] = useState(0)
    return(
        <div className="border flex flex-col justify-end gap-6 overflow-hidden rounded-[30px]">
            <img src={product.image} alt="" />
            <div className="flex flex-col px-7">
                <h1 className="font-bold text-3xl">{product.prName}</h1>
                <h2>{product.price}</h2>
            </div>
            <div className="w-full flex items-center justify-between pb-6 px-7">
                <span className="flex items-center gap-2">
                    <button className="rounded-full cursor-pointer w-8 h-8 flex items-center justify-center border hover:bg-black hover:text-white transition-colors duration-100" onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>-</button>
                    <p className="text-center text-lg font-bold w-5 max-w-5">{counter}</p>
                    <button className="rounded-full cursor-pointer w-8 h-8 flex items-center justify-center border hover:bg-black hover:text-white transition-colors duration-100" onClick={() => setCounter(counter + 1)}>+</button>
                </span>
                {product.stock ? 
                    <NormalButton teks={"Add"}/> :
                    <DisabledButton teks={"Out of Stock"}/>
                }
            </div>
        </div>
    )
}

export default function ProductList(){
    return(
        <div className="grid grid-cols-4 gap-5 p-10">
            {prList.map((product) => (
                <ProductItem key={product.prName} product={product} />
            ))}
        </div>
    )
}