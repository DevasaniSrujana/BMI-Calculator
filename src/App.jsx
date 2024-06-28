import { useState,useRef } from "react";
import { IoMdMale } from "react-icons/io";
import { IoFemaleSharp } from "react-icons/io5";

function App() {
  const [slider, setSlider] = useState(0);
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const result = useRef("")

  const handleSlider = (e) => {
    setSlider(parseInt(e.target.value));
  };

  const handleWeight = (e) => {
    setWeight(e.target.value); 
  };

  const handleAge = (e) => {
    setAge(e.target.value); 
  };

  const handleMale = () => {
    return true;
  };

  const handleFemale = () => {
    return false;
  };

  const calculateBMI = () => {
    if (isNaN(parseInt(weight)) || isNaN(parseInt(age))) {
      alert("Please enter valid numbers for weight and age.");
      return;
    }

    const heightInMeters = slider / 100;
    let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    if (age < 18) {
      if (handleMale()) {
        if (bmi < 5) return "Underweight";
        if (bmi >= 5 && bmi < 85) return "Healthy weight";
        if (bmi >= 85 && bmi < 95) return "Overweight";
        if (bmi >= 95) return "Obese";
      } else if (!handleFemale()) {
        if (bmi < 5) return "Underweight";
        if (bmi >= 5 && bmi < 85) return "Healthy weight";
        if (bmi >= 85 && bmi < 95) return "Overweight";
        if (bmi >= 95) return "Obese";
      }
    } else {
      if (bmi < 18.5) return "Underweight";
      if (bmi >= 18.5 && bmi < 25) return "Normal weight";
      if (bmi >= 25 && bmi < 30) return "Overweight";
      if (bmi >= 30) return "Obese";
    }
  };

  const handleClick = () => {
    const heightInMeters = slider / 100;
    let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    const bmiAns = calculateBMI();
    if(result.current){
      result.current.innerHTML = `<div class=" m-2 text-center font-mono">
        <div class=" text-4xl text-amber-500">YOUR RESULTS</div>
        <div class=" text-3xl p-2 mt-10">Your BMI is: <strong>${bmi}</strong></div>
        <div class=" text-3xl p-2">You are <strong>${bmiAns}</strong></div>
        <a href="App.jsx"><button  class="text-2xl font-extrabold bg-blue-800 w-[250px] border-2 border-white rounded-2xl p-2 mt-10">BACK</button></a>
      </div>`;
    }
  };
  
  return (
    <>
      <div className="container bg-gradient-to-r from-pink-500 to-purple-950 min-w-[100vw] min-h-[100vh] box-border font-sans">
        <div ref={result}   className="bmi-container lg:w-[30vw] min-h-[85vh] m-auto border-[5px] bg-gray-950 border-white relative top-10 rounded-2xl text-white ">
          <div className="logo text-xl text-white font-bold text-center mt-2">
            BMI CALCULATOR
          </div>
          <div className="gender flex text-white font-extrabold lg:w-[25vw] lg:m-auto justify-around">
            <div
              onClick={handleMale}
              className="male border-1 border-gray-800 p-4 bg-gray-800 rounded-xl m-5 w-[125px]"
            >
              <IoMdMale className="size-10" />
              <div className="option p-2">Male</div>
            </div>
            <div
              onClick={handleFemale}
              className="female border-1 border-gray-800 p-4 bg-gray-800 rounded-xl m-5 w-[125px]"
            >
              <IoFemaleSharp className="size-10" />
              <div className="option p-2">Female</div>
            </div>
          </div>
          <div className="height w-[300px] bg-gray-800 rounded-xl m-auto">
            <div className="head text-xl text-center text-gray-950 font-extrabold">
              HEIGHT
            </div>
            <div className="heightValue font-bold">
              <div className="Value text-3xl font-extrabold text-white text-center">
                {slider}cm
              </div>
              <div className="slider text-center m-2">
                <input
                  type="range"
                  min="0"
                  max="250"
                  value={slider}
                  onChange={handleSlider}
                  className="slider-input"
                />
              </div>
            </div>
          </div>
          <div className="flex lg:gap-4 mt-4 lg:ml-7 justify-around">
            <div className="weight w-[150px] p-2 bg-gray-800 m-2 rounded-xl">
              <div className="head text-xl text-center text-gray-950 font-extrabold">
                WEIGHT
              </div>
              <div className="weightValue font-bold justify-center relative">
                <div className="Value text-3xl font-extrabold text-white text-center">
                  <input
                    className=" bg-gray-600 rounded-2xl w-[100px] text-center"
                    type="number" 
                    name=""
                    id=""
                    value={weight}
                    onChange={handleWeight}
                  />
                </div>
                <div className="text-xl text-gray-950 text-center">kg</div>
              </div>
            </div>
            <div className="age w-[150px] p-2 bg-gray-800 m-2 rounded-xl">
              <div className="head text-xl text-center text-gray-950 font-extrabold">
                AGE
              </div>
              <div className="Value text-3xl font-extrabold text-white text-center justify-center relative">
                <input
                  className=" bg-gray-600 rounded-2xl w-[100px] text-center"
                  type="number" 
                  name=""
                  id=""
                  value={age}
                  onChange={handleAge}
                />
              </div>
            </div>
          </div>
          <div className="btn text-center mt-4">
            <button
              onClick={handleClick}
              className="text-white text-2xl font-extrabold bg-blue-800 w-[250px] border-2 border-white rounded-2xl p-4"
            >
              Calculate
            </button>
          </div>
        </div>
        <div className="heading text-2xl relative -bottom-12 text-center text-white font-extrabold">
          BMI CALCULATOR
        </div>
      </div>
    </>
  );
}

export default App;
