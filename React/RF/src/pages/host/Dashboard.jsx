import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>THis is Dashboard
 <Link to={'/host/income'}>Income</Link>
<Link to={'/host/reviews'}>Reviews</Link>
    </div>
  )
}
