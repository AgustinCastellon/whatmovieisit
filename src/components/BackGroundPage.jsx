import React from 'react'
import { PiCameraFill, PiFilmSlate, PiFilmStripFill, PiPopcornFill, PiTicketFill } from 'react-icons/pi'

export const BackGroundPage = () => {
  return (
    <div className="area absolute inset-0 -z-10 overflow-hidden">
      <ul className="floatingIcons">
        <li><PiPopcornFill className="iconItem" /></li>
        <li><PiTicketFill className="iconItem" /></li>
        <li><PiFilmStripFill className="iconItem" /></li>
        <li><PiPopcornFill className="iconItem" /></li>
        <li><PiTicketFill className="iconItem" /></li>
        <li><PiTicketFill className="iconItem" /></li>
        <li><PiPopcornFill className="iconItem" /></li>
        <li><PiFilmStripFill className="iconItem" /></li>
      </ul>
    </div>
  )
}
