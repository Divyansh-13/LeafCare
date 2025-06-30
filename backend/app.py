from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# Handle TensorFlow import for different environments
try:
    import tensorflow as tf
    from tensorflow.keras.models import load_model
except ImportError:
    print("TensorFlow not available, using alternative imports")
    import tensorflow as tf
    from tensorflow.keras.models import load_model

from PIL import Image
import numpy as np

app = Flask(__name__)
CORS(app)

# Initialize model as None
model = None

def load_ml_model():
    global model
    try:
        # Try to load the model file that exists
        if os.path.exists("vgg16_model.keras"):
            model = load_model("vgg16_model.keras")
        elif os.path.exists("CNN_model.keras"):
            model = load_model("CNN_model.keras")
        else:
            print("No model file found")
            return False
        return True
    except Exception as e:
        print(f"Error loading model: {e}")
        return False

# Load model on startup
model_loaded = load_ml_model()

# List of all 38 plant disease classes
classes = [
    "Apple Scab", "Apple Black Rot", "Apple Cedar Rust", "Apple Healthy",
    "Blueberry Healthy", "Cherry Powdery Mildew", "Cherry Healthy",
    "Corn Cercospora Leaf Spot", "Corn Common Rust", "Corn Northern Leaf Blight", "Corn Healthy",
    "Grape Black Rot", "Grape Esca (Black Measles)", "Grape Leaf Blight (Isariopsis Leaf Spot)", "Grape Healthy",
    "Orange Huanglongbing (Citrus Greening)",
    "Peach Bacterial Spot", "Peach Healthy",
    "Pepper Bell Bacterial Spot", "Pepper Bell Healthy",
    "Potato Early Blight", "Potato Late Blight", "Potato Healthy",
    "Raspberry Healthy",
    "Soybean Healthy",
    "Squash Powdery Mildew",
    "Strawberry Leaf Scorch", "Strawberry Healthy",
    "Tomato Bacterial Spot", "Tomato Early Blight", "Tomato Late Blight", "Tomato Leaf Mold",
    "Tomato Septoria Leaf Spot", "Tomato Spider Mites (Two-Spotted Spider Mite)", "Tomato Target Spot",
    "Tomato Mosaic Virus", "Tomato Yellow Leaf Curl Virus", "Tomato Healthy"
]

#curing suggestion
def load_curing_suggestions():
    suggestions = {}
    with open("disease_cures.txt", "r") as file:
        for line in file:
            if ": " in line:
                disease, suggestion = line.strip().split(": ", 1)
                suggestions[disease] = suggestion
    return suggestions

curing_suggestions = load_curing_suggestions()

#image preprocessing function
def preprocess_image(image, target_size=(128, 128)):
    image = image.resize(target_size)
    image = np.array(image) / 255.0  # Normalizing image
    image = np.expand_dims(image, axis=0) 
    return image

@app.route('/result', methods=['POST'])
def predict():
    if not model_loaded or model is None:
        return jsonify({"error": "Model not available"}), 503
        
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    
    file = request.files['file']

    try:
        # preprocessing the image
        image = Image.open(file)
        processed_image = preprocess_image(image)

        # prediction of model
        predictions = model.predict(processed_image)
        predicted_class = np.argmax(predictions, axis=1)[0]

        # curing suggestion for the predicted disease
        disease_name = classes[predicted_class]
        suggestion = curing_suggestions.get(disease_name, "No suggestion available.")

        
        result = {
            "class": disease_name,
            "confidence": float(np.max(predictions)),
            "suggestion": suggestion
        }
        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({
        "status": "healthy",
        "model_loaded": model_loaded
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
