import { useImmer } from "use-immer"
import { NormalButton } from "../../Button/Buttons"
import "../../../index.css"
import { useState } from "react"

export function OrderGift(){
    const [person, setPerson] = useImmer({
        name: "",
        type: "Xander"
    })
    const [list, setList] = useImmer([])

    function handleChangeName(e){
        setPerson({...person, name: e.target.value})
        setPerson((person /*any name*/) => {person.name = e.target.value})
    }
    function handleChangeType(e){
        setPerson((person) => {person.type = e.target.value})
    }
    function handleAdd(e){
        e.preventDefault()
        setList(list => {list.push(person)})
        setPerson((person) => {person.name = ""})
    }

    return(
        <section className="h-screen flex">
            <div className="w-full p-10 h-full flex flex-col justify-end bg-[url('/images/abstract.png')]">
                <form className="w-full flex flex-col p-7 bg-white rounded-[30px] gap-3">
                    <h1 className="text-trim text-3xl font-bold">Gift a Bottle</h1>
                    <h2 className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ipsa?</h2>
                    <span className="flex gap-5 ">
                        <input type="text" placeholder="Friend's Name" value={person.name} onChange={handleChangeName} className="px-5 rounded-full w-full border outline-none border-black/50 focus:border-black"/>
                        <select className="border rounded-full px-5 border-black/50" value={person.type} onChange={handleChangeType}>
                            <option>Xander</option>
                            <option>Youkoso</option>
                            <option>Gouache</option>
                            <option>Zenzai</option>
                            <option>Glance</option>
                            <option>Droid</option>
                            <option>Flexi</option>
                            <option>Intona</option>
                        </select>
                        <NormalButton teks={'Add'} click={handleAdd}/>
                    </span>
                </form>
            </div>
            <div className="w-full p-10">
                <table className="w-full text-left">
                    <tbody>
                        <tr className="border-b">
                            <th>No.</th>
                            <th>Name</th>
                            <th>Type</th>
                        </tr>
                        {list.map((person, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{person.name}</td>
                                <td>{person.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}