
import SingleProfileListItem from './SingleProfileListItem'
import { Container, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { AUTHORIZATION } from '../../../../hidden/credentials'
// import useFetch from '../../../../util/useFetch'



function ViewedProfile(props) {

    const [profiles, setProfiles] = useState([])
    const [showValue, setShowValue] = useState(false)
    const slicer = showValue ? profiles.slice(0, 8) : profiles.slice(0, 4)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${AUTHORIZATION}`
                }
            })
            const data = await response.json()
            setProfiles(data)

        } catch (error) {
            console.log(error);
        }
    }



    return (

        <div id='viewedprofile' className='mb-3'>
            <Container>
                <Row>
                    <h2>{props.title}</h2>

                    <div>
                        {
                            profiles &&
                            slicer.map(profile =>
                                <SingleProfileListItem key={profile._id} name={profile.name} surname={profile.surname} image={profile.image} title={profile.title} />)
                        }
                    </div>
                    <div><hr></hr></div>
                    <footer>
                        <div>
                            <button onClick={() => setShowValue(!showValue)}>

                                <span className="mr-2 mb-3 ">
                                    {
                                        showValue? <span>Show less</span> : <span>Show More</span>
                                    }
                                    <i className="bi bi-chevron-compact-up ml-3 mt-2"></i>
                                </span>

                            </button>
                        </div>
                    </footer>
                </Row>

            </Container>
        </div>

    )

}

export default ViewedProfile