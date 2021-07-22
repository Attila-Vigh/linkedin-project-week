import { HiUserGroup } from 'react-icons/hi'
import { GoPlus } from 'react-icons/go'
const SideBarRecent = ()=>(
    <div className="border mt-4" style={{borderRadius:'10px'}}>
        <div className=' mt-3'>
        
        <ul style={{listStyle:'none'}} >
            <h6>Recent</h6>
            <li>
            <a  style={{color:'black', marginLeft:'1px'}} href="https://www.linkedin.com/groups/8689804/"><HiUserGroup className='mr-2'/>UNI-2020-2021</a>
            </li>
            <a href="#"><h6 className='mt-4'>Groups</h6></a>
            <a  style={{color:'black', marginLeft:'1px'}} href="https://www.linkedin.com/groups/8689804/"><HiUserGroup className='mr-2'/>UNI-2020-2021</a>
            <p className='ml-4 mt-2'>See all</p>
            <div className='d-flex justify-content-between mb-2'><a href='#'><h6>Events</h6></a><GoPlus className='mr-3'/></div>
            <a href='#'><h6>Followed Hashtags</h6></a>
        </ul>
        <hr></hr>
        <a style={{color:'black' ,textDecoration:'none'}} href='https://www.linkedin.com/mynetwork/discover-hub/'><h5 className='text-muted' style={{textAlign:'center', marginBottom:'18px'}}>Discover more</h5></a>
        </div>
    </div>
)
export default SideBarRecent