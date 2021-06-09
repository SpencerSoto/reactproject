import React, { Component } from "react";
import "./JourneyLog.css";


class JourneyLog extends Component {
    render() {
        return (
            <section className='container-journeylog'>
            <br></br>

            <h1>Journey's End Blog</h1>
            <form>1. Enter your Travel Location Title</form>
            <form>2. Add images to beautify your story</form>
            <form>3. Tell us about your Adventure!</form>
            
            <button type="button" class="btn btn-outline-secondary btn-sm">Cancel</button>
            
            <button type="submit" class="btn btn-info btn-sm ml-2">Save</button>
            <br></br>
            <br></br>
                
        
            

            </section>
        )
    }
}

export default JourneyLog;