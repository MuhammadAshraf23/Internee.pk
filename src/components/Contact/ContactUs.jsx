import React from 'react';

import { BsFillBuildingsFill, BsTelephone, BsLinkedin } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi'
function ContactUs() {
  return (
    <div className="flex flex-col lg:flex-col justify-center space-y-4 lg:space-y-0">
      <div className='flex flex-row'>
        <div className="lg:w-1/2 mb-3 mx-20 my-20">
          <iframe className="google-map w-full h-5/6 rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14468.480271972865!2d66.9630595!3d24.962029249999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1684627801858!5m2!1sen!2s" height="350" style={{ border: '0' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="lg:w-1/2 my-20">
          <div className="contact-info-wrap">
            <div className="contact-info flex items-center mb-3 my-10">
              <BsFillBuildingsFill className='text-green-500 text-5xl mx-5' />
              <p className="flex flex-col">
                <span className="text-indigo-800 text-sm font-bold">Office</span>
                National Incubation Center, Karachi, Pakistan
              </p>
            </div>

            <div className="contact-info flex items-center my-10 bg-blue-50 rounded-full">
              <BsLinkedin className='text-green-500 text-5xl mx-5' />
              <p className="flex flex-col py-9">
                <span className="text-indigo-800 text-sm font-bold">LinkedIn</span>
                <a href="https://www.linkedin.com/in/internee-pk-1ba44a276/" className="site-footer-link">internee-pk</a>
              </p>
            </div>

            <div className="contact-info flex items-center  my-10">
              <BsTelephone className='text-green-500 text-5xl mx-5' />
              <p className="flex flex-col">
                <span className="text-indigo-800 text-sm font-bold">Phone</span>
                <a href="https://api.whatsapp.com/send/?phone=%2B923453191638&amp;text&amp;app_absent=0" className="site-footer-link">+92 345 3191638 <br /> +92 349 2861021</a>
              </p>
            </div>

            <div className="contact-info flex items-center my-10 bg-blue-50 rounded-full">
              <TfiEmail className='text-green-500 text-5xl mx-5' />
              <p className="flex flex-col py-9">
                <span className="text-indigo-800 text-sm font-bold">Email</span>
                <a href="mailto:info@internee.pk" className="site-footer-link">info@internee.pk</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 mx-auto">
        <form className="custom-form contact-form " action="https://formsubmit.co/hammadn788@gmail.com" method="POST" role="form">
          <h2 className="text-center text-4xl font-bold mb-10">Project in mind? Let’s Talk</h2>
          <div className="flex flex-col">
            <div className='flex justify-between'>
              <div>
                <label htmlFor="full-name" className="block">Full Name</label>
                <input type="text" name="full-name" id="full-name" className="bg-blue-50 p-3 rounded-full pr-40 mt-3 border border-2 border-transparent hover:border-green-500" placeholder="Hammad Sheikh" required />
              </div>
              <div className='mb-5'>
                <label htmlFor="email" className="block">Email Address</label>
                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="bg-blue-50 p-3 rounded-full mt-3 pr-40 border border-2 border-transparent hover:border-green-500" placeholder="hammadsheikh@gmail.com" required />
              </div>
            </div>
            <label htmlFor="message" className="my-5">Message</label>
            <textarea name="message" rows="6" className="bg-blue-50 p-3 rounded-3xl border border-2 border-transparent hover:border-green-500" id="message" placeholder="What can we help you?"></textarea>
          </div>
          <div className='flex my-5'>
          <button type="submit" className="bg-green-500 text-white rounded-3xl px-10 py-4 mx-auto text-center">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
