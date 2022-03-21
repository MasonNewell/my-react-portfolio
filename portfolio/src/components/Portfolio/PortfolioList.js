import React from "react";
import roomf from "../../images/Projects/roomf.png";
import budgetTracker from "../../images/Projects/budgetTracker.png";
import techBlog from "../../images/Projects/techBlog.png";
import workoutTracker from "../../images/Projects/workoutTracker.png";
import sportsTracker from "../../images/Projects/sportsTracker.png";
import bookSearchEngine from "../../images/Projects/bookSearchEngine.png";
import noteTaker from "../../images/Projects/noteTaker.png";
import weatherDashboard from "../../images/Projects/weatherDashboard.png";

const PortfolioList = [
  {
    img: sportsTracker,
    title: "Sports Tracker",
    text: "React/Node/Express/MySQL",
    githubLink: "https://github.com/MasonNewell/sports-tracker",
  },
  {
    img: roomf,
    title: "Room Finder",
    text: "HTML/CSS/JS",
    githubLink: "https://github.com/MasonNewell/rental-finder",
  },
  {
    img: budgetTracker,
    title: "Budget Tracker",
    text: "MongoDB/IndexedDB",
    githubLink: "https://github.com/MasonNewell/online-offline-budget-trackers",
  },
  {
    img: techBlog,
    title: "Tech Blog",
    text: "Node/Express/MySQL",
    githubLink: "https://github.com/MasonNewell/tech-blog",
  },
  {
    img: workoutTracker,
    title: "Workout Tracker",
    text: "Node/Express/MongoDB",
    githubLink: "https://github.com/MasonNewell/workout-tracker",
  },
  {
    img: bookSearchEngine,
    title: "Book Search Engine",
    text: "React/Graphql",
    githubLink: "https://github.com/MasonNewell/book-search-engine",
  },
  {
    img: weatherDashboard,
    title: "Weather Dashboard",
    text: "3rd party API",
    githubLink: "https://github.com/MasonNewell/Weather-Dashboard",
  },
  {
    img: noteTaker,
    title: "Note Taker",
    text: "Node/Express",
    githubLink: "https://github.com/MasonNewell/Note-Taker",
  },
];

export default PortfolioList;
