import {Box,Typography,styled,TextField,Button} from '@mui/material';
import { useState } from 'react';
import Header from '../components/Header';
import Dropdown from '../components/DropDown';
import {savePost}  from '../services_Api';
import { useNavigate } from "react-router-dom";
import { routePath} from '../routes/route';
const Component = styled(Box)({
    background: '#F5F5F5',
    padding: '80px 200px'
})
const Container = styled(Box)({
    display: 'flex',
    background: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 70px',
    '& > p': {
        fontSize: 35,
        fontWeight: 700
    }
})
const FormWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    padding: 20,
    background: '#FFFFFF',
    borderRadius: 20,
    '& > *': {
        marginTop: '20px !important'
    }
})
const defaultObj = {
    profile: '',
    type: '',
    description: '',
    experience: '',
    technology: [],
    salary: ''
}
const options = {
    type: ['Online', 'Offline'],
    experience: ['0-2 Years', '3-5 Years', '5 Years or more'],
    technology: ['Java', 'JavaScript', 'React', 'Angular', 'Node.js', 'Docker', 'AWS', 'HTML', 'CSS'],
    salary: ['Rs 0-300000', 'Rs 300000-500000', 'Rs 500000-800000', 'Rs 800000-1000000', 'Rs 1000000-1500000', 'Rs 1500000-2000000', 'Rs 2000000 or more']
}

const CreatePost=()=>{
    const [data, setData] = useState(defaultObj);
    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";
    const navigate=useNavigate();
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const saveJob=async()=>{
        await savePost(data);
        navigate(routePath.posts);
    }
   
    return(
        <>
        <Header/>
        <Component>
            <Container>
            <Typography>Create a job post</Typography>
            <img src={image} alt="create" />
            </Container>
            <FormWrapper>
           <TextField 
           placeholder="Job title"
           onChange={handleChange}
           name="profile"
           />
           <Dropdown
           id='job-type-label'
           value={data.type}
           handleChange={handleChange}
           name="type"
           label="Job Type"
           options={options.type}/>
           <TextField placeholder="Job Description"
           
           />
           <Dropdown  
           name="experience"
           id='job-experience-label'
           value={data.experience}
           handleChange={handleChange}
           label="Experience"
           options={options.experience}
           />

           <Dropdown 
           name="technology"
            id='job-technology-label'
            value={data.technology}
            handleChange={handleChange}
            label="Technology"
            options={options.technology}
            multiple/>

           <Dropdown 
           name="salary"
           id='job-salary-label'
           value={data.salary}
           handleChange={handleChange}
           label="Salary"
           options={options.salary}/>

           <Button variant="contained"onClick={()=>saveJob()}> Save Job</Button>
            </FormWrapper>
        </Component>
        </>
    )
}
export default CreatePost;