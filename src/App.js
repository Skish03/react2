import './App.css';
import './navbar.js';
import './card.js';

function App() {
    return (
        <div className="App">
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>

            <h1><strong> CS 230 Lab </strong></h1>
            <h2><strong> Section - 001 </strong></h2>
            <p> WVU ID: 800358898 </p>
            <p> Hi I am Stephanie. </p>

            <div class="card">
                <h5 class="card-title">Card 01</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>

            <div class="card">
                <h5 class="card-title">Card 02</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>

            <div class="card">
                <h5 class="card-title">Card 03</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default App;