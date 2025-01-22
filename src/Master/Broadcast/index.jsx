import React, { useRef, useState } from 'react'
import SideNavbar from '../../SharedComponent/SideNavbar'
import MainNav from '../../SharedComponent/MainNavbar'
import { Link } from 'react-router-dom'
import JoditEditor from 'jodit-react'

const Broadcast = () => {
  const editor= useRef()
  const [content, setContent] =useState()
  const handleContent =(newContent)=>{
    setContent(newContent)
  }
  return (
    <div className='broadcastOutMost'>
        <div className='broadcastOuter'>
       
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Broadcast
                </span>
              </button>
            </div>
            <div className='broadcastInner bg-white shadow-xl p-5 rounded-md'>
                <form>
                    <div className='broadcastForm'>
                        <label>Broadcast Heading</label>
                        <div className='broadcastInput'>
                            <input type='text' className='border-2 outline-none rounded-md w-full mt-2 p-2' placeholder='Chagan Business Center'/>
                        </div>
                    </div>
                    <div className='broadcastFormInner grid grid-cols-1 sm:grid-cols-2 mt-5 justify-between gap-5 '>
                    <div className='broadcastForm'>
                        <label>Image </label>
                        <div className='broadcastInput w-full'>
                            <input type='file' className='border-2 text-slate-600 outline-none w-full rounded-md mt-2 p-2' />
                        </div>
                    </div>
                    <div className='broadcastForm'>
                        <label>Image Status</label>
                        <div className='broadcastInput'>
                           <select className='border-2 text-slate-600 outline-none rounded-md w-full mt-2 p-3 '>
                           <option>Enable</option>
                            <option>Disable</option>
                            <option>Pending</option>
                            </select>
                        </div>
                        </div>
                        </div>
                        <div className='broadcastForm mt-5'>
                            <label>Content</label>
                            <div className='broadcastInput w-full'>
                            <JoditEditor ref={editor} value={content} onChange={handleContent}/>
                        </div>
                        <div className='broadcastForm mt-5'>
                            <label>Status</label>
                            <div className='broadcastInput border-2 outline-none rounded-md w-full mt-2 p-1'>
                            <select className='p-2 w-full text-slate-500 outline-none'>
                           <option>Enable</option>
                            <option>Disable</option>
                            <option>Pending</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <button type='submit' className='broadcastBtn text-white bg-blue-600 mt-5 p-2 rounded-md'>Update Details </button>
                </form>
            </div>
            </div>
          </div>
  )
}

export default Broadcast