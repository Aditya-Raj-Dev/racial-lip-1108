import React from 'react';
import './Footer.css';
import facebook from '../Image/facebook.png';
import twitter from '../Image/twitter.png';
import linkedin from '../Image/linkedin.png';
import youtube from '../Image/youtube.png';
import instagram from '../Image/instagram.png';
import whatsapp from '../Image/whatsapp.png';

export default function Footer() {
  return (
    <>
      <div className="Main_div">
        <div className="footer_complete_border">
          <div className="footer_left">
            <img
              style={{
                marginBottom: '20px',
                width: '80px',
                height: '40px',
              }}
              src="https://kettocdn.gumlet.io/images/logo-dark-bg.svg?w=80&dpr=2.0"
              alt="image"
            />
            <div className="share_icon">
              <img src={facebook} />
              <img src={twitter} />
              <img src={linkedin} />
              <img src={youtube} />
              <img src={instagram} />
              <img src={whatsapp} />
            </div>
            <h2 className="sharereate">1.5M +</h2>
            <span className="leftspan">Followers</span>
            <div style={{ fontSize: '17px', marginTop: '20px' }}>
              <b className="btag1">For any queries</b>
              <br />
              <b className="btag1">Email: info@ketto.org</b>
              <br />
              <b className="btag1">Contact No: +91 9930088522</b>
              <br />
            </div>
          </div>
          <div className="footer_right">
            <div>
              <h4 className="footer_right_h4">Causes</h4>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Medical crowdfunding
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Cancer Crowdfunding
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Education Crowdfunding
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Creative Fundraising
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Child Welfare
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Animal Fundraisers
                </span>
              </div>
              <span className="footer_right_span">
                COVID-19 Relief Fund
              </span>
            </div>
            <div>
              <h4 className="footer_right_h4">How it works?</h4>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Fundraising for NGOs
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Sponsor A Child
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Fundraising Tips
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  What is Crowdfunding?
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">Corporates</span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Withdraw Funds
                </span>
              </div>
              <span className="footer_right_span">
                Browse Fundraiser
              </span>
            </div>
            <div>
              <h4 className="footer_right_h4">About Us</h4>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">Team Ketto</span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">In The News</span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Our Partners
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">Careers</span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">Ketto Blog</span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Success Stories
                </span>
              </div>
            </div>
            <div>
              <h4 className="footer_right_h4">Support</h4>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Medical Finance
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  FAQs & Help Center
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Are Ketto Campaigns Genuine?
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Fundraiser Video
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Trust & Safety
                </span>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="footer_right_span">
                  Plans & Pricing
                </span>
              </div>
              <span className="footer_right_span">Contact Us</span>
            </div>
          </div>
        </div>
        <div
          style={{
            borderBottom: ' 2px solid #2b5958',
            width: '80%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div style={{ padding: '15px' }}>
            <img
              style={{ height: '30px', width: '406px' }}
              src="https://ketto.gumlet.io/assets/images/homepage/footer-secured-card.png?w=457&dpr=2.0"
              alt="image"
            />
          </div>
        </div>
        <div className="footer_last">
          Copyright © 2022 Ketto Online Ventures Pvt Ltd. All Rights
          Reserved. Terms of Use | Privacy Policy |AML Policy | Use of
          cookies
        </div>
        <div style={{ height: '100px' }} />
      </div>
      <div>
        <h3 className="last_footer_h3">
          What Is Crowdfunding and How Does It Work?
        </h3>
      </div>
    </>
  );
}
