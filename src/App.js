import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import JobListing from "./components/JobListing";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <JobListing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
