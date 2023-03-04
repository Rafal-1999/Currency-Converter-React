import { FooterArea, FooterCopyright, FooterText } from "./styled";

const Footer = ({ creator, designer, copyright }) => (
    <FooterArea>
        <FooterCopyright>
            <FooterText>
                {creator}
            </FooterText>
            <FooterText>
                {designer}
            </FooterText>
            <FooterText>
                {copyright}
            </FooterText>
        </FooterCopyright>
    </FooterArea>
);

export default Footer;
