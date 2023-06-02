import { useState } from "react";
import "./fundAccount.scss";
import { AiOutlineClose } from "react-icons/ai";

const FundAccount = () => {
  const [openPaymentPopup, setOpenPaymentPopup] = useState(false);

  const togglePaymentPopup = () => {
    setOpenPaymentPopup(!openPaymentPopup);
  };

  return (
    <div className="fund-account">
      <div className="heading">
        <div className="left">
          <h2>Fund account</h2>
        </div>

        <div className="right">
          <div className="balance">
            <p>Current balance:</p>
            <h3>N20000</h3>
          </div>
          <div onClick={togglePaymentPopup} className="pay-btn">
            Pay now
          </div>
        </div>
      </div>

      {/* Payment popup */}
      {openPaymentPopup && (
        <div className="payment-popup">
          <div className="payment-card">
            <AiOutlineClose
              className="close-btn"
              onClick={togglePaymentPopup}
            />
            <p>Fund your ad account</p>
            <form action="">
              <div className="payment-field">
                <label htmlFor="">Select payment method</label>
                <select name="" id="">
                  <option value="1">Yurrim Coin (YRM)</option>
                  <option value="2">Naira (NGN)</option>
                </select>
              </div>
              <div className="payment-field">
                <label htmlFor="">Enter ammount</label>
                <input type="number" />
              </div>
              <button type="submit">Proceed</button>
            </form>
          </div>
        </div>
      )}

      <div className="fund-account-card">
        <div className="top">
          <h3>Transaction history</h3>
          <input type="date" />
        </div>
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment method</th>
              <th>Payment status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>126BH738AD65TH78UF78</td>
              <td>July 13, 2022</td>
              <td>N20000</td>
              <td>Bank transfer</td>
              <td>Success</td>
              <td>
                <div
                  onClick={() => {
                    alert(
                      "You are about to delete this transaction record. This action cannot be reversed."
                    );
                  }}
                >
                  Delete
                </div>
              </td>
            </tr>

            <tr>
              <td>098BH738AD12TH78TH78</td>
              <td>Jan 25, 2023</td>
              <td>N50000</td>
              <td>Debit card</td>
              <td>Success</td>
              <td>
                <div>Delete</div>
              </td>
            </tr>

            <tr>
              <td>913BH738AD12TH78TH78</td>
              <td>May 12, 2023</td>
              <td>N45000</td>
              <td>Cryptocurrency</td>
              <td>Success</td>
              <td>
                <div>Delete</div>
              </td>
            </tr>

            <tr>
              <td>528BH738AD12TH78TH78</td>
              <td>April 25, 2023</td>
              <td>N55000</td>
              <td>Cryptocurrency</td>
              <td>Success</td>
              <td>
                <div>Delete</div>
              </td>
            </tr>

            <tr>
              <td>693BH65892650H78UF78</td>
              <td>Mar 10, 2023</td>
              <td>N5000</td>
              <td>Bank transfer</td>
              <td>Failed</td>
              <td>
                <div>Delete</div>
              </td>
            </tr>

            <tr>
              <td>375BH73WEQ5TH56BF78</td>
              <td>May 16, 2023</td>
              <td>N200000</td>
              <td>Bank transfer</td>
              <td>Success</td>
              <td>
                <div>Delete</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FundAccount;
