import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import memberImg from "./static/coc_members.png"
import locationImg from "./static/coc_locations.png"

const ClanByTag = ({ data }) => {
    if (!data || !Object.keys(data).length) {
        return <div className='loading-img'></div >
    }

    return (
        <Fragment>
            <div className='rotate_right' >
                <span>
                    <div className='playerByTag-clan'>
                        <a className='war-class'><b>{"clan details".toUpperCase()}</b></a>
                        <div className='rotate_left' >
                            <img src={data?.badgeUrls?.medium} alt="badgeUrls" width="100" height="100" />
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

                        <div className='rotate_right' >
                            <span><Link to='/clanLabels'>labels</Link></span>
                        </div>

                        <div className='rotate_right' >
                            <span><Link to='/clanWarlogByTag'>Clan War Log</Link></span>
                        </div>
                        <div className='rotate_right' >
                            <span><Link to='/clanCurrentWarByTag'>Clan Current War</Link></span>
                        </div>
                        <div className='rotate_right' >
                            <span><Link to='/clanLeagueWars'>Clan League Wars</Link></span>
                        </div>
                    </div>
                </span>
            </div>

            <div className='rotate_right' >
                <span>
                    <div className='playerByTag-clan'>
                        <a className='war-class'><b>{"member List".toUpperCase()}</b></a>
                        <div className='rotate_left' >
                            <img src={memberImg} alt="members" width="300" />
                        </div>
                        <div className='rotate_left' >
                            <span><Link to='/memberList'>member List</Link></span>
                        </div>
                    </div>
                </span>
            </div>

            {Object.keys(data).map((ele1, idx) => {
                if (ele1 === 'location') {
                    const newData = data[ele1]
                    return (
                        <div key={idx} className='rotate_right' >
                            <span>
                                <div className='playerByTag-clan'>
                                    <a className='war-class'><b>{ele1.toUpperCase()}</b></a>
                                    <div className='rotate_left' >
                                        <img src={locationImg} alt="members" width="70" />
                                    </div>
                                    <div className='rotate_left' >
                                        <span>id : {newData.id}</span>
                                    </div>
                                    <div className='rotate_left' >
                                        <span>is Country : {String(newData.isCountry)}</span>
                                    </div>
                                    <div className='rotate_left' >
                                        <span>name : {newData.name}</span>
                                    </div>
                                </div>
                            </span>
                        </div>
                    )
                } else if (ele1 === 'capitalLeague') {
                    const newData = data[ele1]
                    return (
                        <div key={idx} className='rotate_right' >
                            <span>
                                <div className='playerByTag-clan'>
                                    <a className='war-class'><b>{"capital League".toUpperCase()}</b></a>
                                    <div className='rotate_left' >
                                        <span>id : {newData.id}</span>
                                    </div>
                                    <div className='rotate_left' >
                                        <span>name : {newData.name}</span>
                                    </div>
                                </div>
                            </span>
                        </div>
                    )
                } else if (ele1 === 'warLeague') {
                    const newData = data[ele1]
                    return (
                        <div key={idx} className='rotate_right' >
                            <span>
                                <div className='playerByTag-clan'>
                                    <a className='war-class'><b>{"war League".toUpperCase()}</b></a>
                                    <div className='rotate_left' >
                                        <span>id : {newData?.id}</span>
                                    </div>
                                    <div className='rotate_left' >
                                        <span>name: {newData?.name}</span>
                                    </div>
                                </div>
                            </span>
                        </div>
                    )
                } else if (ele1 === 'chatLanguage') {
                    const newData = data[ele1]
                    return (
                        <div key={idx} className='rotate_right' >
                            <span>
                                <div className='playerByTag-clan'>
                                    <a className='war-class'><b>{"chat Language".toUpperCase()}</b></a>
                                    <div className='rotate_left' >
                                        <span>id : {newData?.id}</span>
                                    </div>
                                    <div className='rotate_left' >
                                        <span>name : {newData?.name}</span>
                                    </div>
                                    <div className='rotate_left' >
                                        <span>language Code : {newData?.languageCode}</span>
                                    </div>
                                </div>
                            </span>
                        </div>
                    )
                } else if (ele1 === 'clanCapital') {
                    const newData = data[ele1]
                    return (
                        <div key={idx} className='rotate_right' >
                            <span>
                                <div className='playerByTag-clan'>
                                    <a className='war-class'><b>{"clan Capital".toUpperCase()}</b></a>
                                    <div className='rotate_left' >
                                        <span>capital Hall Level : {newData?.capitalHallLevel}</span>
                                    </div>
                                    <div className='rotate_left' >
                                        <span><Link to='/districts'>districts</Link></span>
                                    </div>
                                </div>
                            </span>
                        </div>
                    )
                } else {
                    return <Fragment key={idx} />
                }
            })}
        </Fragment>

    )
}

export default ClanByTag