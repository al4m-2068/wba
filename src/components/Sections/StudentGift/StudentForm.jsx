import { useImmer } from "use-immer"

export default function StudentForm({submitItem}){
    const [siswa, setSiswa] = useImmer({
        nama: '',
        umur: '',
        kelas: ''
    })

    function hNama(e){
        setSiswa((draft) => {draft.nama = e.target.value})
    }
    function hUmur(e){
        setSiswa((draft) => {draft.umur = e.target.value})
    }
    function hKelas(e){
        setSiswa((draft) => {draft.kelas = e.target.value})
    }
    function hAdd(e){
        e.preventDefault();
        submitItem(siswa)
        setSiswa({
            nama: '',
            umur: '',
            kelas: ''
        })
    }

    return(
        <form>
            <label>Nama</label>
            <input type="text" onChange={hNama} value={siswa.nama} />
            <label>Umur</label>
            <input type="number" onChange={hUmur} value={siswa.umur} />
            <label>Kelas</label>
            <input type="text" onChange={hKelas} value={siswa.kelas} />
            <button onClick={hAdd}>Add Student</button>
        </form>
    )
} 