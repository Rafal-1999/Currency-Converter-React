import {SectionArea, SectionBox} from "./styled";

const Section = ({ children, extraContent }) => (
    <SectionArea>
        <SectionBox>
            {children}
        </SectionBox>
        {extraContent}
    </SectionArea>
);

export default Section;
