import "./adDetails.scss"

const AdDetails = () => {
    return (
        <div className="ad-details">
          <div className="heading">
            <div className="left">
              <h2>Ad details</h2>
            </div>
    
            <div className="right">
              <div className="edit-btn">
                Edit Details
              </div>
            </div>
          </div>
    
          <div className="ad-details-card">
            <div className="top">
              <p className="ad-title"><b>Title:</b> Jumia.com.ng black Friday sales</p>
              <p><strong>End date:</strong> June 20, 2023</p>
            </div>
            
            <div className="bottom">
                <div className="performance-chart"></div>
                <div className="reach"></div>
            </div>
          </div>
        </div>
      );
}

export default AdDetails