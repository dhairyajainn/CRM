import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Context';

const Protected = ({Component}) => {
    const navigate = useNavigate();
    
    useEffect(()=>{
        let login = localStorage.getItem('user')
        if(!login) {
            navigate('/login')
        }
    }, [navigate])
  return (
    <div>
        <Component />
    </div>
  )
}

export default Protected