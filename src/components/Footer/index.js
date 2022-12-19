import "./style.css";

const Footer = ({ creator, designer, copyright }) => (
    <footer className="footer">
        <div className="footer__copyright">
            <p className="footer__text">
                {creator}
            </p>
            <p className="footer__text">
                {designer}
            </p>
            <p className="footer__text">
                {copyright}
            </p>
        </div>
    </footer>
);

export default Footer;
