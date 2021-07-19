import {Component} from 'react'


class SideViewedProfile extends Component{

    state = {
        profiles: [],
        showValue: false
       
    }

    componentDidMount = async () =>{
        try {
            let response =  await fetch('https://striveschool-api.herokuapp.com/api/profile/',{
               
                headers:{
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1NGRiOTBlZmU3ODAwMTU1YzM0ZDEiLCJpYXQiOjE2MjY2ODg5NTMsImV4cCI6MTYyNzg5ODU1M30.PiLfN7pEIhpWApHctpBEdZ6QO57sOyrXDmvzsojGvKU'
                }
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data) 
                this.setState({
                    profiles: data
                })
            }
          
        } catch (error) {
            console.log('error')
            
        }
    }
 
   render (){

    return(
       
                        <div style={{border: '1px solid #b9bec7',borderRadius:'10px'}}>
                        <h2 className="ml-4 my-4">People also viewed</h2>

                        <ul style={{listStyle:'none'}}>
                            {this.state.showValue? this.state.profiles.slice(0,8).map(profile =>
                            <li className="my-4"> 
                                <a style={{color:'black'}} href='#'><img  className="mr-3" style ={{width:'48px', float:'left' ,borderRadius:'50px'}}src ={profile.image} alt="profile"/>
                                <div>
                                    <h4>{profile.name}  {profile.surname}</h4>
                                    <p>{profile.title}</p>
                                </div></a>
                                <button  style={{border: '1px solid black',borderRadius:'50px',backgroundColor:'Transparent', marginLeft:'64px',fontSize:'20px'}}>Connect</button>
                                
                            </li>)
                            : this.state.profiles.slice(0,4).map(profile =>
                                <li className="my-4"> 
                                    <a style={{color:'black'}} href='#'><img  className="mr-3" style ={{width:'48px', float:'left' ,borderRadius:'50px'}}src ={profile.image} alt="profile"/>
                                    <div>
                                        <h4>{profile.name}  {profile.surname}</h4>
                                        <p>{profile.title}</p>
                                    </div></a>
                                    <button  style={{border: '1px solid black',borderRadius:'50px',backgroundColor:'Transparent', marginLeft:'64px' ,fontSize:'20px'}}>Connect</button>
                                    
                                </li>)
                            }
                        </ul>
                            <div><hr></hr></div>
                            <footer>
                                <button 
                                    onClick={() => this.setState({showValue: !this.state.showValue})} 
                                    style={{border: 'none', backgroundColor:'Transparent',textAlign:'center',margin:'auto',display:'flex'}}>
                                    {
                                        this.state.showValue 
                                            // "Show less"
                                            ? (<span className="mr-2 mb-3 ">Show less<i className="bi bi-chevron-compact-up ml-3 mt-2"></i></span>)
                                            //: 'Show more'
                                            :   (<span className="mr-2 mb-3 ">Show more<i className="bi bi-chevron-compact-down ml-3 mt-2"></i></span>)
                                    }
                                </button>
                               
                            </footer>
                        </div>
                    
        
    )

   }

}
export default SideViewedProfile