import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ContextData from './context/userContext'

const Usercard = ({ user }) => {

  const { deleteUser, setFirstName, setLastName, setEmail, setPassword, setAddress, setCity, setState, setZipcode, setCountry, setFatherName, setGender, setImageUrl, setCompanyName, setJobTitle, setJobDescription } = useContext(ContextData);


  return (
    <>
      <div className="col-lg-3 ">
        <div className="card m-2 mb-3 w-100 product-border border-none rounded-3" >
          <Link className='text-decoration-none text-dark' to={`/userdetails/${user.id}`}>
            <div className="card-head" style={{ height: "200px" }}>
              {
                (user.image).length ? (
                  <img src={user.image} className="card-img-top h-100 w-100" alt="img" />
                ) : (
                  <img src="https://media.istockphoto.com/id/1220827245/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette.jpg?s=612x612&w=0&k=20&c=GMdiPt_h8exnrAQnNo7dIKjwZyYqjH4lRQqV8AOx4QU=" className="card-img-top h-100 w-100" alt="img" />
                )
              }

            </div>

            <div className="card-body">
              <h5 className="card-title">{`${user.firstname} ${user.lastname}`}</h5>
              <p className='card-text  fw-bold'>{
                (user.jobtitle).length <= 20 ? user.jobtitle : `${user.jobtitle.slice(0, 20)}...`
              }
              </p>
              <p>Company: {
                (user.companyname).length <= 10 ? user.companyname : `${user.companyname.slice(0, 10)}...`
              }
              </p>
              <p className="card-text">Country: {user.country}</p>

              <p className='d-flex justify-content-between'>
                <Link to={`/edituser/${user.id}`} className='btn btn-primary' onClick={() => {
                  setFirstName(user.firstname)
                  setLastName(user.lastname);
                  setEmail(user.email);
                  setPassword(user.password);
                  setAddress(user.streetaddress);
                  setCity(user.city);
                  setState(user.state);
                  setZipcode(user.zipcode);
                  setCountry(user.country);
                  setFatherName(user.fathername);
                  setGender(user.gender);
                  setImageUrl(user.image);
                  setCompanyName(user.companyname);
                  setJobTitle(user.jobtitle);
                  setJobDescription(user.jobdesc);
                }}>Edit</Link>
                <Link className='btn btn-danger' onClick={() => deleteUser(user.id)}>Delete</Link>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Usercard