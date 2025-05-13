import React from 'react'
import WebServices from './WebServices/WebServices'
import WebsiteNavbar from '../WebsiteNavbar/WebsiteNavbar'
import WebFooter from '../WebsiteFooter/WebFooter'
import ServiceDetails from './ServiceDetails/ServiceDetails'

const WebsiteServices = () => {
  return (
    <>
    <WebsiteNavbar/>
    <WebServices/>
    <ServiceDetails/>
    <WebFooter/>
    </>
  )
}

export default WebsiteServices