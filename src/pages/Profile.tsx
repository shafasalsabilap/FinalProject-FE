import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../data/hooks";
import { setUserID, setUserName, setImgSrc } from "../data/redux/userSlice";
import { RootState } from "../data/store";
import { fetchUserAPI } from "../API/fetchUser";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Profile = () => {
    const accessToken = useAppSelector((state: any) => state.accessToken.value);
    const UserName = useAppSelector((state: RootState) => state.user.userName);
    const imgSrc = useAppSelector((state: RootState) => state.user.imgSrc);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(accessToken)
        accessToken !== undefined && (
            fetchUserAPI(accessToken).then(res => {
                dispatch(setUserID(res.id));
                dispatch(setUserName(res.display_name));
                dispatch(setImgSrc(res.images[0].url));
            }));
    }, [accessToken, dispatch]);

    return (
        <div className='profile-page'>
        <div className="">
        <h1 className='profile-text'> MY PROFILE</h1>
            <img className="img-profile" src={imgSrc} alt={UserName} />
            <h2><PersonOutlineIcon fontSize="large"/> USERNAME : {UserName}</h2>
        </div>
        </div>
        
    )
}

export default Profile;