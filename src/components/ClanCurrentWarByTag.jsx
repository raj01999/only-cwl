import React, { Fragment } from 'react'
import noWar from "./static/nowar.png"

const ClanCurrentWarByTag = ({ data }) => {
    const newData = data?.clan?.members.sort((a, b) => {
        if (a.mapPosition < b.mapPosition) {
            return -1;
        }
        if (a.mapPosition > b.mapPosition) {
            return 1;
        }
        return 0;
    });

    const newData2 = data?.opponent?.members.sort((a, b) => {
        if (a.mapPosition < b.mapPosition) {
            return -1;
        }
        if (a.mapPosition > b.mapPosition) {
            return 1;
        }
        return 0;
    });

    if (data.state.toUpperCase() === "notInWar".toUpperCase()) {
        return (
            <Fragment>
                <div className='rotate_right' >
                    <span>
                        <div className='playerByTag-clan'>
                            <div className='rotate_left' >
                                <a className='war-class'><b>not In War</b></a>
                            </div>
                            <div className='rotate_left' >
                                <img src={noWar} alt="noWar" width="300" />
                            </div>
                        </div>
                    </span>
                </div>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <div className='rotate_right' >
                    <span>
                        <div className='playerByTag-clan'>
                            <div className='rotate_left' >
                                <a className='war-class'><img src={data.clan.badgeUrls.small} alt="badgeUrls" /> <em>vs</em> <img src={data.opponent.badgeUrls.small} alt="badgeUrls" /></a>
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
                            <div className='rotate_left' >
                                <span>tag : {data.clan.tag} <em>vs</em> {data.opponent.tag}</span>
                            </div>
                            <div className='rotate_left' >
                                <span>name : {data.clan.tag} <em>vs</em> {data.opponent.tag}</span>
                            </div>
                            <div className='rotate_left' >
                                <span>clan Level : {data.clan.clanLevel} <em>vs</em> {data.opponent.clanLevel}</span>
                            </div>
                            <div className='rotate_left' >
                                <span>attacks : {data.clan.attacks} <em>vs</em> {data.opponent.attacks}</span>
                            </div>
                            <div className='rotate_left' >
                                <span>stars : {data.clan.stars} <em>vs</em> {data.opponent.stars}</span>
                            </div>
                            <div className='rotate_left' >
                                <span>destruction Percentage : {data.clan.destructionPercentage} <em>vs</em> {data.opponent.destructionPercentage}</span>
                            </div>
                        </div>
                    </span>
                </div>

                {newData && newData.map((ele2, idx) => {
                    return (
                        <div key={idx} className='rotate_right' >
                            <span>
                                <div className='playerByTag-clan'>
                                    <div className='rotate_left' >
                                        <span><a className='war-class'>{ele2.name} <em>vs</em> {newData2[idx].name}</a></span>
                                    </div>
                                    <div className='rotate_left' >
                                        <span>tag : {ele2.tag} <em>vs</em> {newData2[idx].tag}</span>
                                    </div>
                                    <div className='rotate_left' >
                                        <span>map Position : {ele2.mapPosition} <em>vs</em> {newData2[idx].mapPosition}</span>
                                    </div>
                                    <div className='rotate_left' >
                                        <span>townhall Level : {ele2.townhallLevel} <em>vs</em> {newData2[idx].townhallLevel}</span>
                                    </div>
                                    <div className='rotate_left' >
                                        <span>opponent Attacks : {ele2.opponentAttacks} <em>vs</em> {newData2[idx].opponentAttacks}</span>
                                    </div>
                                </div>
                            </span>
                        </div>
                    )
                })}
            </Fragment>
        )
    }
}

export default ClanCurrentWarByTag