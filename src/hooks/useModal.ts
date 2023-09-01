import { useState } from "react";

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    setIsVisible(true);
    document.body.style.overflow = "hidden";
  };

  const hideModal = () => {
    setIsVisible(false);
    document.body.style.overflow = "unset";
  };

  return {
    isVisible,
    show: showModal,
    hide: hideModal,
  };
};
