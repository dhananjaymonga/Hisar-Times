import React, { useContext, useState } from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { inputContext } from './context/InputContext.jsx'
function Navbar() {
    const {inputValue, setInputValue} = useContext(inputContext)
    const [search ,setSearch] = useState(false)
    const nav = ["Home", "About", "TopNews", "Politics", "Education", "Health", "Lifestyle", "Automobile", "Bollywood", "Sport", "Business", 'Gadgets']
    const imgSrc = "https://hisartimesnews.com/wp-content/uploads/2024/01/cropped-the-hisar-copy.png?w=100"
    return (
        <>
        <nav className='flex'>
            <ul className='flex'>
            {
                nav.map((n, i) => {
                    return (
                         <li key={i}><Link to={`/${n}`}>{n}</Link></li>
                    )
                })
            }
            </ul>
           <span id='search' onClick={()=>{search?setSearch(false): setSearch(true)}}><Search/></span>
        </nav>
        <div className={search ? "search-box" : "hide"}>
        <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
        </div>
        <section className='hisar-times'>
            <img src={imgSrc} alt="hisar times news logo" />
            <h1>HISAR TIMES NEWS</h1>
            <p>आवाज़ आपकी</p>
        </section>
      </>
    )
}

export default Navbar
