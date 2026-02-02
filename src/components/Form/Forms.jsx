export function NormalForm({children, teksTombol}){
    return(
        <form>
            {children}
            <button>{teksTombol}</button>
        </form>
    )
}