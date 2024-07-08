export function NeuralNet() {
  return (
    <div className="grid w-full m-24 p-10 border-8 rounded-3xl">
      <h1 className="font-bold text-3xl ,">Music Neural Network</h1>
      <h1>I created a neural network for music!</h1>{" "}
      <ul>
        {" Tools Used"}
        <li>Python</li> <li>Tensorflow</li> <li>Numpy</li>{" "}
        <li>The Nsynth Dataset</li>
      </ul>
    </div>
  );
}

export function DistortionPedal() {
  return (
    <div className="grid w-full m-24 p-10 border-8 rounded-3xl">
      <h1 className="font-bold text-3xl"> Hardware Distortion Pedal</h1>
      <h1> I created a hardware distortion pedal in Arduino and C++</h1>
      <ul>
        {" Tools Used "}
        <li>Arduino</li> <li>C++</li> <li>Arduino Audio Tools Library</li>
        <li>The Nsynth Dataset</li>
      </ul>
    </div>
  );
}
