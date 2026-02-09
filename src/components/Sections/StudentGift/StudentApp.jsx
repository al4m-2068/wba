import { useImmerReducer } from "use-immer";
import StudentForm from "./StudentForm";
import StudentList from "./StudentUtils";

let id = 0;
function studentReducer(studentData, action){
    if (action.event === 'Tambah'){
        studentData.push({
            id: id++,
            nama: action.nama,
            umur: action.umur,
            kelas: action.kelas
        })
    } else if (action.event === 'Ganti'){
        const index = studentData.findIndex(data => data.id === action.id)
        studentData[index].nama = action.nama
        studentData[index].umur = action.umur
        studentData[index].kelas = action.kelas
    } else if (action.event === 'Hapus'){
        const index = studentData.findIndex(data => data.id === action.id)
        studentData.splice(index, 1)
    }
}

const initialStudent = [
    {id: id++, nama: 'Albar', umur: 16, kelas: '10A'}
]

export default function StudentGift(){
    const [studentData, dispatch] = useImmerReducer(studentReducer, initialStudent)
    
    function hListAdd(studentData){
        dispatch({
            event: 'Tambah',
            nama: studentData.nama,
            umur: studentData.umur,
            kelas: studentData.kelas
        })
    }
    function hListChange(studentData){
        dispatch({
            event: 'Ganti',
            id: studentData.id,
            nama: studentData.nama,
            umur: studentData.umur,
            kelas: studentData.kelas
        })
    }
    function hListDelete(studentData){
        dispatch({
            event: 'Hapus',
            id: studentData.id
        })
    }

    return(
        <div>
            <h1>Gift Your Student</h1>
            <StudentForm submitItem={hListAdd}/>
            <StudentList studentData={studentData} onGanti={hListChange} onHapus={hListDelete} />
        </div>
    )
} 
