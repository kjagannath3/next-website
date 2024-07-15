// pages/index.tsx
"use client"
import React, { useState } from 'react';
import Modal from './Modal';

const NeuralNet: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-4">Welcome to Next.js!</h1>
      <button onClick={openModal} className="px-4 py-2 bg-blue-600 text-white rounded">Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl mb-4">This is a modal!</h2>
        <p>Here you can put any content you want.</p>
      </Modal>
    </div>
  );
};

export default NeuralNet;



