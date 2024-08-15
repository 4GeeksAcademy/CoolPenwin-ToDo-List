import React from "react";
import Footer from "./footer.jsx";
import ToDoList from "./toDoList.jsx";

const Home = () => {
  return (
    <div className="text-center">
      
		<ToDoList/>
      <Footer />
    </div>
  );
};

export default Home;
