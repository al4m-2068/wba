import { useImmer } from "use-immer";
import { useState } from "react";

export function Student({studentData, onHapus, onGanti}){
    const [ngedit, setNgedit] = useState(false)
    let data;

    function hChangeNama(e){
        const newData = {...studentData, nama: e.target.value}
        onGanti(newData)
    }
    function hChangeUmur(e){
        const newData = {...studentData, umur: e.target.value}
        onGanti(newData)
    }
    function hChangeKelas(e){
        const newData = {...studentData, kelas: e.target.value}
        onGanti(newData)
    }


    if (!ngedit) {
        data = (
            <>
            <td>{studentData.nama}</td>
            <td>{studentData.umur}</td>
            <td>{studentData.kelas}</td>
            </>
        )
    } else {
        data = (
            <>
            <td><input type="text" value={studentData.nama} onChange={hChangeNama} /></td>
            <td><input type="number" value={studentData.umur} onChange={hChangeUmur} /></td>
            <td><input type="text" value={studentData.kelas} onChange={hChangeKelas} /></td>
            </>
        )
    }
    return(
        <>
        <td>{studentData.id}</td>
        {data}
        <td>
            {ngedit ? <button onClick={() => setNgedit(false)}>Save</button> : <button onClick={() => setNgedit(true)}>Edit</button>}
            <button onClick={() => onHapus(studentData)}>Delete</button>
        </td>
        </>
    )
}

export default function StudentList({studentData, onHapus, onGanti}){
    return(
        <table>
            <tbody>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Class</th>
                    <th>Actions</th>
                </tr>
                {studentData.map((student) => (
                    <tr key={student.id}>
                        <Student studentData={student} onGanti={onGanti} onHapus={onHapus}/>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}