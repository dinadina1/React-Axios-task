import React, { useContext } from 'react'
import ContextData from './context/userContext'
import Usercard from './Usercard'


const Home = () => {
  const { userInfo } = useContext(ContextData)

  return (
    <>
      {
        userInfo.length ? (
          <div className="container" >
            <h2 className='text-center mt-2'>Users</h2>
            <div className="row p-4">
              {
                userInfo.map((user) => <Usercard user={user} key={user.id} />)
              }
            </div>
          </div>
        ) : (
          <p className='text-center' style={{ padding: "15%" }}>There is no users. Please add a new user.</p>
        )
      }
    </>
  )
}

export default Home