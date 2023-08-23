import { StyledError } from "./styled";

const Error = ({ errorInfo }) => (
    <StyledError>
        {errorInfo}
    </StyledError>
);

export default Error;
