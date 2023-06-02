import './reportProblem.scss'

const ReportProblem = () => {
  return (
    <div className="report-problem">
      <div className="heading">
        <h2>Report a problem</h2>
      </div>
      <div className="report-problem-card">
      <div className="body">
          <p>Do you have any problem with creating ads, funding your ad account or have an enquiry related to ads? kindly fill the form below and explain the issue as clearly as possible.</p>

          <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' />

            <label htmlFor="email">Email Address</label>
            <input type="email" name='email' id='email' />

            <label htmlFor="message"> Report/inquiry</label>
            <textarea name="message" id="message" cols="30" rows="10" ></textarea>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReportProblem