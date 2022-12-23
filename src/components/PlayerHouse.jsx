import React, { Fragment } from 'react'
import noWar from "./static/nowar.png"

const PlayerHouse = ({ newData }) => {

    if (newData.length < 1) {
        return (
            < div className='playerByTag' >
                <div className='playerByTag-first' >
                    <div className='rotate_right' >
                        <span>
                            <div className='playerByTag-clan'>
                                <div className='rotate_left' >
                                    <a className='war-class'><b>No PlayerHouse</b></a>
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
                                <a className='war-class'><b>{ele2.type}</b></a>
                                <div className='rotate_left' >
                                    <span>id : {ele2.id}</span>
                                </div>
                                <div className='rotate_left' >
                                    <span>type : {ele2.type}</span>
                                </div>
                            </div>
                        </span>
                    </div>
                )
            })}
        </Fragment>
    )
}

export default PlayerHouse