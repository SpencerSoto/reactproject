import React, { Component } from "react";
import "./JourneyLog.css";
import journeyService, { getJourneylogs } from "../../services/journeys";

class JourneyLog extends Component {
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
  componentDidMount() {
    console.log("testing connection");
  }
  render() {
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
              <h4 className="place">{this.title}Read the Journey blogs</h4>
              <button
                type="submit"
                className="btn btn-primary pull-left"
              ></button>
              <div className="form-group">
                <input
                  type="text"
                  onChange={this.handleTitleChange}
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
                  onChange={this.handleSubjectChange}
                  type="textarea"
                  id="subject"
                  placeholder="Subject"
                  maxlength="140"
                  rows="7"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default JourneyLog;
