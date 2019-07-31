import React from "react";

const BadgeForm = ({
  data,
  handlerData,
  // onChange,
  onSubmit,
  isLoading,
  edit
}) => {
  const { firstName, lastName, email, jobTitle, twitter } = data;

  const handleChange = e => {
    const { name, value } = e.target;
    handlerData({ ...data, [name]: value });
  };

  return (
    <div className="">
      {/* Header */}
      <h1 className="">{edit ? "Editar" : "Registro"}</h1>

      {/* Form */}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            required
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
              onChange={handleChange}
              required
              type="text"
              value={twitter}
            />
          </div>
        </div>

        <button disabled={isLoading} className="btn btn-primary">
          {edit ? "Actualizar" : "Crear Badge"}
        </button>
      </form>
    </div>
  );
};

export default BadgeForm;
