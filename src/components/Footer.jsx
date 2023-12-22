import { Col, Row } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <Row className="text-center mt-5">
        <Col xs={6} className="offset-3">
          <div className="d-flex justify-content-start text-left mb-2 iconsFooter">
            <FaInstagram className="iconsFooter" />
            <FaFacebook className="iconsFooter" />
            <FaTwitter className="iconsFooter" />
            <FaYoutube className="iconsFooter" />
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#footer" alt="footer link">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="#footer" alt="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="#footer" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="#footer" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#footer" alt="footer-link">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href="#footer" alt="footer-link">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href="#footer" alt="footer-link">
                      Legal Notices
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#footer" alt="footer link">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href="#footer" alt="footer link">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href="#footer" alt="footer link">
                      Cookie Preferences
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#footer" alt="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="#footer" alt="footer link">
                      Term of Use
                    </a>
                  </p>
                  <p>
                    <a href="#footer" alt="footer link">
                      Corporate Information
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </div>
          <Row>
            <Col className="text-left mb-2">
              <button type="button" className="d-flex btn btn-sm footer-button rounded-0 mt-3">
                Service Code
              </button>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex text-left mb-2 mt-2 copyright">© 1997-2022 NetFlix, Inc</Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};
export default Footer;
