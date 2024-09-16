import React from 'react'
import { Star } from 'lucide-react'
import Navbar from './Navbar'

function About() {
    const img = "https://1.gravatar.com/avatar/7f8c059f6809fd4d32d6462c2e8f34d7a30365f3ffc003d9147e5171c4f83e65?s=96&d=identicon&r=G"
    return (
        <>
        <Navbar/>
            <section className='about'>
            <h1>About</h1>
            <hr />
            <div className='post-content '>
            <p> Hisar Times News हिसार,हरियाणा तथा देश-विदेश की ख़बरों के लिए तैयार किया गया वेब पोर्टल है  इसमें हमारी टीम की तरफ से यह प्राथमिकता रहेगी की पाठक तक सही और सटीक जानकारी पहुंचे!</p>
            <span>धन्यवाद</span>
            <p>पुनीत वधवा</p>
            <span>एडिटर,हिसार टाइम्स </span>
            <p>123456798090</p>
            <p>123456798090</p>
           <div className='flex'>
           <button className='flex'><Star />Like</button>
           <img src={img} alt="" height={30} />
           </div>
            </div>
         </section>
        </>
    )
}

export default About
