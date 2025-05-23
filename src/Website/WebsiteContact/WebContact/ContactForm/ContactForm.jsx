import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../Firebase";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    address: "",
    identity: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contactForm"), formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        identity: "",
        state: "",
        city: "",
        address: "",
        pincode: "",
      });
    } catch (err) {
      console.error("Error adding document: ", err);
      alert("Error submitting form!");
    }
  };

  return (
    <div className="ContactFormOuter py-10 px-10">
      <div className="text-center bg-white md:w-[55%] relative md:left-[23%] rounded-md">
        <div className="contactFormInner">
          <form className="p-5 text-base" onSubmit={handleSubmit}>
            <div className="flex gap-3 justify-center items-center uppercase">
              <div className="bg-blue-800 text-white p-1 md:p-2 rounded-md">
                <FontAwesomeIcon icon={faAddressBook} className="md:h-5" />
              </div>
              <div className="text-base md:text-2xl">
                <h3>Sign Up with us</h3>
              </div>
            </div>
            <div className="text-gray-400 mt-2 text-xs sm:text-base">
              <p>Fill out the form below and we'll get back to you.</p>
            </div>

            <div className="grid md:grid-cols-2 text-xs xs:text-sm md:text-base gap-5 mt-10">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="outline-none p-3 w-full border-2 border-gray-200 rounded-lg"
                placeholder="Enter Name"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="outline-none p-3 w-full border-2 border-gray-200 rounded-lg"
                placeholder="Enter Mobile Number"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="outline-none p-3 w-full border-2 border-gray-200 rounded-lg"
                placeholder="Enter Email Address"
              />
              <input
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="outline-none p-3 w-full border-2 border-gray-200 rounded-lg"
                placeholder="Enter State"
              />
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="outline-none p-3 w-full border-2 border-gray-200 rounded-lg"
                placeholder="Enter City"
              />
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="outline-none p-3 w-full border-2 border-gray-200 rounded-lg"
                placeholder="Enter Address"
              />
              <input
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="outline-none p-3 w-full border-2 border-gray-200 rounded-lg"
                placeholder="Enter Postal Code"
              />
              <select
                name="identity"
                value={formData.identity}
                onChange={handleChange}
                className="outline-none p-3 w-full border-2 border-gray-200 rounded-lg"
              >
                <option value="" disabled>
                  Select Identity
                </option>
                <option value="Super Distributor">Super Distributor</option>
                <option value="Distributor">Distributor</option>
                <option value="Retailer">Retailer</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="mt-10 bg-blue-800 text-white px-5 py-2 w-full outline-none rounded-md text-xs xs:text-sm md:text-base"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
