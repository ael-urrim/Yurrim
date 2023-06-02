import "./createAd.scss";
import USER from "../../media/images/user1.jpg";
import ADIMG from "../../media/images/ads.jpg";

// Icons
import { FaRegCommentAlt, FaRegEye } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";

const CreateAd = () => {
  return (
    <div className="create-ad">
      <div className="heading">
        <h2>Create Ad</h2>
      </div>

      <div className="create-ad-card">
        <div className="left">
          <form action="">
            <div className="ad-title ad-queries">
              <label htmlFor="">Ad title</label>
              <input type="text" />
            </div>

            <div className="ad-image ad-queries">
              <label htmlFor="">Ad banner</label>
              <input type="file" id="img" />
            </div>

            <div className="ad-link ad-queries">
              <label htmlFor="">Ad link</label>
              <input type="text" />
            </div>

            <div className="ad-link ad-queries">
              <label htmlFor="">Ad link short description</label>
              <input type="text" />
            </div>

            <div className="ad-link ad-queries">
              <label htmlFor="">Link button text</label>
              <input type="text" />
            </div>

            <div className="ad-description ad-queries">
              <label htmlFor="">Ad description</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div className="budget ad-queries">
              <label htmlFor="">Daily budget</label>
              <input type="number" />
            </div>

            <div className="target-audience ad-queries">
              <label htmlFor="">Target audience</label>
              <select name="" id="">
                <option className="option" value="">
                  Africa
                </option>
                <option value="">North America</option>
                <option value="">South America</option>
                <option value="">Asia</option>
                <option value="">Australia</option>
                <option value="">Austria</option>
              </select>
            </div>

            <div className="target-audience ad-queries">
              <label htmlFor="">Target age group</label>
              <select name="" id="">
                <option value="">16 - 20</option>
                <option value="">21 -25</option>
                <option value="">26 - 30</option>
                <option value="">30 - above</option>
              </select>
            </div>

            <div className="target-audience ad-queries">
              <label htmlFor="">Ad category</label>
              <select name="" id="">
                <option value="">Education</option>
                <option value="">Technologies</option>
                <option value="">Wears and clothings</option>
                <option value="">Automobile</option>
                <option value="">Affilliate marketing</option>
                <option value="">Health and care</option>
                <option value="">Religion</option>
                <option value="">Seminar</option>
              </select>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="right">
          <div className="top">
            <p>This is how your ad will appear across yurrim</p>
          </div>

          <hr />

          <div className="bottom">
            <div className="top">
              <div className="right-left">
                <img src={USER} alt="" />
              </div>

              <div className="right-right">
                <div className="authorDetails">
                  <div className="authorDetails-top">
                    <div className="authorName">Rakmod Technologies</div>
                    <p>...</p>
                  </div>
                  <div className="authorDetails-bottom">
                    <p>Promoted</p>
                  </div>
                </div>

                <div className="adDetails">
                  <p className="adDescription">
                    Join our ongoing 80% discount flash sales and also stand a chance to win  57 inch samsung smart tv.
                  </p>
                  <img src={ADIMG} alt="" className="adImage" />
                  <div className="ad-link">
                    <div className="ad-link-left">
                      <div className="one">www.jumia.com.ng</div>
                      <div className="two">
                        Join now
                      </div>
                    </div>
                    <div className="ad-link-right">
                      Get offer
                    </div>
                  </div>
                </div>

                <div className="post-reactions">
                  <BsHeart className="icon" />
                  <FaRegCommentAlt className="icon" />
                  <FaRegEye className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAd;
