import { useImmer } from "use-immer"
import "../../../index.css"
import { NormalButton } from "../../Button/Buttons"

export function OrderGift(){
    const [person, setPerson] = useImmer({
        name: "",
        type: "Xander"
    })
    const [list, setList] = useImmer([])

    function handleChangeName(e){
        setPerson((person) => {person.name = e.target.value})
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
            <div className="w-full p-10">
                <form className="flex flex-col">
                    <h1>Gift a Bottle</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ipsa?</h2>
                    <span className="flex">
                        <input type="text" value={person.name} onChange={handleChangeName} className="w-full border"/>
                        <select value={person.type} onChange={handleChangeType}>
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
            <div className="w-full">
                <table>
                    <tbody>
                        <tr>
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