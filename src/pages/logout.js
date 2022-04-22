import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';

const Logout = () => {
    const [masuk, setmasuk] = useState(false);
    const handlekeluar = ()=>{
        setmasuk(false);
        localStorage.clear()
        window.location = `http://localhost:3000/`;
    }
    return (
        <div className='logout-text'>
        <h1>BYE - BYE!  </h1>
            <br/>
            <Button onClick={handlekeluar} size="large" variant="contained" style={{ backgroundColor: "#fafafa", color: 'black',}} startIcon={<LogoutIcon />}> LOGOUT </Button> {/* ADD NEW UI BUTTON FROM MUI */}
        </div>
    )
}

export default Logout;