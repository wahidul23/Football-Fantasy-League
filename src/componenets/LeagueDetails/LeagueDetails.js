import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, } from "@fortawesome/free-brands-svg-icons"
import { faCoffee, faFlag, faFutbol, faMars, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import male from '../Images/male.png'
import female from '../Images/female.png'
import './LeagueDetails.css'

const LeagueDetails = () => {
    const { idLeague } = useParams()
    const [league, setLeague] = useState([])


    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [])

    console.log(league)
    const { strDescriptionEN, strDescriptionFR, strCountry, strLeague, dateFirstEvent,
        strGender, strTwitter, strYoutube, strFacebook, strSport, strBanner } = league
    let gender;
    console.log(strGender)
    if (strGender === "Male") {
        gender = male
    } else if (strGender === "Female") {
        gender = female
    }
    return (
        <div className="details">
            <div className='detailsHeader'>
                <div style={{ backgroundImage: `url(${strBanner})` }} className="clubLogo">
                    {/* <img src={strLogo} alt="" className='logo' /> */}
                </div>
            </div>
            <div className="detailContainer">
                <div className='leagueDetail'>
                    <div>
                        <h1>{strLeague}</h1>
                        <p><FontAwesomeIcon icon={faSearchLocation} /> Founded: {dateFirstEvent}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} />Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} />Gender {strGender}</p>
                    </div>
                    <div>
                        <img className='gender' src={gender} alt="" />
                    </div>
                </div>
                <div className="description">
                    <p>{strDescriptionEN}</p>
                    <p>{strDescriptionFR}</p>
                </div>

                <div className="social">
                    <a href={`https://${strFacebook}`} target='_blank' ><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href={`https://${strTwitter}`} target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href={`https://${strYoutube}`} target='_blank'> <FontAwesomeIcon icon={faYoutube} /></a>
                </div>

            </div>
        </div>

    );
};

export default LeagueDetails;