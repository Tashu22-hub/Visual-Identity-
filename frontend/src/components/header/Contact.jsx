import React, { useState } from "react";
import axios from "axios";
// import contactImage from "./contact.png"; // Ensure correct file extension
import "./Contact.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contact from "../../../public/contact.png";

function Contactme() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://visual-identity-backend.onrender.com/contact", formData);
      toast.success("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "", message: "" });
    } catch (error) {
      toast.error("Error sending message!");
    }
  };

  return (
    <div className="Contact-section">
      <ToastContainer /> {/* Ensure this is included to show toasts */}
      <img className="animationss" src={contact} alt="Contact" />

      <div className="Contact-form-section animation">
        <h3>Get In Touch</h3>
        <form onSubmit={handleSubmit}>
          <input name="firstName" type="text" placeholder="First Name" autoComplete="off" value={formData.firstName} onChange={handleChange} required />
          <input name="lastName" type="text" placeholder="Last Name" autoComplete="off" value={formData.lastName} onChange={handleChange} required /> <br />
          <input name="email" type="email" placeholder="Email Address" autoComplete="off" value={formData.email} onChange={handleChange} required />
          <input name="phoneNumber" type="text" placeholder="Phone No." autoComplete="off" value={formData.phoneNumber} onChange={handleChange} required />
          <br />
          <textarea name="message" cols="30" rows="10" placeholder="Message" autoComplete="off" value={formData.message} onChange={handleChange} required></textarea> <br />
          <button id="Contactss" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contactme;
