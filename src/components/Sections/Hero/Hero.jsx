import "../Sections.css"

export default function Home(){
    return(
        <section id="home" className="w-full h-screen flex flex-col items-center justify-center text-center gap-5 bg-[url('/src/assets/images/abstract.png')] bg-no-repeat bg-cover bg-center">
            <h1 className="text-6xl font-bold text-trim mb-5">The World's No. 1<br/>Water Bottle Apprentice</h1>
            <h2 className="w-[30%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum, quidem ab nobis maiores saepe fugit inventore.</h2>
            <a href="#products" className="rounded-full px-5 py-4 text-trim border hover:bg-white hover:text-black transition-colors duration-200">Explore our Product</a>
        </section>
    )
}