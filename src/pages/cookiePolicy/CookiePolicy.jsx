import "./cookiePolicy.scss";

const CookiePolicy = () => {
  return (
    <div className="cookie-policy">
      <div className="cookie-policy-card">
        <h2>Cookie Policy</h2>
        <hr />
        <div className="body">
          <h3>Effective Date: [Insert Date]</h3>
          <p>
            This Cookie Policy explains how Rakmod Technologies ("we," "us," or
            "our") uses cookies and similar tracking technologies when you visit
            our website [Insert Website URL] ("Website"). By accessing or using
            our Website, you consent to the use of cookies as described in this
            policy.
          </p>
          <h3>What are cookies?</h3>
          <p>
            Cookies are small text files that are placed on your computer or
            mobile device when you visit a website. They are widely used to make
            websites work more efficiently, enhance user experience, and provide
            information to website owners.
          </p>
          <h3>How do we use cookies?</h3>
          <p>We use cookies for various purposes on our Website, including:</p>
          <div className="indent">
            <h3>Essential Cookies:</h3>
            <p>
              These cookies are necessary for the operation of our Website. They
              enable you to navigate the site and use its features, such as
              accessing secure areas and making use of the shopping cart.
            </p>
            <h3>Analytical and Performance Cookies:</h3>
            <p>
              These cookies help us understand how visitors interact with our
              Website by collecting information anonymously. They provide us
              with insights into website traffic, popular pages, and other
              analytics that help us improve the performance and functionality
              of our Website.
            </p>
            <h3>Functionality Cookies:</h3>
            <p>
              These cookies allow our Website to remember choices you make and
              provide enhanced, personalized features. They may also be used to
              remember changes you make to text size, fonts, and other
              customizable elements of our Website.
            </p>
            <h3>Advertising and Targeting Cookies:</h3>
            <p>
              These cookies are used to deliver advertisements that are relevant
              to you and your interests. They are also used to limit the number
              of times you see an ad and measure the effectiveness of
              advertising campaigns. These cookies may be placed by third-party
              advertising networks with our permission.
            </p>
          </div>
          <h3>Third-Party Cookies:</h3>
          <p>
            We may also allow third-party service providers, such as analytics
            companies and advertisers, to place cookies on our Website. These
            third parties may collect information about your online activities
            over time and across different websites when you use our Website.
          </p>
          <h3>Your Cookie Choices:</h3>
          <p>
            You can manage your cookie preferences and opt-out of certain
            cookies by adjusting the settings in your browser. However, please
            note that blocking or deleting cookies may impact your experience on
            our Website and limit certain features.
          </p>
          <p>
            For more information about managing cookies, visit the help or
            settings page of your browser or refer to the following external
            resources:
          </p>
          <ul>
            <li>Google Chrome: support.google.com/chrome/answer/95647</li>
            <li>
              Mozilla Firefox:
              support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
            </li>
            <li>
              Safari:
              support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
            </li>
            <li>
              Microsoft Edge:
              support.microsoft.com/en-us/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d
            </li>
          </ul>
          <h3>Updates to this Cookie Policy:</h3> 
          <p>We may update this Cookie Policy from
          time to time to reflect changes in technology, legal requirements, or
          our privacy practices. Any updates will be posted on this page with a
          revised effective date. We encourage you to review this policy
          periodically for any changes. Contact Us: If you have any questions
          about our use of cookies or this Cookie Policy, please contact us at
          [Insert Contact Information]. Please note that this Cookie Policy
          should be read in conjunction with our Privacy Policy, which explains
          how we collect, use, and protect your personal information.</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
