import "../../index.css";

export function NormalButton({tujuan, teks}){
    return(
        <a className="rounded-full px-5 py-4 text-trim border hover:bg-black hover:text-white transition-colors duration-200" href={tujuan}>{teks}</a>
    )
}
export function DisabledButton({teks}){
    return(
        <a className="rounded-full px-5 py-4 text-trim border bg-black text-white pointer-events-none opacity-24">{teks}</a>
    )
}