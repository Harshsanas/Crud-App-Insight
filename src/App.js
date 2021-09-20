import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import Table from "./Components/Table/Table";
import Home from "./Components/Home/Home";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <Router>
      <div style={{fontFamily:"sans-serif"}}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Form">
            <Form />
          </Route>
          <Route exact path="/List">
            <List />
          </Route>
          <Route exact path="/Table">
            <Table />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// Please find the assignment below
// Assignment: Create A RSS feed aggregator.
// Create a CRUD operation where it takes the URL of the feed and stores it in the DB.
// Create 3 components:
// 1. Form Component - This will be used to add the RSS feed url into the DB.
// 2. Table Component -  This component will display the list of url saved to the DB.
// 3. List Component -  This component will display the content of the RSS feed url (this data is updated daily/weekly/monthly).
// Store the data that is sent from the RSS feed to the DB.
// - This list needs to be updated when there is a change in the RSS feed.
// Component Hierarchy:
// App Component -> Form Component
// App Component -> Table Component
// App Component -> List Component
// NOTE: Everything on the page should update realtime. i.e: I do not want to refresh the page to get the updated details.
// Upload your code to github and revert with the link to this email.
// {Deadline Tuesday EOD}

// Please give us a heads up if you are keen to take it up