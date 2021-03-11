import React from 'react';
import { useState, useEffect } from 'react';
import Leagues from '../Leagues/Leagues';
import './Home.css'


const Home = () => {
    const [sports, setSports] = useState([])
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php"
        fetch(url)
            .then(res => res.json())
            .then(data => setSports(data.leagues))
    }, [])
    // console.log(sports.slice(0, 15))
    const sport = sports.slice(0, 15)


    return (
        <div className="homeStyle">
            <div className='header'>
                <h1 style={{ color: '#fff', fontSize:'50px' }}>Football Fantasy Leauge</h1>
            </div>
            <div className='LeagueBox'>
                {
                    sport.map(sp => <Leagues league={sp}></Leagues>)
                }
            </div>

        </div>
    );
};

export default Home;



