import "../Sections.css"

export default function Footer(){
    return(
        <footer className="h-[32vh] w-full relative">
            <div className="h-[32vh] w-full flex flex-col justify-between items-center bg-black text-white/16 fixed bottom-0 -z-10 p-10">
                <h2>Copyright &copy; 2026 All rights reserved.</h2>
                <h1 className="w-max text-trim text-[10vw] font-bold text-center">WaterBottleApprentice</h1>
            </div>
        </footer>
    )
}