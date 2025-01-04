import React, { useState } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Results = () => {
  const [language, setLanguage] = useState("en"); 
  const [result, setResult] = useState(null); 
  const [error, setError] = useState(null); 
  const [image, setImage] = useState(null); 
  const [imagePreview, setImagePreview] = useState(null); 
  const [analyzing, setAnalyzing] = useState(false); 

  const handleFileChange = (file) => {
    if (file) {
      console.log("File selected:", file);
      setImage(file); 
      setImagePreview(URL.createObjectURL(file)); 
      setError(null); 
    } else {
      console.error("No file selected.");
      setError("Please select a valid image file.");
    }
  };

  const handleAnalyze = async () => {
    if (!image) {
      console.error("No image available for analysis.");
      setError("No image provided for analysis.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image); 
    console.log("Uploading image to the server...");

    try {
      setError(null);
      setResult(null); 
      setAnalyzing(true); 

      const response = await axios.post("http://127.0.0.1:5000/result", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Response received from backend:", response.data);
      setResult(response.data); // Store the backend response
    } catch (err) {
      console.error("Error during image upload:", err);
      setError("Failed to analyze the image. Please try again.");
    } finally {
      setAnalyzing(false); // Analysis complete
    }
  };

  const handleReset = () => {
    // Reset the page
    setImage(null);
    setResult(null);
    setError(null);
    setImagePreview(null);
  };

  const text = {
    en: {
      backButton: "Back to Home",
      analysisTitle: "Leaf Analysis Result",
      uploadPrompt: "Drag and drop an image, or click to select:",
      analyzeButton: "Analyze",
      uploadAgain: "Upload Again",
      switchLanguage: "Switch to Hindi",
    },
    hi: {
      backButton: "होम पर वापस जाएं",
      analysisTitle: "पत्ते का विश्लेषण परिणाम",
      uploadPrompt: "छवि खींचें और छोड़ें, या चयन करने के लिए क्लिक करें:",
      analyzeButton: "विश्लेषण करें",
      uploadAgain: "फिर से अपलोड करें",
      switchLanguage: "अंग्रेजी में बदलें",
    },
  };

  return (
    <section
      className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center text-center p-4"
      style={{
        backgroundImage: "url('/forest.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="fixed top-4 left-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center z-20 shadow-lg"
      >
        <FaArrowLeft className="mr-2" /> {text[language].backButton}
      </Link>

      {/* Language Toggle Button */}
      <button
        onClick={() => {
          const newLanguage = language === "en" ? "hi" : "en";
          console.log(`Switching language to: ${newLanguage}`);
          setLanguage(newLanguage);
        }}
        className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 z-20 shadow-lg"
      >
        {text[language].switchLanguage}
      </button>

      {/* Displaying Result Details */}
      <div className="flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-lg w-full max-w-md z-10 relative">
        <h2 className="text-2xl font-bold text-green-700 mb-4">{text[language].analysisTitle}</h2>

        {/* Drag-and-Drop File Upload */}
        {!image && (
          <div
            className={`border-2 border-dashed rounded-lg p-6 mb-4 w-full max-w-sm border-gray-400`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFileChange(e.dataTransfer.files[0]);
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e.target.files[0])}
              className="hidden"
              id="fileInput"
            />
            <label htmlFor="fileInput" className="cursor-pointer">
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl text-gray-500">+</div>
                <p className="text-gray-600">{text[language].uploadPrompt}</p>
              </div>
            </label>
          </div>
        )}

        {/* Image Preview */}
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Uploaded leaf preview"
            className="rounded-md w-full h-auto max-h-60 object-cover mb-4"
          />
        )}

        {/* Analyze Button */}
        {!result && image && (
          <button
            onClick={handleAnalyze}
            disabled={analyzing}
            className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4 ${
              analyzing ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {text[language].analyzeButton}
          </button>
        )}

        {/* Leaf Analysis Information */}
        {result && (
          <div>
            <p className="text-lg text-green-500 mb-2">
              Disease Detected: <span className="font-bold">{result.class}</span>
            </p>
            <p className="text-lg text-green-500 mb-2">
              Suggestion: <span className="font-bold">{result.suggestion}</span>
            </p>
          </div>
        )}

        {/* Upload Again Button */}
        {result && (
          <button
            onClick={handleReset}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {text[language].uploadAgain}
          </button>
        )}

        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default Results;