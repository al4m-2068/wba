import { useContext, useState } from "react";
import { StudentContext, StudentDispatch } from "./StudentContext";

export function Student({studentData}){
    const dispatch = useContext(StudentDispatch)
    const [ngedit, setNgedit] = useState(false)
    let data;

    function hChangeNama(e){
        dispatch({
            ...studentData,
            type: 'Ganti',
            nama: e.target.value
        })
    }
    function hChangeUmur(e){
        dispatch({
            ...studentData,
            type: 'Ganti',
            umur: e.target.value
        })
    }
    function hChangeKelas(e){
        dispatch({
            ...studentData,
            type: 'Ganti',
            kelas: e.target.value
        })
    }
    function hDelete(e){
        dispatch({
            type: 'Hapus',
            id: e.id
        })
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
            <button onClick={hDelete}>Delete</button>
        </td>
        </>
    )
}

export default function StudentList(){
    const students = useContext(StudentContext)
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
                {students.map((student) => (
                    <tr key={student.id}>
                        <Student studentData={student}/>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}