# Star Wars Data Explorer 🌌

![Made with React](https://img.shields.io/badge/Made%20with-React-blue) ![License: MIT](https://img.shields.io/badge/License-MIT-blue)

> Fetch and explore data from the Star Wars universe!
> "In a galaxy far, far away... data was needed!" Get all your Star Wars data in one place.
---

## 📌 Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [API Source](#api-source)
- [Usage](#usage)
- [Design Patterns](#design-patterns)
- [Code Comments](#code-comments)
- [Data Specifications](#data-specifications)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)

---

## 🌟 Demo

![Demo GIF](https://i.imgur.com/your-demo-gif.gif)

👉 Check it out ([Link](https://recordit.co/R6JH9LsWLw))
👉 Check it out ([Live Demo](https://react-star-wars-api-viewer.vercel.app/))

---

## 🎉 Features

- **User Input:** Fetch starships, films, or vehicles based on user search queries.
- **Data Display:** Show detailed information about each starship, film, or vehicle.
- **Sorting:** Sort results by name or title.
- **Responsive:** Built with a responsive grid layout.
- **Error Handling:** Graceful error handling with user-friendly messages for any issues like network errors or invalid input.
- **Loading State:** Provides a loading message or spinner to indicate data fetching in progress.

---

## 🚀 Technologies & Tools 🔧

> Unleashing the Power of Modern Web Technologies!

<div align="center">

| ![React](https://img.icons8.com/plasticine/100/000000/react.png) | ![CSS](https://img.icons8.com/color/100/000000/css3.png) |
|:---:|:---:|
| [React](https://reactjs.org/) - The UI Building Block | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling Like a Pro |

</div>

- **React**: Bringing you the _ultra-responsive_ user interface and _state-of-the-art_ frontend functionalities.
- **CSS**: Providing the _visual flair_ and _adaptive layouts_ that make your user experience delightful.

---
## 📡 API Source

The data for this application is sourced from [The Star Wars API (SWAPI)](https://swapi.dev/). 
SWAPI is a wonderful, free-to-use API that provides a broad range of information about the Star Wars universe, including starships, films, and vehicles.

I extend my deepest gratitude to the creators and maintainers of this API for making such comprehensive Star Wars data accessible to developers.

---
## 🔨 Installation

```bash
# Clone the repo
git clone https://github.com/AdrianGeorgeM/ReactStarWarsAPIViewer.git

# Navigate to the project directory
cd ReactStarWarsAPIViewer


# Install dependencies
npm install

# Start the app
npm start
```

---

## 🎮 Usage

1. Open the app and enter your search query for starships, films, or vehicles.
2. View detailed information about each item in a responsive grid layout.
3. Use the sorting dropdown to sort items by name or title.

---

## 🛠 Design Patterns

- **Componentization:** Utilized React components for maintainability and reusability.
- **State Management:** Made use of React hooks for local state management.
- **Fetch API Abstraction:** Created custom hooks for fetching data from the Star Wars API.

---
## Code Comments

The codebase contains comments to explain the functionality and purpose of different components and functions. Comments have been added to improve code readability and understanding.

---

## 📊 Data Specifications 

This app is tailored to give you a detailed outlook on Star Wars entities fetched from the SWAPI. 
Below are the data points that you can expect for different categories:

### 🚀 Starships or Vehicles

- **Name**: The name of the starship
- **Model**: Technical specifications of the starship
- **Manufacturer**: Who made this starship
- **Cost in Credits**: The cost of this starship in galactic credits
- **Length**: How long the starship is
- **Crew**: The number of personnel needed to operate the starship
- **Passengers**: The number of non-crew members the ship can transport
- **Cargo Capacity**: How much cargo, in kilograms, the ship can carry

### 🎬 Films

- **Title**: The title of the film
- **Episode Number**: The episode number
- **Director**: Who directed this film
- **Producer**: The producer(s) of the film
- **Release Date**: When the film was released
- **Opening Crawl**: The text that appears at the beginning of each Star Wars film

---

## 💡 Future Improvements

> What's on the Horizon? 🌅

- **Routing & Details Page**: Add routes for details pages with React Router to showcase individual Star Wars entities like starships, vehicles, or films.
- **User Authentication**: Implement user login to save favorite Star Wars characters or starships.
- **Enhanced Sorting & Filtering**: Add filters to sort by Star Wars era, film appearance, and others.
- **Pagination**: Add pagination to display results in batches of 10 or 20.
- **Data Visualization**: Create a data visualization dashboard to display Star Wars data in a more interactive way.
- **Dark Mode**: Add a dark mode toggle to switch between light and dark themes.
- **Accessibility**: Improve accessibility by adding ARIA attributes and improving keyboard navigation.
- **Performance Optimization**: Improve performance by lazy loading.
- **Automated Testing**: Introduce basic unit tests for essential functionalities.
- **Star Wars Quiz**: Implement a Star Wars trivia quiz based on the data from the API.
- **Character Match**: Build a feature that matches you with a Star Wars character based on a short questionnaire.

---

## 📝 Author

- [Adrian]([https://github.com/AdrianGeorgeM](https://github.com/AdrianGeorgeM))

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
