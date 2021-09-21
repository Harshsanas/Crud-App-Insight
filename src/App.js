import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
      <Router>
        <div style={{ fontFamily: "sans-serif" }}>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;

// Create 3 components:
// 1. Form Component - This will be used to add the RSS feed url into the DB.
// 2. Table Component -  This component will display the list of url saved to the DB.
// 3. List Component -  This component will display the content of the RSS feed url (this data is updated daily/weekly/monthly).
// NOTE: Everything on the page should update realtime. i.e: I do not want to refresh the page to get the updated details.