import './header.css'
export default function Header(){
    let fruits = ['banana','apple','pineapple']
    return(
        <>
            <ul>
                {
                    fruits.map((items, index)=> (
                        <li>{items}</li>
                    ))
                }
            </ul>
            <p>header</p>
        </>
    )
}