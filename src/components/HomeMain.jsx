import React from 'react';
import '../assets/styles/components/HomeMain.scss';
import filter from '../assets/static/i_filter.png'

const HomeMain = () => (
    <main className="containerHome">
        <section className="ContainerHome__SearchHome">
            <div className="ContainerHome__SearchHome--input">
                <input type="text" placeholder="You Locations"/>
            </div>
            <div className="ContainerHome__SearchHome--filter">
                <a href="#"><img src={filter} alt=""/></a>
            </div>
            <a href="#" className="ContainerHome__SearchHome--BtnSearch">
                Search
            </a>
        </section>
    </main>
);

export default HomeMain