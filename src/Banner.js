import './Banner.css'
import Search from './Search'
import Button from '@mui/material/Button';
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function Banner( ){
let navigate = useNavigate();
const [showSearch, setShowSearch] = useState(false)

    return(
        <div className="banner">
            <div className='banner_search'>
                <Button onClick={() => setShowSearch(!showSearch)}
                 className='banner_searchBttn' 
                 variant='outline'> {showSearch ? 'Hide' : 'Search Dates'} </Button>
                 
                {showSearch && <Search />}
            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button onClick={() => navigate('/search')} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}