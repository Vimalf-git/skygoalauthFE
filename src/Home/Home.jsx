import React, { useEffect, useState } from 'react'
import useLogout from '../Common/useLogout'
import ApiService from '../Common/ApiService';
import Header from '../Header/Header';
import { toast } from 'react-toastify';
import Card from '../Card/Card'
import './Home.css'
const Home = () => {
    const logout = useLogout();
    const [userdata, setUserData] = useState([]);
    const getData = async () => {
        try {
            let res = await ApiService.get('/getuserlist');
            setUserData(res.data.userList)
        } catch (error) {
            if (error.response.status == 401) {
                logout();
            } else {
                toast.error(error.response.data.message);
            }
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className='homeCon'>
            <Header />
            <div className='cardhomCon'>
                {userdata && userdata.map((e, i) => <Card data={e} key={i} />)}
            </div>
        </div>
    )
}

export default Home