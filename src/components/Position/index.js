import { BoxPosition } from "./styled";

const Position = ({
    isTopLeft,
    isTop,
    isTopRight,
    isLeft1,
    isRight1,
    isLeft2,
    isCenter,
    isBottomLeft,
    isBottomRight,
    children
}) => (
    <BoxPosition
        topLeft={isTopLeft}
        top={isTop}
        topRight={isTopRight}
        left1={isLeft1}
        right1={isRight1}
        left2={isLeft2}
        center={isCenter}
        bottomLeft={isBottomLeft}
        bottomRight={isBottomRight}
    >
        {children}
    </BoxPosition>
);

export default Position;
