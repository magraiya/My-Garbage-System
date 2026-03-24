import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import axios from 'axios';
import RegisterComplaintForm from './RegisterComplaintForm'
import ViewRecordContent from './ViewRecordContent';
// import { useLocation } from 'react-router-dom';

const drawerWidth = 240;

const UpdateRecordForm = () => (
    <div style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>Update Record Form</Typography>
        <form className="signup-form" onSubmit={''}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={''} />
            </div>
            <div className="form-group">
                <label htmlFor="name"> Address:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={''} />
            </div>
            <div className="form-group">
                <input
                    type='submit'
                    name='Update'
                />
            </div>
        </form>
    </div>
);



const ComplaintHistoryContent = () => (
    <div style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>Complaint History</Typography>
        <p>This section will show the list of past complaints.</p>
        {/* <h1>{result.name}</h1> */}
    </div>
);

const Sidebar = ()=> {
    const [selectedForm, setSelectedForm] = useState(null);
    // const [users, setUsers] = useState([])
    // const location=useLocation()
    // alert(location.result.)
    // const user=location.state.result;

     

    // useEffect(() => {
    //     axios.get('http://localhost:3001/getUsers')
    //         .then(users => setUsers(users.data))
    //         .catch(err => console.log(err))
    // }, [])

    
    // Click Handler Function
    const handleItemClick = (formName) => {
        setSelectedForm(formName);
    };

    const renderContent = () => {
        switch (selectedForm) {
            case 'Update Record':
                return <UpdateRecordForm />;
            case 'View Record':
                return <ViewRecordContent />;
            case 'Register Complaint':
                return <RegisterComplaintForm />;
            case 'Complaint history':
                return <ComplaintHistoryContent />;
            default:
                return (
                    <Typography sx={{ marginBottom: 2 }}>
                        Welcome to the Dashboard. Please select an option from the sidebar.
                    </Typography>
                );
        }
    };

    return (
        <>
            {/* <div>  {
                users.map(user => {
                    // alert(user.name)
                    //   <h1>{user.name}</h1>
                })
            }</div> */}
            <div><Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >
                    {/* <Toolbar >
                        <Typography variant="h6" noWrap component="div">
                            Customer Dashboard
                        </Typography>
                    </Toolbar> */}
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar />
                    <Divider />
                    <List>
                        {['Update Record', 'View Record', 'Register Complaint', 'Complaint history'].map((text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() => handleItemClick(text)}>
                                    <ListItemIcon>
                                        {text === 'Update Record' && <EditIcon />}
                                        {text === 'View Record' && <VisibilityIcon />}
                                        {text === 'Register Complaint' && <EditIcon />}
                                        {text === 'Complaint history' && <VisibilityIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Drawer>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />
                    {renderContent()}
                </Box>
            </Box></div>
        </>

    );
}
export default Sidebar;