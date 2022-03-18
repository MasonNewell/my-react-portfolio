import React from "react";
import roomf from "../../images/Projects/roomf.png";
import budgetTracker from "../../images/Projects/budgetTracker.png";
import techBlog from "../../images/Projects/techBlog.png";
import workoutTracker from "../../images/Projects/workoutTracker.png";

const PortfolioList = [
  {
    img: roomf,
    title: "RoomFinders",
    text: "Uses Roomster API to find rental properties",
  },
  {
    img: budgetTracker,
    title: "Budget Tracker",
    text: "MongoDB/Mongoose/IndexedDB to keep track of budget info",
  },
  {
    img: techBlog,
    title: "Tech Blog",
    text: "Node/Express/MySQL",
  },
  {
    img: workoutTracker,
    title: "Workout Tracker",
    text: "Node/Express/NoSQL/MongoDB",
  },
];

export default PortfolioList;
