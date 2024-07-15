import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div>
            <div className="bg-white p-4 rounded shadow-lg w-1/2">
                <button onClick={onClose} className="float-right">
                    Close
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
