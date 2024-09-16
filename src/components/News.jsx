
import { Link } from 'react-router-dom'
import newsData from './data/mainNews.json'
import { useParams } from 'react-router-dom'
import { inputContext } from './context/InputContext'
import { useContext, useState } from 'react'
function News() {
    const { inputValue } = useContext(inputContext)
    const param = useParams()
    // let [newArr , setNewArr] = useState([])
    let newData = []


    newsData.forEach((n) => {
        let isPresent = false
        n.tittle.forEach(c => {
            if (c == param.N) {
                isPresent = true
            }
        })
        if (isPresent) {
            newData.push(n)
        }
    })

    if (param.N == "Home" || param.N == undefined) {
        newData.push(...newsData)
    }

    let searchData = null

    if (inputValue.trim() != '') {
        searchData = newData.filter(d => {
            if (d.engDesc.toLowerCase().includes(inputValue.toLowerCase())) return true;
            return false
        })
    }
    return (
        <div className='news'>
            {
                inputValue.trim() != "" ? <>
                {
                    searchData.map((n, i) => {
                        return (
                            <div key={i} className='news-box flex' >
                                <img src={n.img} alt="" />
                                <div className='flex link'>{n.tittle.map((t, j) => <Link to={`/${t}`} key={j}>{t}</Link>)}</div>
                                <h2><Link to={`/main/${n.engDesc}`} style={{ color: "black" }}>{n.desc}</Link></h2>
                                <span>{n.date}</span>
                                <span>{n.comments}</span>
                            </div>
                        )
                    })
                }
                </> : <>
                {
                    newData.map((n, i) => {
                        return (
                            <div key={i} className='news-box flex' >
                                <img src={n.img} alt="" />
                                <div className='flex link'>{n.tittle.map((t, j) => <Link to={`/${t}`} key={j}>{t}</Link>)}</div>
                                <h2><Link to={`/main/${n.engDesc}`} style={{ color: "black" }}>{n.desc}</Link></h2>
                                <span>{n.date}</span>
                                <span>{n.comments}</span>
                            </div>
                        )
                    })
                }
                </>
            }
        </div>
    )
}

export default News
