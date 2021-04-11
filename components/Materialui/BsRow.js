import styled from "styled-components";
import { Row } from "react-bootstrap";

const StyledRowComponent = styled(Row)`
  margin-left: 0;
  margin-right: 0;
  justify-content: ${(props) => props.jc};
`;

const StyledRow = (props) => {
  return <StyledRowComponent {...props} />;
};

StyledRow.defaultProps = {
  "justify-content": "center",
};

export default StyledRow;
