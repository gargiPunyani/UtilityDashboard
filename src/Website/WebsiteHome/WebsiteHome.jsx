import React from 'react'
import WebsiteNavbar from '../WebsiteNavbar/WebsiteNavbar'
import WebHome from './WebHome/WebHome'
import KeyHightlights from './KeyHighlights/KeyHightlights'
import ServicesHighlights from './ServicesHighlights/ServicesHighlights'
import JoiningSteps from './Steps/JoiningSteps'
import OtherServices from './OtherServices/OtherServices'
import Partners from './OurPartners/Partners'
import WebFooter from '../WebsiteFooter/WebFooter'

const WebsiteHome = () => {
  return (
    <div className='websiteHomeOuter'>
        <WebsiteNavbar/>
        <WebHome/>
        <KeyHightlights/>
        <ServicesHighlights/>
        <JoiningSteps/>
        <OtherServices/>
        <Partners/>
        <WebFooter/>
        </div>
  )
}

export default WebsiteHome