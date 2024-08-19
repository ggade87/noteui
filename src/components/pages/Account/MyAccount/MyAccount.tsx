import React, { useState } from "react";
import "./MyAccount.css";
const MyAccount = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [profession, setProfession] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const handleProfilePictureChange = (event: any) => {
    setProfilePicture(event.target.files[0]);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("mobileNumber", mobileNumber);
    formData.append("profession", profession);
    formData.append("mobile", mobile);
    formData.append("email", email);
    formData.append("profilePicture", profilePicture);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tr>
          <td>Name</td>
          <td>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
            />
          </td>
        </tr>
        <tr>
          <td>Mobile Number</td>
          <td>
            <input
              type="tel"
              value={mobileNumber}
              onChange={(event) => setMobileNumber(event.target.value)}
              placeholder="Mobile Number"
            />
          </td>
        </tr>
        <tr>
          <td>Profession</td>
          <td>
            <input
              type="text"
              value={profession}
              onChange={(event) => setProfession(event.target.value)}
              placeholder="Profession"
            />
          </td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            <input
              disabled
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
          </td>
        </tr>
        <tr>
          <td>Profile Picture</td>
          <td>
            <input
              type="file"
              onChange={handleProfilePictureChange}
              placeholder="Profile Picture"
            />
          </td>
        </tr>
        <tr>
          <td>
            <button type="submit">Submit</button>
          </td>
        </tr>
      </table>
    </form>
  );
};

export default MyAccount;
