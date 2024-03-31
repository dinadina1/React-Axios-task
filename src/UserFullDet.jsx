import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import ContextData from './context/userContext';

const UserFullDet = () => {
    const urlId = useParams();
    const { userInfo } = useContext(ContextData);
    const userDet = userInfo.filter((user) => user.id == urlId.id);

    return (
        <>
            <div className="container p-5">
            <h2 className='text-center mb-4'>User Details:</h2>
                <div className="row p-4 product-border border-1 rounded-3">
                    <div className="col-lg-5">
                        <img src={userDet[0].image} style={{ height: "100%", width: "100%" }} />
                    </div>
                    <div className="col-lg-7 ps-5">
                        <div className="card-body">

                            <h3 className='card-title mb-2'>Name : {`${userDet[0].firstname} ${userDet[0].lastname}`}</h3>
                            <p className='card-text'>Father Name : {userDet[0].fathername}</p>
                            <p className='card-text'>Job Role : {userDet[0].jobtitle}</p>
                            <p className='card-text'>Job Description : {userDet[0].jobdesc}</p>
                            <p className='card-text'>Company : {userDet[0].companyname}</p>
                            <p className='card-text'>Email : {userDet[0].email}</p>
                            <p className='card-text'>Password : {userDet[0].password}</p>
                            <p className='card-text'>Gender : {userDet[0].gender}</p>
                            <p className='card-text'>Address : {userDet[0].streetaddress}</p>
                            <p className='card-text'>City : {userDet[0].city}</p>
                            <p className='card-text'>State : {userDet[0].state}</p>
                            <p className='card-text'>Country : {userDet[0].country}</p>
                            <p className='card-text'>Zip code : {userDet[0].zipcode}</p>
                        </div>
                    </div>
                    <div className="col-12 text-center p-4">
                        <Link to={"/"} className='btn btn-secondary mt-4'>Back to Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserFullDet