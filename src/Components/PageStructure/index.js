import React from 'react'

import TopBar from '../Top'
import BaseBoard from '../Base'

export default function PageStructure (props) {
    return(
        <section>
            <TopBar />

            {props.children}
            
            <BaseBoard />
        </section>
    )
}