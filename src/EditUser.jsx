import React, { useContext } from 'react'
import ContextData from './context/userContext'
import { Link, useParams } from 'react-router-dom';

const EditUser = () => {

    const { firstName, lastName, email, password, address, city, state, zipcode, country, fatherName, gender, imageUrl, companyName, jobTitle, jobDescription, setFirstName, setLastName, setEmail, setPassword, setAddress, setCity, setState, setZipcode, setCountry, setFatherName, setGender, setImageUrl, setCompanyName, setJobTitle, setJobDescription, updateUser, cancelUpdate } = useContext(ContextData);

    const urlId = useParams();

    return (
        <>
            <div className="container p-4">
                <h2 className='text-center mb-4'>Update User Details</h2>
                <form class="row p-4 g-3 product-border border-1 rounded-3" onSubmit={(e) => e.preventDefault()}>
                    <div class="col-md-6">
                        <label for="firstname" class="form-label">First name:</label>
                        <input type="text" class="form-control border-3" required id="firstname" placeholder='Ex: John' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputlastname" class="form-label">Last name:</label>
                        <input type="text" class="form-control border-3" required id="inputlastname" placeholder='Ex: King' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control border-3" required id="inputEmail4" placeholder='Ex: abc@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control border-3" id="inputPassword4" required placeholder='Ex: abcd123@' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control border-3" id="inputAddress" required placeholder="Ex: 1234, Main Street" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control border-3" id="inputCity" required value={city} placeholder='Ex: Chennai' onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label>
                        <input type="text" class="form-control border-3" id="inputState" required value={state} placeholder='Ex: Tamilnadu' onChange={(e) => setState(e.target.value)} />
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control border-3" id="inputZip" required value={zipcode} placeholder='Ex: 600 001' onChange={(e) => setZipcode(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputCountry" class="form-label">Country</label>
                        <input type="text" class="form-control border-3" id="inputCountry" required value={country} placeholder='Ex: India' onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="fatherName" class="form-label">Father Name</label>
                        <input type="text" class="form-control border-3" id="fatherName" required value={fatherName} placeholder='Ex: Rahul' onChange={(e) => setFatherName(e.target.value)} />
                    </div>
                    <div class="col-md-4">
                        <label for="inputGender" class="form-label">Gender</label>
                        <input type="text" class="form-control border-3" id="inputGender" required value={gender} placeholder='Ex: male' onChange={(e) => setGender(e.target.value)} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputimage" class="form-label">Image URL:</label>
                        <input type="text" class="form-control border-3" id="inputimage" value={imageUrl} placeholder='Ex: https://dataimage.jpg' onChange={(e) => setImageUrl(e.target.value)} />
                    </div>
                    <div class="col-md-6">
                        <label for="company" class="form-label">Company Name:</label>
                        <input type="text" class="form-control border-3" id="company" required value={companyName} placeholder='Ex: Amazon' onChange={(e) => setCompanyName(e.target.value)} />
                    </div>
                    <div class="col-md-6">
                        <label for="jobRole" class="form-label">Job Role:</label>
                        <input type="text" class="form-control border-3" id="jobRole" required value={jobTitle} placeholder='Ex: Software Engineer' onChange={(e) => setJobTitle(e.target.value)} />
                    </div>
                    <div class="col-md-6">
                        <label for="jobdesc" class="form-label">Job Description:</label>
                        <input type="text" class="form-control border-3" id="jobdesc" required value={jobDescription} placeholder='Ex: Developing production Application' onChange={(e) => setJobDescription(e.target.value)} />
                    </div>

                    <div class="col-12 text-center pb-4 pt-4">
                        <Link to={"/"}><button type="submit" class="btn btn-primary" onClick={() => updateUser(urlId.id)}>Update User</button></Link>
                        <Link to={"/"}><button type="submit" class="btn btn-secondary ms-5" onClick={()=>cancelUpdate()}>Cancel</button></Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditUser