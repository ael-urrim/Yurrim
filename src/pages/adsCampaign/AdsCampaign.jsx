import { Link } from "react-router-dom";
import "./adsCampaign.scss";

import {AiOutlinePlus} from 'react-icons/ai';

const AdsCampaign = () => {
  return (
    <div className="ads-campaign">
      <div className="heading">
        <h2>Ads Campaign</h2>

        <h3>Ads ID: 2674986374</h3>
      </div>

      <div className="ads-campaign-card">
        <div className="create">
          <Link to="/create-ad" className="link">
            Create
            <AiOutlinePlus className="icon" />
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="select" />
              </th>
              <th>On/Off</th>
              <th>Campaign</th>
              <th>Status</th>
              <th>Budget</th>
              <th>Reach</th>
              <th>Impression</th>
              <th>Amount spent</th>
              <th>Ends</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input type="checkbox" className="select" />
              </td>
              <td>
                <label htmlFor="" className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </td>
              <td>
                <Link to="/ad-details/3" className="link">
                  Jumia.com.ng black Friday sales
                </Link>
              </td>
              <td>N10000</td>
              <td>Disabled</td>
              <td>13k people</td>
              <td>10k</td>
              <td>N2000</td>
              <td>June 20, 2023</td>
            </tr>

            <tr>
              <td>
                <input type="checkbox" className="select" />
              </td>
              <td>
                <label htmlFor="" className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </td>
              <td>
                <Link to="/ad-details/3" className="link">
                  Konga summer sales
                </Link>
              </td>
              <td>N20000</td>
              <td>Active</td>
              <td>10k people</td>
              <td>14k</td>
              <td>N6000</td>
              <td>May 20, 2023</td>
            </tr>

            <tr>
              <td>
                <input type="checkbox" className="select" />
              </td>
              <td>
                <label htmlFor="" className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </td>
              <td>
                <Link to="/ad-details/3" className="link">
                  Udemy flash sales
                </Link>
              </td>
              <td>N100000</td>
              <td>Active</td>
              <td>30k people</td>
              <td>18k</td>
              <td>N20000</td>
              <td>June 10, 2023</td>
            </tr>

            <tr>
              <td>
                <input type="checkbox" className="select" />
              </td>
              <td>
                <label htmlFor="" className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </td>
              <td>
                <Link to="/ad-details/3" className="link">
                  Glo data promo
                </Link>
              </td>
              <td>N50000</td>
              <td>Disabled</td>
              <td>22k people</td>
              <td>26k</td>
              <td>N30000</td>
              <td>June 30, 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdsCampaign;
