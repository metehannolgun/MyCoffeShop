import React from 'react'
import Product from './Product'
import '../css/Dashboard.css'
import { useParams } from 'react-router-dom'



function Dashboard() {

    const { category } = useParams();


    return (
        <div className='dashboard'>
            <Product category={category} />
        </div>
    )
}

export default Dashboard