import { useImmerReducer } from "use-immer";
import StudentForm from "./StudentForm";
import StudentList from "./StudentUtils";
import { StudentContext, StudentDispatch } from "./StudentContext";

let id = 0;
function studentReducer(studentData, action){
    if (action.type === 'Tambah'){
        studentData.push({
            id: id++,
            nama: action.nama,
            umur: action.umur,
            kelas: action.kelas
        })
    } else if (action.type === 'Ganti'){
        const index = studentData.findIndex(data => data.id === action.id)
        studentData[index].nama = action.nama
        studentData[index].umur = action.umur
        studentData[index].kelas = action.kelas
    } else if (action.type === 'Hapus'){
        const index = studentData.findIndex(data => data.id === action.id)
        studentData.splice(index, 1)
    }
}

const initialStudent = [
    {id: id++, nama: 'Albar', umur: 16, kelas: '10A'}
]

export default function StudentGift(){
    const [student, dispatch] = useImmerReducer(studentReducer, initialStudent)
    return(
        <div>
            <StudentContext.Provider value={student}>
                <StudentDispatch.Provider value={dispatch}>
                    <h1>Gift Your Student</h1>
                    <StudentForm />
                    <StudentList />
                </StudentDispatch.Provider>
            </StudentContext.Provider>
        </div>
    )
} 
