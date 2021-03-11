import React from 'react';
import { useHistory } from "react-router-dom";
import './League.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Leagues = (props) => {
    const { idLeague, strLeague, strSport } = props.league

    let history = useHistory();
    function handleClick() {
        history.push(`/league/${idLeague}`);
    }

    return (
        <div>
            <div className="Box" style={{}}>
                <h3>{strLeague}</h3>
                <p>Sports Type :-{strSport}</p>
                <button className="btn btn-primary" onClick={() => handleClick(idLeague)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Leagues;