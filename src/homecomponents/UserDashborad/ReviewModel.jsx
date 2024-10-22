import React, { useEffect, useRef } from "react";
import OrderReviewPage from '../../homecomponents/UserDashborad/OrderReviewPage';
const ReviewModel = ({ showModal, onClose }) => {
  const modalRef = useRef(); // Create a ref for the modal container

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg p-4 w-[472px] max-h-[80vh] overflow-y-auto"
      >
        <div className="flex flex-col h-full">
          <OrderReviewPage />
        </div>
      </div>
    </div>
  );
};

export default ReviewModel;
