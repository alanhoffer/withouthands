import Navbar from './static/components/Navbar';
import Notice from './static/components/Notice';
import HackType from './static/components/HackType';

import './static/css/HomeScreen.css';

export default function HomeScreen(){
    return(
        <div className="Home-container">
            <Navbar status={"home"} />

            <Notice />

            <HackType />
            
        </div>
    )
}