import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
      <div className="container">
       <Link to="addnews"> <h3>Add News</h3></Link>
       <Link to="allnews"> <h3>All News</h3></Link>
      </div>
    </div>
  )
}
