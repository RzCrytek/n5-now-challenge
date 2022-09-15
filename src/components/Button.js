import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Buttons = styled.div`
  button,
  a {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Button = styled.button`
  font-family: var(--font-roboto-c);
  display: inline-block;
  background-color: ${(props) => (props.bg ? `#${props.bg}` : 'peru')};
  width: auto;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  padding-inline: 16px;
  border: 1px solid transparent;
  transition: all 0.3s ease-out;
`;

export const StyledLink = Button.withComponent(Link);
