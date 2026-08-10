import React,{useState} from 'react';
import logo from "../Image/logo1.png";
import "../index.css";
// Now to How to submit this code 

export default function Contact(){

const [name, setName]=useState("");
const [email, setEmail]=useState("");
const [message,setMessage]=useState("");

function encode(data) {
  return Object.keys(data)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}

function handleSubmit(e) {
  e.preventDefault();
  if (!name.trim() || !email.trim() || !message.trim()) {
    alert("Please fill in all fields!");
    return;
  }
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", name, email, message }),
  })
    .then(() => {
      alert("✓ Message sent successfully! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch((error) => alert("Error sending message: " + error));
}

  return (
    <>
    <section id="contact" className="relative py-10">
      <div className="Contact">
        <img src={logo} alt="Contact"/>
      </div>
     
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            // frameBorder={0}
            // marginHeight={0}
            // marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5753244309753!2d77.59456!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1a1a1a1a1a1d%3A0x1a1a1a1a1a1a1a1a!2sBangalore%2C%20India!5e0!3m2!1sen!2sin!4v1692691200000"
          />
          <div className="bg-gray-900 relative flex flex-col py-7 rounded shadow-md max-h-fit w-full" >
            
            <div className="px-6 mb-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mb-3">
                EMAIL
              </h2>
              <a href="mailto:pggupta1317@gmail.com"  className="text-indigo-400 leading-relaxed hover:text-indigo-300 transition">
                pggupta1317@gmail.com
              </a>
              <p className="text-xs text-gray-400 mt-2">Click to send an email directly</p>
            </div>

            <div className="px-6 mb-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mb-3">
                PHONE
              </h2>
              <a href="tel:+919399810961"  className="text-indigo-400 leading-relaxed hover:text-indigo-300 transition">
                +91 9399810961
              </a>
              <p className="text-xs text-gray-400 mt-2">Call me directly</p>
            </div>

            <div className="px-6 mb-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mb-3">
                CONNECT WITH ME
              </h2>
              <a 
                href="https://www.linkedin.com/in/pragati-gupta-700321211/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded text-sm transition font-semibold">
                → Send LinkedIn Message
              </a>
            </div>

            <div className="px-6 mb-6 border-t border-gray-700 pt-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mb-3">
                LOCATION
              </h2>
              <p className="text-gray-300 font-light">
                Bangalore, India
              </p>
            </div>

            <div className="px-6 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-500">
                💡 Fastest response via direct email or LinkedIn message
              </p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-blue-500 sm:text-4xl text-3xl mb-1 font-medium title-font">
            Get In Touch
          </h2>
          <p className="leading-relaxed mb-5 text-gray-700">
            I'm actively looking for new opportunities. Whether you have a role in mind or just want to connect, feel free to reach out!
          </p>
          <p className="text-sm text-green-600 font-semibold mb-5 bg-green-50 p-3 rounded">
            ✓ I typically respond within 24 hours
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="w-full bg-gray-700 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
              className="w-full bg-gray-700 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your opportunity or project..."
              required
              className="w-full bg-gray-700 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e)=>setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-green-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 active:scale-95 rounded text-lg font-semibold transition-all duration-200">
            Send Message →
          </button>
          <p className="text-xs text-gray-500 mt-4">
            Or connect directly via <a href="https://www.linkedin.com/in/pragati-gupta-700321211/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a> or <a href="mailto:pggupta1317@gmail.com" className="text-blue-400 hover:underline">Email</a>
          </p>
        </form>
      </div>
    </section>
    </>
  )
}

