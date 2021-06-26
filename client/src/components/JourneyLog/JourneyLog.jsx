import React, { Component } from "react";
import "./JourneyLog.css";
import journeyService from "../../services/journeys";

//create ShowPost component

//constructor(props) {
//  super(props);
//  this.handleTitleChange = this.handleTitleChange.bind(this);
//  this.handleSubjecChange = this.handleSubjectChange.bind(this);
//  this.state = {
//    title:'',
//    subject:''
//  };
//}

//adding the change event handler to the addPost

// addPost(){
//  axios.post('/addPost', {
//    title: this.state.title,
//    subject: this.state.subject
//  })
//  .then(function (response) {
//    console.log('response from add post is ',response);
//    hashHistory.push('/')
//  })
//  .catch(function (error) {
//    console.log(error);
//  });
//}

//addPost React Component
class JourneyLog extends Component {
  //  this.handleTitleChange = this.handleTitleChange.bind(this);
  //  this.handleSubjecChange = this.handleSubjectChange.bind(this);
  state = {
    title: "",
    description: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let res = await journeyService.createJourneylogs(this.state);
    console.log(res.data);
  };

  render() {
    return (
      <section className="container-journeylog">
        <br></br>
        <br></br>
        <h1>Journey's End Blog</h1>
        <div className="col-md-5">
          <div className="form-area">
            <form onSubmit={this.handleSubmit}>
              <br styles="clear:both" />
              <div className="form-group">
                <input
                  type="text"
                  onChange={this.handleChange}
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Title"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  onChange={this.handleChange}
                  type="textarea"
                  id="description"
                  placeholder="Subject"
                  maxLength="140"
                  rows="7"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary pull-right">
                Add Post
              </button>
            </form>
            <br></br>
            <br></br>
          </div>
        </div>
      </section>
    );
  }
}

export default JourneyLog;
