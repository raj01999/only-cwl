import React, { Fragment } from 'react'
import noWar from "./static/nowar.png"

const Achievements = ({ newData }) => {

    if (newData.length < 1) {
        return (
            < div className='playerByTag' >
                <div className='playerByTag-first' >
                    <div className='rotate_right' >
                        <span>
                            <div className='playerByTag-clan'>
                                <div className='rotate_left' >
                                    <a className='war-class'><b>No Achievements</b></a>
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
                                <a className='war-class'><b>{ele2.name}</b></a>
                                <div className='rotate_left' >
                                    <span>completionInfo : {ele2.completionInfo}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>info : {ele2.info}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>stars : {ele2.stars}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>target : {ele2.target}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>value : {ele2.value}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>village : {ele2.village}</span>
                                </div>
                            </div>
                        </span>
                    </div>
                )
            })}
        </Fragment>
    )
}

export default Achievements