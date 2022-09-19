import React from "react";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation(["profile", "common"]);
  console.log(t());

  return (
    <div className="container mt-5 col-9 col-md-6">
      <h1 className="text-center">{t("common:profile")}</h1>

      <div className="form-group">
        <label htmlFor="name">{t("profile:name")}:</label>
        <input
          type="text"
          className="form-control"
          placeholder="John Doe"
          id="name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">{t("profile:age")}:</label>
        <input
          type="number"
          className="form-control"
          placeholder="25"
          id="age"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">{t("profile:email")}:</label>
        <input
          type="text"
          className="form-control"
          placeholder="john@mail.com"
          id="email"
        />
      </div>
      <br />
      <div className="text-center">
        <button className="btn btn-dark">{t("profile:submit")}</button>
      </div>
    </div>
  );
};

export default Profile;
