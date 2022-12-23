import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import noWar from "./static/nowar.png"

const MemberList = ({ newData }) => {

    if (newData.length < 1) {
        return (
            < div className='playerByTag' >
                <div className='playerByTag-first' >
                    <div className='rotate_right' >
                        <span>
                            <div className='playerByTag-clan'>
                                <div className='rotate_left' >
                                    <a className='war-class'><b>No MemberList</b></a>
                                </div>
                                <div className='rotate_left' >
                                    <img src={noWar} alt="noWar" width="300" />
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <Fragment>
            {newData && newData.map((ele2, idx) => {
                return (
                    <div key={idx} className='rotate_right' >
                        <span>
                            <div className='playerByTag-clan'>
                                <Link to={"/member?tag=" + ele2.tag.slice(1)} ><b>{ele2.name}</b></Link>
                                <div className='rotate_left' >
                                    <img src={ele2.league.iconUrls.small} alt="iconUrls" />
                                </div>
                                <div className='rotate_left' >
                                    <span>tag : {ele2.tag}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>clan Rank : {ele2.clanRank}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>donations : {ele2.donations}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>donations Received : {ele2.donationsReceived}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>expLevel : {ele2.expLevel}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>previous Clan Rank : {ele2.previousClanRank}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>role : {ele2.role}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>trophies : {ele2.trophies}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>versus Trophies : {ele2.versusTrophies}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>league id : {ele2.league.id}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>league : {ele2.league.name}</span>
                                </div>
                            </div>
                        </span>
                    </div>
                )
            })}
        </Fragment>
    )
}

export default MemberList