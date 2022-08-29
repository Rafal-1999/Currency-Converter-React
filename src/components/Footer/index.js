const Footer = ({ copyright, creator, designer }) => (
    <footer className="footer">
        <div className="footer__copyright">
            <p className="footer__text">
                {copyright}
            </p>
            <p className="footer__text">
                {creator}
            </p>
            <p className="footer__text">
                {designer}
            </p>
        </div>
    </footer>
);

export default Footer;
