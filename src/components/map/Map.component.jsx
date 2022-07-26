import React from 'react'
import "../cards/Cards.style.css"
 const Map = ()=>{
return (
    <div className="cards">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229085.1309061755!2d78.05080907508027!3d26.214396021850742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1655501044764!5m2!1sen!2sin" width="80%" height="40vh" className='map' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
    </div>
)
 }
 export default Map;