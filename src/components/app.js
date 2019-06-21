import ReactDOM from "react-dom";
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
    		    <input className="btn btn-primary" type="submit" value="Click Here" onClick={() => {alert("I didn't say Simon Says");}}/>
    	    </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}