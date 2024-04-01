import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContextData = createContext({})
export const UserContext = ({ children }) => {

    // States
    const [userInfo, setUserInfo] = useState([]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [country, setCountry] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [gender, setGender] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    const [loading, setLoading] = useState(true)

    // Mock Api Url
    const APIURL = "https://6608f4b1a2a5dd477b14e962.mockapi.io/employeeInfo";

    // UseEffect for getting data from API
    useEffect(() => {
        const getData = async () => {
            try {
                const getApi = await axios.get(APIURL)
                setUserInfo(getApi.data)
            } catch (err) {
                console.log(err.stack);
            }
        }
        getData();
    }, [loading])

    // Add user to API
    const addUser = async () => {
        if (email && firstName && lastName && companyName && jobTitle && country) {

            const currentDate = new Date();
            const id = userInfo.length ? parseInt(userInfo[userInfo.length - 1].id + 1) : "1"
            const newData = { createdAt: currentDate, fathername: fatherName, image: imageUrl, city: city, state: state, country: country, zipcode: zipcode, companyname: companyName, streetaddress: address, jobtitle: jobTitle, firstname: firstName, lastname: lastName, gender: gender, jobdesc: jobDescription, id: id }

            setUserInfo(...userInfo, newData)
            setFirstName('')
            setLastName('');
            setEmail('');
            setPassword('');
            setAddress('');
            setCity('');
            setState('');
            setZipcode('');
            setCountry('');
            setFatherName('');
            setGender('');
            setImageUrl('');
            setCompanyName('');
            setJobTitle('');
            setJobDescription('');

            const apiResponse = await axios.post(APIURL, newData)
            try {
                const userList = [...userInfo, apiResponse.data];

                setLoading(!loading);
                notifyToast("Successfull added..")

            } catch (err) {
                console.log(err.response);
            }
        }
    }

    // Delete user from API
    const deleteUser = async (id) => {
        const newData = userInfo.filter((user) => user.id != id)
        setUserInfo(newData)
        await axios.delete(`${APIURL}/${id}`)
        notifyToast("Successfull deleted..")
    }

    // Update user to API
    const updateUser = async (id) => {
        const currentDate = new Date();
        const newData = { createdAt: currentDate, fathername: fatherName, image: imageUrl, city: city, state: state, country: country, zipcode: zipcode, companyname: companyName, streetaddress: address, jobtitle: jobTitle, firstname: firstName, lastname: lastName, gender: gender, jobdesc: jobDescription, id: id }

        try {
            setUserInfo(userInfo.map((user) => id == user.id ? { ...newData } : user))
            const response = await axios.put(`${APIURL}/${id}`, newData)
            setLoading(!loading)
            setFirstName('')
            setLastName('');
            setEmail('');
            setPassword('');
            setAddress('');
            setCity('');
            setState('');
            setZipcode('');
            setCountry('');
            setFatherName('');
            setGender('');
            setImageUrl('');
            setCompanyName('');
            setJobTitle('');
            setJobDescription('');
            notifyToast("Successfull updated..")

        } catch (err) {
            console.log(err.response);
        }
    }

    const cancelUpdate = () => {
        setFirstName('')
        setLastName('');
        setEmail('');
        setPassword('');
        setAddress('');
        setCity('');
        setState('');
        setZipcode('');
        setCountry('');
        setFatherName('');
        setGender('');
        setImageUrl('');
        setCompanyName('');
        setJobTitle('');
        setJobDescription('');
    }

    // Toastify Alert
    const notifyToast = (message) => {
        toast.success(`${message}`, {
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
            transition: Zoom,
            pauseOnHover: false
        });
    }

    return (
        <ContextData.Provider value={{
            userInfo, firstName, lastName, email, password, address, city, state, zipcode, country, fatherName, gender, imageUrl, companyName, jobTitle, jobDescription, setFirstName, setLastName, setEmail, setPassword, setAddress, setCity, setState, setZipcode, setCountry, setFatherName, setGender, setImageUrl, setCompanyName, setJobTitle, setJobDescription, addUser, deleteUser, updateUser, cancelUpdate
        }}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextData