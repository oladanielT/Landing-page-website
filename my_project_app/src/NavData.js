import { AiFillContacts, AiFillHome, AiFillBank } from 'react-icons/ai';
import {FaFolder} from 'react-icons/fa';
import {FcAbout} from 'react-icons/fc';



const NavData= [
    {
        id:1,
  title:'Home',
  icon: <AiFillHome/>
},
{
    id:2,
  title:'Company',
  icon:<AiFillBank/>
},
{
    id:3,
  title:'Resources',
  icon:<FaFolder/>
},
{
    id:4,
  title:'About',
  icon:<FcAbout/>
},
{
    id:5,
  title:'Contact',
  icon:<AiFillContacts/>
}
]


export default NavData;