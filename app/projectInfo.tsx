"use client";
import Modal from "react-modal";
import { useState } from "react";

export function NeuralNet() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="grid w-full m-24 p-10 border-8 rounded-3xl">
            <button onClick={() => setIsOpen(true)}>
                <h1 className="font-bold text-3xl ,">Music Neural Network</h1>
            </button>{" "}
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <h1>I created a neural network for music!</h1>{" "}
                <ul>
                    {" Tools Used"}
                    <li>Python</li> <li>Tensorflow</li> <li>Numpy</li>{" "}
                    <li>The Nsynth Dataset</li>
                </ul>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </Modal>
        </div>
    );
}

export function DistortionPedal() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="grid w-full m-24 p-10 border-8 rounded-3xl">
            <button onClick={() => setIsOpen(true)}>
                <h1 className="font-bold text-3xl ,">Hardware Distortion Pedal</h1>
            </button>{" "}
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <h1>I created a hardware distortion pedal in Arduino and C++</h1>{" "}
                <ul>
                    {" Tools Used"}
                    <li>Arduino</li> <li>C++</li> <li>Arduino Audio Tools Library</li>{" "}
                </ul>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </Modal>
        </div>
        
    );
}


export function CDCRefactor() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="grid w-full m-24 p-10 border-8 rounded-3xl">
            <button onClick={() => setIsOpen(true)}>
                <h1 className="font-bold text-3xl ,">EpiInfo Application Android Refactor</h1>
            </button>{" "}
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <h1>I, along with my Junior design team members helped implement an android version of the CDC's epiInfo application</h1>{" "}
                <ul>
                    {" Tools Used"}
                    <li>Open Source</li> <li>Java</li> <li>Android Studio</li>{" "}
                </ul>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </Modal>
        </div>
        
    );
}
