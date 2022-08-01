import React from 'react'
import './DestinationsStyles.css'
import BoraBora from '../../assets/borabora.jpg'
import Amboseli from '../../assets/amboseli.jpeg'
import Countries from '../../assets/6countries.jpeg'
import Maldavie from '../../assets/maldavis.jpeg'
import Wildbeast from '../../assets/wildbeast.jpeg'




function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>All-Inclusive Deals</h1>
                {/* <p>On the Caribbean's Best Beaches</p> */}
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={BoraBora} alt="/"/>
                    <img src={Countries} alt="/"/>
                    <img src={Amboseli} alt="/"/>
                    <img src={Maldavie} alt="/"/>
                    <img src={Wildbeast} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
