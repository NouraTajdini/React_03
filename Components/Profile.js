import React from 'react';

const Profile = (props) => {
    return (
        
        <section className="profile">
            <h3>My Profile</h3>
            <div className="prof_parts">
                First Name: {props.firstName} <br />
                Last Name: {props.lastName} 
            </div>
            <div className="prof_parts">
                Age: {props.age} <br /> 
                Job: {props.job} <br /> 
                Email: {props.email} <br /> 
                Phone Number: {props.phoneNumber}
            </div>
            <div className="prof_parts"> 
                Hobbies: {props.hobbies} <br /> 
                Education: {props.education} 
            </div>
            {props.children}
        </section>
    )
}

export default Profile;