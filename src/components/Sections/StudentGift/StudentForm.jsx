import { useContext } from "react"
import { useImmer } from "use-immer"
import { StudentDispatch } from "./StudentContext"

export default function StudentForm(){
    const dispatch = useContext(StudentDispatch)
    const [student, setStudent] = useImmer({
        nama: '',
        umur: '',
        kelas: ''
    })

    function hNama(e){
        setStudent((draft) => {draft.nama = e.target.value})
    }
    function hUmur(e){
        setStudent((draft) => {draft.umur = e.target.value})
    }
    function hKelas(e){
        setStudent((draft) => {draft.kelas = e.target.value})
    }
    function hAdd(e){
        e.preventDefault();
        dispatch({
            type: 'Tambah',
            nama: student.nama,
            umur: student.umur,
            kelas: student.kelas
        })
        setStudent({
            nama: '',
            umur: '',
            kelas: ''
        })
    }

    return(
        <form>
            <label>Nama</label>
            <input type="text" onChange={hNama} value={student.nama} />
            <label>Umur</label>
            <input type="number" onChange={hUmur} value={student.umur} />
            <label>Kelas</label>
            <input type="text" onChange={hKelas} value={student.kelas} />
            <button onClick={hAdd}>Add Student</button>
        </form>
    )
} 