import React, { useState } from 'react';
import "../assets/styles/components/Details.scss"
import BasecampIcon from "../assets/static/i_camp.png"
import DressRoomIcon from "../assets/static/i_dress.png"
import ParkingIcon from "../assets/static/i_parking.png"
import WC from "../assets/static/i_bath.png"
import LivingRoom from "../assets/static/i_livingroom.png"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Cover from "../assets/static/cover-centlali.jpg"
import Cross1 from "../assets/static/cross1.jpg"
import Cross2 from "../assets/static/cross2.jpg"
import Cross3 from "../assets/static/cross3.jpg"



const DetailsMain = () => {
    
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
        
      <main className="Container">

        <figure className="Container__cover">
            <img src={Cover} alt="Cover_Crossfit"/>
        </figure>
        <section className="Container__info">
            <div className="Container__about">
                <h2>About of this location</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ipsum, tenetur quisquam modi doloremque, dolor repudiandae 
                    aut quaerat obcaecati quia molestiae tempora unde! Voluptatibus eius, 
                    corporis soluta minus quibusdam praesentium excepturi!
                </p>
            </div>
            <div className="Container__services">
                <h2>Services</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ipsum, tenetur quisquam modi doloremque
                </p>
                <div className="Container__services--icons">
                    <figure>
                        <img src={BasecampIcon} alt="Icon Basecamp"/>
                        <p>Basecamp area</p>
                    </figure>
                    <figure>
                        <img src={DressRoomIcon} alt="Icon Dressing Room"/>
                        <p>Dressing rooms</p>
                    </figure>
                    <figure>
                        <img src={ParkingIcon} alt="Icon Parking"/>
                        <p>Parking</p>
                    </figure>
                    <figure>
                        <img src={WC} alt="Icon W.C."/>
                        <p>W.C.</p>
                    </figure>
                    <figure>
                        <img src={LivingRoom} alt="Icon Living Room"/>
                        <p>Living Room</p>
                    </figure>
                </div>
            </div>
        </section>
        <section className="Container__datesAndSlider">
            <div className="Container__datesAndSlider__dates">
                <div className="Container__datesAndSlider__dates--checkbox">
                    <input type="radio" name="" className="cbox1" id="cbox1" value="checkbos"/>
                    <label for="Reserver Location">Reserver Location</label>
                </div>
                <div className="Container__datesAndSlider__dates--choose">
                    <p>
                        Choose the days to film
                    </p>
                    <div className="Container__datesAndSlider__dates--choose--btns">
                        <div className="Container__datesAndSlider__dates--choose--datePicker">
                            <DatePicker className="Container__datesAndSlider__dates--choose--datePicker1" selected={startDate} onChange={date => testStart(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate} 
                            />
                        </div>
                        <div className="Container__datesAndSlider__dates--choose--inputs">
                            <DatePicker className="Container__datesAndSlider__dates--choose--datePicker1" selected={endDate} onChange={date => testEnd(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            />                        
                       </div>
                    </div>
                    <div className="Container__datesAndSlider__dates--choose--btnSend">
                        <div href="#" className="Container__datesAndSlider__dates--btn"> 
                            <a href="#">Check! </a> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="Container__datesAndSlider__slider">
                <input type="radio" id="1" name="image-slide" hidden/>
                <input type="radio" id="2" name="image-slide" hidden/>
                <input type="radio" id="3" name="image-slide" hidden/>
                <div className="slide">
                    <div className="item-slide">
                        <img src={Cross1}/>
                    </div>
                    <div className="item-slide">
                        <img src={Cross2}/>
                    </div>
                    <div className="item-slide">
                        <img src={Cross3}/>
                    </div>
                </div>
                <div className="pagination">
                    <label className="pagination-item" for="1">
                        <img src={Cross1}/>
                    </label>
                    <label className="pagination-item" for="2">
                        <img src={Cross2}/>
                    </label>
                    <label className="pagination-item" for="3">
                        <img src={Cross3}/>
                    </label>
                </div>
            </div>            
        </section>
    </main>
  
  )
}
  
  export default DetailsMain
  