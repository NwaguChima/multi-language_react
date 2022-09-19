import React from "react";

const Profile = () => {
  return (
    <div className="container mt-5 col-9 col-md-6">
      <h1 className="text-center">Profile</h1>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="John Doe"
          id="name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          className="form-control"
          placeholder="25"
          id="age"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          className="form-control"
          placeholder="john@mail.com"
          id="email"
        />
      </div>
      <br />
      <div className="text-center">
        <button className="btn btn-dark">Submit</button>
      </div>
    </div>
  );
};

export default Profile;
