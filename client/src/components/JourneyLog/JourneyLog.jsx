import React, { Component } from "react";
import "./JourneyLog.css";
import journeyService, { getJourneylogs } from "../../services/journeys";
import { render } from "timeago.js";

class JourneyLog extends Component {
  //const {title, description} = this.props;
  //let eachlog = ;
  // state = {
  //   title: "",
  //   description: "",

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let res = await journeyService.createJourneylogs(this.state);
    console.log(res.data);
  };
  // componentDidMount() {
  //   console.log("testing connection");
  //}

  //render(){

  //   return(
  //     <div className="list-container">
  //     <ul className="journeylog-list"><
  //       {this.getJourneylogs()}
  //     </ul>
  //     </div>

  render() {
    console.log("You can do it");
    console.log(this.props);
    return (
      <section className="container-journeylog">
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
            <div className="list-container">
              <ul className="journeylog-list">
                {this.props.journeylogs.map((eachLog) => {
                  return <div>{eachLog.title}</div>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default JourneyLog;
