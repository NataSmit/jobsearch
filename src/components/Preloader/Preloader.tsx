import React from "react";
import "./Preloader.css";
import classNames from "classnames";

interface Props {
  isLoading: boolean;
}

export const Preloader = ({ isLoading }: Props) => {
  const preloaderClass = classNames({
    preloader: true,
    preloader_active: isLoading,
  });

  return (
    <div className={preloaderClass}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};
