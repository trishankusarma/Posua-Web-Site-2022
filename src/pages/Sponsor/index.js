import React from 'react'
import Sponsors from '../../components/shared/Sponsors'
import Timer from '../../components/shared/Timer'
import Accordion from '../../components/Sponsor/Accordion'
import Prev from '../../components/Sponsor/Prev'

function Sponser() {
    return (
        <>
            <Sponsors />
            <Prev />
            <Accordion />
            <Timer />
        </>
    )
}

export default Sponser