import React from "react";
function Footer() {
  return (
    <footer
      className=" border-top"
      style={{ backgroundColor: "rgb(250,250,250)" }}
    >
      <div className="container p-2 mt-3">
        <div className=" row mt-2 ">
          <div className="col mt-2">
            <img
              className="mb-3"
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "60%" }}
            />
            <p className="text-muted " style={{ fontSize: "12.8px" }}>
              &copy; 2010 - 2025, Zerodha Broking Ltd.
              <br /> All rights reserved.
            </p>
            <a
              href="#"
              className="p-2"
              style={{ color: "black", fontSize: "20px" }}
            >
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="#"
              className="p-2"
              style={{ color: "black", fontSize: "20px" }}
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href="#"
              className="p-2"
              style={{ color: "black", fontSize: "20px" }}
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="#"
              className="p-2"
              style={{ color: "black", fontSize: "20px" }}
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="p-2"
              style={{ color: "black", fontSize: "20px" }}
            >
              <i class="fa-brands fa-telegram"></i>
            </a>
          </div>
          <div className="col footer-links ">
            <p className="  fs-5  mb-3 " style={{ fontSize: "18px" }}>
              Company
            </p>

            <div className="pb-2">
              <a href="#">Products</a>
            </div>

            <div className="pb-2">
              <a href="#">Pricing</a>
            </div>

            <div className="pb-2">
              <a href="#">Refferal programmer</a>
            </div>

            <div className="pb-2">
              <a href="#">Careers</a>
            </div>

            <div className="pb-2">
              <a href="#">Zerodha.tech</a>
            </div>

            <div className="pb-2">
              <a href="#">Press & media</a>
            </div>

            <div className="pb-2">
              <a href="#">Zerodha cares(CSR)</a>
            </div>
          </div>
          <div className="col footer-links">
            <p className="fs-5  mb-3" style={{ fontSize: "18px" }}>
              Support
            </p>
            <div className="pb-2">
              <a href="#">Contact</a>
            </div>

            <div className="pb-2">
              <a href="#">Support portal</a>
            </div>

            <div className="pb-2">
              <a href="#">Z-Connect blog</a>
            </div>

            <div className="pb-2">
              <a href="#">List of charges</a>
            </div>

            <div className="pb-2">
              <a href="#">Zerodha.tech</a>
            </div>

            <div className="pb-2">
              <a href="#">Downlods & resources</a>
            </div>
          </div>
          <div className="col footer-links">
            <p className="fs-5  mb-3" style={{ fontSize: "18px" }}>
              Account
            </p>
            <div className="pb-2">
              <a href="#">Open an account</a>
            </div>

            <div className="pb-2">
              <a href="#">Funds transfer</a>
            </div>

            <div className="pb-2">
              <a href="#">60 day challenge</a>
            </div>
          </div>
          <div className="mt-5" style={{ fontSize: "11px", color: "#9B9B9B" }}>
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
