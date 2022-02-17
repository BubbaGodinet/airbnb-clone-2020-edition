import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import logo from './assets/kisspng-logo-airbnb-jpeg-brand-vector-graphics-madaz-money-learn-to-day-trade-stocks-penny-stoc-5b92a0f47ddf87.1656733615363361165156-removebg-preview.png'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <Link to="/"><img className='header_icon' alt='' src={logo}/></Link>
            <div className='header_center'>
                <input type='text' />
                <SearchIcon/>
            </div>

            <div className='header_right'>
                <p>Become A Host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
    )
}