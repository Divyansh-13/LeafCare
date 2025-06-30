# LeafCare

LeafCare is a web application designed for leaf disease detection. By leveraging machine learning models, it analyzes images of leaves uploaded by users to determine their health status. The app supports both Hindi and English languages, making it accessible to a broader audience.

## Features

- **Leaf Disease Detection:** Upload an image of a leaf, and the app will analyze it to detect possible diseases.
- **Multi-language Support:** Use the app in either Hindi or English.
- **User-Friendly Interface:** Simple and intuitive UI for ease of use.

## Technology Stack

- **Frontend:** JavaScript (React or similar framework)
- **Backend:** Python (Flask/FastAPI)
- **Others:** HTML, CSS

## Getting Started

These instructions will help you set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (for frontend)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Python 3.x](https://www.python.org/) (for backend)
- Python packages: Flask or FastAPI, and any other dependencies required by `app.py` (see below)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/Divyansh-13/LeafCare.git
cd LeafCare
```

#### 2. Setup and Run the Frontend

```bash
cd frontend  # Enter the frontend directory if exists, else skip this step
npm install
npm run dev
```

By default, this will start the frontend server, usually at [http://localhost:3000](http://localhost:3000).

#### 3. Setup and Run the Backend

In a new terminal window:

```bash
cd backend  # Enter the backend directory if exists, else skip this step
pip install -r requirements.txt  # Install dependencies (if requirements.txt exists)
python app.py
```

By default, this will start the backend server, usually at [http://localhost:5000](http://localhost:5000).

### Project Structure

```
LeafCare/
├── backend/
│   ├── app.py
│   └── requirements.txt
├── frontend/
│   ├── [frontend files]
│   └── package.json
├── README.md
└── ...
```

> **Note:** Adapt paths if the frontend and backend are not in separate folders.

## Usage

1. Open your browser and go to [http://localhost:3000](http://localhost:3000).
2. Upload an image of a leaf.
3. View the analysis and health status provided by the model.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

> **Divyansh-13/LeafCare** – A website for detecting leaf diseases using machine learning.
