import { css } from 'styled-components';

export const gridBackground = css`
  background:
    linear-gradient(-90deg,rgba(0,0,0,.02) 1px,transparent 0),
    linear-gradient(rgba(0,0,0,.02) 1px,transparent 0),
    linear-gradient(-90deg,rgba(0,0,0,.03) 1px,transparent 0),
    linear-gradient(rgba(0,0,0,.03) 1px,transparent 0),
    linear-gradient(transparent 4px,#f5f5f5 0,#f5f5f5 97px,transparent 0),
    linear-gradient(-90deg,#e5e5e5 1px,transparent 0),
    linear-gradient(-90deg,transparent 4px,#f5f5f5 0,#f5f5f5 97px,transparent 0),
    linear-gradient(#e5e5e5 1px,transparent 0),#f5f5f5;
  background-size:
    10px 10px,
    10px 10px,
    100px 100px,
    100px 100px,
    100px 100px,
    100px 100px,
    100px 100px,
    100px 100px;
`;
