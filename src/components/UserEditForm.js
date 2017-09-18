import React from 'react';

const UserEditForm = props => {
  const { handleOnChange, handleOnSubmit, currentUser, services } = props;
  const { name, email, password, password_confirmation, bio, bio_img, location, phone_number, website, instagram } = props.userFormData;

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="form-field">
        <input type="text" id="name" placeholder={currentUser.name} onChange={handleOnChange} value={name} />
      </div>

      <div className="form-field">
        <input type="email" id="email" placeholder={currentUser.email} onChange={handleOnChange} value={email} />
      </div>

      <div className="form-field">
          <input type="password" id="password" placeholder="New password" onChange={handleOnChange} value={password} />
        </div>

        <div className="form-field">
          <input type="password" id="password_confirmation" placeholder="Confirm password" onChange={handleOnChange} value={password_confirmation} />
        </div>

        <div className="form-field">
          <input type="text" id="bio" placeholder={currentUser.bio} onChange={handleOnChange} value={bio} />
        </div>

        <div className="form-field">
          <input type="text" id="bio_img" placeholder={currentUser.bio_img} onChange={handleOnChange} value={bio_img} />
        </div>

        <div className="form-field">
          <input type="text" id="location" placeholder={currentUser.location} onChange={handleOnChange} value={location} />
        </div>

        <div className="form-field">
          <input type="text" id="phone_number" placeholder={currentUser.phone_number} onChange={handleOnChange} value={phone_number} />
        </div>

        <div className="form-field">
          <input type="text" id="website" placeholder={currentUser.website} onChange={handleOnChange} value={website} />
        </div>

        <div className="form-field">
          <input type="text" id="instagram" placeholder={currentUser.instagram} onChange={handleOnChange} value={instagram} />
        </div>

        <div className="form-field">
          {
            services.map(service => 
              <span key={service.id} className="form-checkboxes">
                {service.name} 
                <input type="checkbox" name={service.name} value={service.id} onChange={handleOnChange} />
              </span>
            )
          }
        </div>

        <div className="form-action">
          <button className="btn-primary">Edit</button>
        </div>
    </form>
  )
}

export default UserEditForm;