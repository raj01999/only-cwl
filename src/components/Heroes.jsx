import React, { Fragment } from 'react'
import noWar from "./static/nowar.png"

const Heroes = ({ newData }) => {

    if (newData.length < 1) {
        return (
            < div className='playerByTag' >
                <div className='playerByTag-first' >
                    <div className='rotate_right' >
                        <span>
                            <div className='playerByTag-clan'>
                                <div className='rotate_left' >
                                    <a className='war-class'><b>No Heroes</b></a>
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
                                <a className='war-class'>{ele2.name}</a>
                                <div className='rotate_left' >
                                    <span>level : {ele2.level}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>maxLevel : {ele2.maxLevel}</span>
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

export default Heroes