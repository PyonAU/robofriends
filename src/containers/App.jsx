import React, { useState, useEffect } from "react";
import CardList from "../components/CardList.jsx";
// import { robots } from "../robots";
import SearchBox from "../components/SearchBox.jsx";
import Scroll from "../components/Scroll.jsx";
// import ErrorBoundary from "../components/ErrorBoundary.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setSearchField, requestRobots } from "../actions.js";
import "./App.css";

const App = ({ store }) => {

  // const [searchText, setSearchText] = useState("");
  const [robots, setRobots] = useState([]);

  // These lines are for Redux
  const text = useSelector(state => state.searchRobots.searchField);

  const roboUsers = useSelector(state => state.requestRobots.robots);

  const dispatch = useDispatch();

  const onSesarchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  }

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch])


  // useEffect(() => {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(response => response.json())
  //   .then(users => setRobots(users))
  // },[]);
  
  // function handleSearch(event) { 
  //   const newInput = event.target.value;
  //   setSearchText(newInput);
  // }

  useEffect(() => {
    const filteredRobots = roboUsers.filter((robot) => {
      return robot.name.toLowerCase().includes(text.toLowerCase()); // 'searchText' is replaced with 'text'
    });
    setRobots(filteredRobots);
  }, [text, roboUsers]);

  const newRobot = robots;

  

//   return (!robots.length) ?
//     <h1 className="tc">Loading</h1> :
//     (
//     <div className="tc">
//       <h1 className="f1">RoboFriends</h1>
//       <SearchBox handleSearch={onSesarchChange} /> 
//       <Scroll>
//         <ErrorBoundary>
//           <CardList robots={newRobot} />
//         </ErrorBoundary>
//       </Scroll>
//     </div>
//   );
// }

return (
  <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox handleSearch={onSesarchChange} /> 
      <Scroll>
      {
        text === "" ? <CardList robots={roboUsers} /> : <CardList robots={newRobot} />
      }
      </Scroll>
      

  
</div>
);
}

export default App;


// Replace {handleSearch} with {onSesarchChange}.
// Replace {filteredRobots} with {newRobot}