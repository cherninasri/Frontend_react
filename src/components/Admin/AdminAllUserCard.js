import React,{useState} from 'react'
import { Col,Card,Row, Modal,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../sibtitle.css'
import { useDispatch ,useSelector} from 'react-redux'
import { DeleteUser, UpdateUser } from '../../redux/userSlice'


const AdminAllUserCard = ({item}) => {

  const [show, setShow] = useState(false);
  const [role, setrole] = useState('');


    const dispatch =useDispatch()
    const data=useSelector(state=>state.user.alluser)

    const deletee=async()=>{
      await  dispatch(DeleteUser(item._id))

      window.location.pathname='/admin/AllUsers'

    }

    const handleClose = async() => {


      if(role ==='')
      {
          console.log('error')
  
  return
  
  }
  await  dispatch(UpdateUser({'user':item._id,
  "role":role}))

window.location.pathname='/admin/AllUsers'
      
  
      
      setShow(false)};


    const ediite=()=>{

      setShow(true)};


    

    
  return (
    <div >
    <Modal show={show} onHide={handleClose}>
    <Modal.Header >
        <Modal.Title> <div className='font'>  change Role</div></Modal.Title>
    </Modal.Header>

    <Modal.Body>
    <input
    type="text"
    className="input-form d-block mt-3 px-3"
    value={role}
    onChange={(e)=>{setrole(e.target.value)}}
    
    placeholder="  Role...."
/>


    </Modal.Body>
    <Modal.Footer>
       
        <Button className='font' variant="dark" onClick={handleClose} >
            send
        </Button>
    </Modal.Footer>
</Modal>
       <div className="user-address-card my-3 px-2">
       
<Col className="d-flex justify-content-between ">
<div style={{paddingTop:"25px"}}>name : {item.name}</div> 
<button   className="btn-save d-inline mt-1 " onClick={ediite} >  Role</button> 

</Col>

    
<div style={{paddingTop:"1px"}}>phone : {item.phone}</div> 
<div style={{paddingTop:"1px"}}>role : {item.role}</div> 

<Col className="d-flex justify-content-between ">
<div style={{paddingTop:"1px"}}>email : {item.email}</div> 
<button   className="btn-save d-inline mt-1 " onClick={deletee} >  Delete</button> 


</Col>      



</div>   
        </div>
       

  )
}

export default AdminAllUserCard
