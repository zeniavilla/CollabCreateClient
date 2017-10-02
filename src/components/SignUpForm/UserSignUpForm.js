import React from 'react';

// styles
import '../../styles/components/UserForm.css';

// components
import { Col } from 'react-bootstrap';

const UserSignUpForm = props => {
  
  const { handleOnClick, handleOnChange, handleOnSubmit, services } = props;
  const { name, email, password, password_confirmation, bio, bio_img, location, phone_number, website, instagram, likes, quote } = props.userFormData;
  const { errors } = props.currentUser;

  return (
    <div id="wrapper">
      <form className="user-form" onSubmit={handleOnSubmit}>
      <h2>Create account</h2>
        <label htmlFor="name">Full name</label>
        <div className="form-field">
          <input type="text" id="name" placeholder={(errors) ? errors.name : null} onChange={handleOnChange} value={name || ''} />
        </div>
        
        <label htmlFor="email">Email</label>
        <div className="form-field">
          <input type="email" id="email" placeholder={(errors) ? errors.email : null} onChange={handleOnChange} value={email || ''} />
        </div>
        
        <label htmlFor="password">Password</label>
        <div className="form-field">
          <input type="password" id="password" placeholder={(errors) ? errors.password : null} onChange={handleOnChange} value={password || ''} />
        </div>

        <label htmlFor="password_confirmation">Confirm password</label>
        <div className="form-field">
          <input type="password" id="password_confirmation" onChange={handleOnChange} value={password_confirmation || ''} />
        </div>

        <label htmlFor="bio">Introduce yourself</label>
        <div className="form-field">
          <textarea id="bio" placeholder={(errors) ? errors.bio : null} onChange={handleOnChange} value={bio || ''} />
        </div>

        <label htmlFor="bio_img">Profile image URL</label>
        <div className="form-field">
          <input type="text" id="bio_img" placeholder={(errors) ? errors.bio_img : null} onChange={handleOnChange} value={bio_img || ''} />
        </div>

        <label htmlFor="location">Location</label>
        <div className="form-field">
          <input type="text" id="location" placeholder={(errors) ? errors.location : null} onChange={handleOnChange} value={location || ''} />
        </div>

        <label htmlFor="phone_number">Phone number</label>
        <div className="form-field">
          <input type="text" id="phone_number" placeholder={(errors) ? errors.phone_number : null} onChange={handleOnChange} value={phone_number || ''} />
        </div>

        <label htmlFor="website">Website</label>
        <div className="form-field">
          <input type="text" id="website" placeholder={(errors) ? errors.website : null} onChange={handleOnChange} value={website || ''} />
        </div>

        <label htmlFor="instagram">Instagram username</label>
        <div className="form-field">
          <input type="text" id="instagram" placeholder={(errors) ? errors.instagram : null} onChange={handleOnChange} value={instagram || ''} />
        </div>

        <label htmlFor="quote">Quote</label>
        <div className="form-field">
          <input type="text" id="quote" placeholder={(errors) ? errors.quote : null} onChange={handleOnChange} value={quote || ''} />
        </div>

        <label>Select services</label>
        <div className="form-field-check clearfix">
          {
            services.map(service => 
              <Col sm={4}>
                <span className="form-checkboxes">
                  {service.name} 
                  <input type="checkbox" name={service.name} value={service.id} onChange={handleOnChange} />
                </span>
              </Col>
            )
          }
          
        </div>

        <div className="form-action">
          <button className="btn-form">Sign Up</button>
        </div>
      </form>
      {/* <button name="facebook" onClick={handleOnClick} className="btn-insta">Continue with Facebook</button> */}
    </div>
  )
}

export default UserSignUpForm;