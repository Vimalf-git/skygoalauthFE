import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import ApiService from '../Common/ApiService'
import './Friend.css'
import useLogout from '../Common/useLogout'
const Friend = () => {
    const [utilData, setUtilData] = useState("");
    const logout = useLogout();
    const getData = async () => {
        try {
            let res = await ApiService.get('/getutils');
            setUtilData(res.data.util);
        } catch (error) {
            if (error.response.status == 401) {
                logout();
            } else {
                toast.error(error.response.data.message);
            }
        }
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(utilData);
    return (
        <div className='frdCon'>
            <Header />
            <div className='tiitleCon'>
                {utilData && <p>{utilData}</p>}
            </div>
        </div>
    )
}

export default Friend