import React, { useState } from "react"
import "../assets/styles/components/HomeMain.scss"
import filter from "../assets/static/i_filter.png"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useHistory } from "react-router-dom"

const HomeMain = () => {
  const history = useHistory()
  const [text, setText] = useState()
  const [startDate, setStartDate] = useState(new Date())
  function testStart(fecha) {
    setStartDate(fecha)
  }

  const [endDate, setendDate] = useState(new Date())
  function testEnd(fecha) {
    setendDate(fecha)
  }

  const [showFilterModal, setShowFilterModal] = useState(false)
  function changeModalVisibility() {
    setShowFilterModal(!showFilterModal)
  }

  const searchLocations = () => {
    if(text && text.trim() !== ""){

      history.push("/results?search=" + text)
    }
  }

  const keyUpHandler = (key) => {
    if (text && text.trim() !== "" && key.keyCode === 13) {
      searchLocations();
    }
  }

  return (
    <main className="containerHome">
      <section className="ContainerHome__SearchHome">
        <div className="ContainerHome__SearchHome--input">
          <input type="text" onKeyUp={keyUpHandler} placeholder="You Locations" value={text} onChange={e => setText(e.target.value)} />
        </div>
        {/* <div className="ContainerHome__SearchHome--filter">
                    <a href="#"><img src={filter} alt="icon_Filter" onClick={changeModalVisibility} /></a>
                </div> */}
        <button onClick={searchLocations} className="ContainerHome__SearchHome--BtnSearch">
          Search
            </button>
      </section>
      { showFilterModal ?
        (<section className="containerHome__FilterCard">
          <div className="containerHome__FilterCard__container">
            <p className="containerHome__FilterCard__container--title">
              Filter
                </p>
            <div className="containerHome__FilterCard__container--selected-city">
              <input type="text" placeholder="Your City" />
            </div>
            <div className="ContainerHome__SearchHome__filter-card--Dates">
              <DatePicker className="ContainerHome__SearchHome__filter-card--DatePicker" selected={startDate} onChange={date => testStart(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
              <DatePicker className="ContainerHome__SearchHome__filter-card--DatePicker" selected={endDate} onChange={date => testEnd(date)}
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
              <a href="#" className="">
                Send
              </a>
            </div>
          </div>
        </section>
        ) : null}
    </main>
  )
}

export default HomeMain
