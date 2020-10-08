import React, { useState } from 'react';
import '../assets/styles/components/HomeMain.scss';
import filter from '../assets/static/i_filter.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const HomeMain = () => {
    const [startDate, setStartDate] = useState(new Date());
    function testStart (fecha){
        console.log(fecha)
        setStartDate(fecha)
    }

    const [endDate, setendDate] = useState(new Date());
    function testEnd (fecha){
        console.log(fecha)
        setendDate(fecha)
    }

    // 
    const [showFilterModal, setShowFilterModal] = useState(false)
    function changeModalVisibility () {
        setShowFilterModal (!showFilterModal)
        console.log(showFilterModal)
    }

    return(
    <main className="containerHome">
        <section className="ContainerHome__SearchHome">
            <div className="ContainerHome__SearchHome--input">
                <input type="text" placeholder="You Locations"/>
            </div>
            <div className="ContainerHome__SearchHome--filter">
                <a href="#"><img src={filter} alt="icon_Filter" onClick={changeModalVisibility}/></a>
            </div>
            <a href="#" className="ContainerHome__SearchHome--BtnSearch">
                Search
            </a>
        </section>
        { showFilterModal ? 
         <section className="containerHome__FilterCard">
            <div className="containerHome__FilterCard__container">
                <p className="containerHome__FilterCard__container--title">
                    Filter
                </p>
                <div className="containerHome__FilterCard__container--selected-city">
                    <input type="text" placeholder="Your City"/>
                </div>
                <div className="ContainerHome__SearchHome__filter-card--Dates">
                    <DatePicker className="lala" selected={startDate} onChange={date => testStart(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate} 
                        />
                    <DatePicker className="lala" selected={endDate} onChange={date => testEnd(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                </div>
                {/* <div className="ContainerHome__SearchHome__filter-card--range-price">
                    <input type="range" min="0" max="100" value=""/>
                </div> */}
                <div className="ContainerHome__SearchHome__filter-card--btn">
                    <a href="#" className="">Send</a>
                </div>
            </div>
        </section> : null }
       
        
    </main>
    )
}


export default HomeMain