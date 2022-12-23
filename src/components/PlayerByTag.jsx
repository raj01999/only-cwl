import React, { Fragment, useEffect } from 'react'
import legedImg from "./static/Legend.webp"
import { Link } from 'react-router-dom'

const PlayerByTag = ({ data, setPlayerBT }) => {
    const tag = new URLSearchParams(window.location.search).get("tag");

    useEffect(() => {
        fetch(process.env.REACT_APP_API + "playerByTag?tag=" + tag).then(jsonData => {
            return jsonData.json();
        }).then(apiData => {
            setPlayerBT(apiData.data);
        }).catch(error => {
            console.log(error);
        });
    }, [])

    if (!data || !Object.keys(data).length) {
        return <div className='loading-img'></div >
    }

    return (
        <div className='playerByTag'>
            <div className='playerByTag-first' >
                <div className='rotate_right' >
                    <span>
                        <div className='playerByTag-clan'>
                            <a className='war-class'><b>{"player details".toUpperCase()}</b></a>
                            <div className='rotate_left' >
                                <img src={data['league']?.iconUrls?.medium} alt="iconUrls" width="100" height="100" />
                            </div>
                            {Object.keys(data).map((ele1, idx) => {
                                if (!Array.isArray(data[ele1]) && !(typeof data[ele1] === "object")) {
                                    return (
                                        <div key={idx} className='rotate_left' >
                                            <span>{ele1} : {String(data[ele1])}</span>
                                        </div>
                                    );
                                } else {
                                    return <Fragment key={idx} />
                                }
                            })}
                        </div>
                    </span>
                </div>

                <div className='rotate_right' >
                    <span>
                        <div className='playerByTag-clan'>
                            <a className='war-class'><b>{"more details".toUpperCase()}</b></a>
                            {Object.keys(data).map((ele1, idx) => {
                                if (ele1 === 'troops') {
                                    return (
                                        <div key={idx} className='rotate_right' >
                                            <span><Link to={'/troops?tag=' + data.tag.slice(1)}>{ele1}</Link></span>
                                        </div>
                                    );
                                } else if (ele1 === 'achievements') {
                                    return (
                                        <div key={idx} className='rotate_right' >
                                            <span><Link to={'/achievements?tag=' + data.tag.slice(1)}>{ele1}</Link></span>
                                        </div>
                                    );
                                } else if (ele1 === 'spells') {
                                    return (
                                        <div key={idx} className='rotate_right' >
                                            <span><Link to={'/spells?tag=' + data.tag.slice(1)}>{ele1}</Link></span>
                                        </div>
                                    );
                                } else if (ele1 === 'labels') {
                                    return (
                                        <div key={idx} className='rotate_right' >
                                            <span><Link to={'/labels?tag=' + data.tag.slice(1)}>{ele1}</Link></span>
                                        </div>
                                    );
                                } else if (ele1 === 'heroes') {
                                    return (
                                        <div key={idx} className='rotate_right' >
                                            <span><Link to={'/heroes?tag=' + data.tag.slice(1)}>{ele1}</Link></span>
                                        </div>
                                    );
                                } else if (ele1 === 'playerHouse') {
                                    return (
                                        <div key={idx} className='rotate_right' >
                                            <span><Link to={'/playerHouse?tag=' + data.tag.slice(1)}>{ele1}</Link></span>
                                        </div>
                                    );
                                } else {
                                    return <Fragment key={idx} />
                                }
                            })}

                        </div>
                    </span>
                </div>

                {Object.keys(data).map((ele1, idx) => {
                    if (ele1 === 'clan') {
                        const newData = data[ele1]
                        return (
                            <div key={idx} className='rotate_right' >
                                <span>
                                    <div className='playerByTag-clan'>
                                        <a className='war-class'><b>{ele1?.toUpperCase()}</b></a>
                                        <div className='rotate_left' >
                                            <img src={newData?.badgeUrls?.small} alt="badgeUrls" />
                                        </div>
                                        <div className='rotate_left' >
                                            <span>tag : {newData?.tag}</span>
                                        </div>
                                        <div className='rotate_left' >
                                            <span>name : {newData?.name}</span>
                                        </div>
                                        <div className='rotate_left' >
                                            <span>clanLevel : {newData?.clanLevel}</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        )
                    } else if (ele1 === 'league') {
                        const newData = data[ele1]
                        return (
                            <div key={idx} className='rotate_right' >
                                <span>
                                    <div className='playerByTag-clan'>
                                        <a className='war-class'>{ele1?.toUpperCase()}</a>
                                        <div className='rotate_left' >
                                            <img src={newData?.iconUrls?.small} alt="iconUrls" />
                                        </div>
                                        <div className='rotate_left' >
                                            <span>id : {newData?.id}</span>
                                        </div>
                                        <div className='rotate_left' >
                                            <span>name : {newData?.name}</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        )
                    } else if (ele1 === 'legendStatistics') {
                        const newData = data[ele1]
                        return (
                            <div key={idx} className='rotate_right' >
                                <span>
                                    <div className='playerByTag-clan'>
                                        <a className='war-class'>{ele1.toUpperCase()}</a>
                                        <div className='rotate_left' >
                                            <img src={legedImg} alt={ele1} width='70' height='70' />
                                        </div>
                                        <div className='rotate_left' >
                                            <span>legend Trophies : {newData?.legendTrophies}</span>
                                        </div>
                                        <div className='rotate_left' >
                                            <span>current Season trophies : {newData?.currentSeason?.trophies}</span>
                                        </div>
                                        <div className='rotate_left' >
                                            <span>best Season id : {newData?.bestSeason?.id}</span>
                                        </div>
                                        <div className='rotate_left' >
                                            <span>best Season rank : {newData?.bestSeason?.rank}</span>
                                        </div>
                                        <div className='rotate_left' >
                                            <span>best Season trophies : {newData?.bestSeason?.trophies}</span>
                                        </div>
                                        <div className='rotate_left' >
                                            <span>best Versus Season id : {newData?.bestVersusSeason?.id}</span>
                                        </div>
                                        <div className='rotate_left' >
                                            <span>best Versus Season rank : {newData?.bestVersusSeason?.rank}</span>
                                        </div>
                                        <div className='rotate_left' >
                                            <span>best Versus Season trophies : {newData?.bestVersusSeason?.trophies}</span>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        )
                    } else {
                        return <Fragment key={idx} />
                    }
                })}
            </div>
        </div>
    )
}

export default PlayerByTag