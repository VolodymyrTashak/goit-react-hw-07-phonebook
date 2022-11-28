import { ProgressBar } from 'react-loader-spinner';

export const Spiner = () => {
  return (
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperClass="progress-bar-wrapper"
      borderColor="#dbd5d5"
      barColor="#e7c587"
    />
  );
};
