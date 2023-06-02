import './contactUs.scss'

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-us-card">
        <div className="title">Contact Us</div>
        <hr />

        <div className="body">
          <p>If you have any enquiry or report, send an email to <small>feedback@yurrim.com</small> or fill the contact us form below:</p>

          <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' />

            <label htmlFor="email">Email Address</label>
            <input type="email" name='email' id='email' />

            <label htmlFor="message"> Message/Complaints</label>
            <textarea name="message" id="message" cols="30" rows="10" ></textarea>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs