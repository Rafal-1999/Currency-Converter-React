import { HeaderArea, HeaderOne, Description } from "./styled";

const Header = ({ title, description }) => (
    <HeaderArea>
        <HeaderOne>
            {title}
        </HeaderOne>
        <Description>
            {description}
        </Description>
    </HeaderArea>
);

export default Header;
