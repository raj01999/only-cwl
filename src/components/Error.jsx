import React, { Fragment } from 'react'
import noWar from "./static/nowar.png"

const Error = () => {

    return (
        <Fragment>
            <div className='rotate_right' >
                <span>
                    <div className='playerByTag-clan'>
                        <div className='rotate_left' >
                            <a className='war-class'><b>*** Page Not Exist***</b></a>
                        </div>
                        <div className='rotate_left' >
                            <img src={noWar} alt="noWar" width="300" />
                        </div>
                    </div>
                </span>
            </div>
        </Fragment>
    )

}

export default Error