import React, {useEffect } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Card.css'
import { Button } from '@mui/material';
const Card = ({ data, key }) => {
  
  return (
    <div className='cardBox'>
      <div className='imgcon'>
        {/* <img className='cardimg' src={data.imageUrl} />*/}
        <AccountCircleIcon style={{fontSize:'4rem'}}/>
        </div> 
      <h3>{data.name.toUpperCase()}</h3>
      <div className='cardDesc'><p>{data.mail}</p></div>
      <div className='admineditdeletebtn'>
        <Button className='admindeletebtn'>Connect</Button >
        {/* <Link to={`/editfood/${data._id}`} className='admineditbtn'><ModeIcon />edit</Link> */}
      </div> 
      {/* {adminOrNot ? <div className='admineditdeletebtn'>
        <Button className='admindeletebtn' onClick={() => { deleteFood(data._id, key) }}><DeleteIcon />delete</Button >
        <Link to={`/editfood/${data._id}`} className='admineditbtn'><ModeIcon />edit</Link>
      </div> :
        <div className='addtocartCon'><Button className='addtocartbtn'
          onClick={() => { AddTOCart(data) }}
        >Add to cart RS {data.price}</Button></div>
      } */}
    </div>
  )
}

export default Card