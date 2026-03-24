import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState } from 'react';

const RegisterComplaintForm = () => {
    // const [formSubmited, setFormSubmittedd] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        // alert(`${date},${time},${description}`)
        axios.post('http://localhost:3001/registerComplaint', { date, time, description })
            .then(response => {
                if (response.status === 201) {
                    // console.log('Complaint successful Registed', response.data);
                    // setFormSubmittedd(true)
                    window.alert("Complaint successful Registed")
                    // window.location.reload()
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    window.alert('You have already registered your complaint today.');
                    window.location.reload()

                } else {
                    console.error('There was an error during complaint register:', error);
                    window.alert('An error occurred during complaint register. Please try again later.');
                    window.location.reload()

                }
            });
    };

    return (
        // Register Complaint Form
        <div className='container' >
            <Typography variant="h5" gutterBottom align='center' marginTop={-6}>Register Complaint</Typography>
            <form
                className="register-form" onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="time">Scheduled Pickup Date</label>
                    <input
                        type="date"
                        id="date"
                        name='date'
                        onChange={e => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Scheduled Pickup Time</label>
                    <input type="time"
                        id="time"
                        name='time'
                        onChange={e => setTime(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Complaint Description</label>
                    <textarea
                        id="description"
                        name='description'
                        rows="15"
                        cols="150"
                        // placeholder='Write Some brief information for your Complaint'
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="signup-button submit-button">Register</button>
                <div className="form-footer">
                    {/* {formSubmited&&<p>Complaint successful Registed</p>} */}
                </div>
            </form>
        </div>
    );
}
export default RegisterComplaintForm;
