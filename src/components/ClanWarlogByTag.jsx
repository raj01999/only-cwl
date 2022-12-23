import React, { Fragment } from 'react'
import noWar from "./static/nowar.png"

const ClanWarlogByTag = ({ newData }) => {

    if (newData.length < 1) {
        return (
            < div className='playerByTag' >
                <div className='playerByTag-first' >
                    <div className='rotate_right' >
                        <span>
                            <div className='playerByTag-clan'>
                                <div className='rotate_left' >
                                    <a className='war-class'><b>No Clan War log</b></a>
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
                                <div className='rotate_left' >
                                    <a className='war-class'><img src={ele2.clan.badgeUrls.small} alt="badgeUrls" /> <em>vs</em> <img src={ele2.opponent.badgeUrls.small} alt="badgeUrls" /></a>
                                </div>
                                <div className='rotate_left' >
                                    <span>result : {ele2.result}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>team Size : {ele2.teamSize}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>total attacks : {ele2.clan.attacks}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>attacks Per Member : {ele2.attacksPerMember}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>exp Earned : {ele2.clan.expEarned}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>endTime : {ele2.endTime}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>tag : {ele2.clan.tag} <em>vs</em> {ele2.opponent.tag}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>name : {ele2.clan.name} <em>vs</em> {ele2.opponent.name}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>clan Level : {ele2.clan.clanLevel} <em>vs</em> {ele2.opponent.clanLevel}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>stars : {ele2.clan.stars} <em>vs</em> {ele2.opponent.stars}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>destruction Percentage : {ele2.clan.destructionPercentage} <em>vs</em> {ele2.opponent.destructionPercentage}</span>
                                </div>
                            </div>
                        </span>
                    </div>
                )
            })}
        </Fragment>
    )
}

export default ClanWarlogByTag