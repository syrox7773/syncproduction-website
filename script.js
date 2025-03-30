/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #1c1c1c;
    color: #fff;
}

header {
    background: #000;
    padding: 20px;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

/* Hero Section */
.hero {
    background: url('hero-image.jpg') no-repeat center center/cover;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.hero .overlay {
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    text-align: center;
    border-radius: 10px;
}

/* Portfolio Section */
.portfolio {
    text-align: center;
    padding: 50px 20px;
}

.model-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-content: center;
    padding: 20px;
}

.model {
    background: #333;
    padding: 15px;
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
}

.model img {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.model p {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
}

.model:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3);
}

/* Signup Form */
.apply {
    text-align: center;
    padding: 50px 20px;
}

form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
}

form input, button {
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}

button {
    background: #ff6600;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background: #e65c00;
}
