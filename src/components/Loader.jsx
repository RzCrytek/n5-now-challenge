import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const LoaderContent = styled.div`
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-inline: auto;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid var(--peru);
    border-radius: 50%;
    animation: loader-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--peru) transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes loader-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderContent>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoaderContent>
    </LoaderWrapper>
  );
};

export default Loader;
