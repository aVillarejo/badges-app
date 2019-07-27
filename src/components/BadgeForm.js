import React from "react";

const BadgeForm = ({ data, onChange, onSubmit }) => {
  const { firstName, lastName, email, jobTitle, twitter } = data;
  return (
    <div className="">
      {/* Header */}
      <h1 className="">Registro</h1>

      {/* Form */}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            required
            onChange={onChange}
            type="text"
            name="firstName"
            className="form-control"
            value={firstName}
          />
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input
            required
            onChange={onChange}
            type="text"
            name="lastName"
            className="form-control"
            value={lastName}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            required
            onChange={onChange}
            type="email"
            name="email"
            className="form-control"
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Job Title</label>
          <input
            required
            onChange={onChange}
            type="text"
            name="jobTitle"
            className="form-control"
            value={jobTitle}
          />
        </div>

        <div className="form-group">
          <label>Twitter</label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input
              className="form-control"
              name="twitter"
              onChange={onChange}
              required
              type="text"
              value={twitter}
            />
          </div>
        </div>

        <button
          // onClick={handleClick}
          className="btn btn-primary"
        >
          Crear Badge
        </button>
      </form>
    </div>
  );
};

export default BadgeForm;
