import React from 'react';

class User extends React.Component {
    state = {
      user: null,
      error: null,
      loading: true,
    };
    componentDidMount() {
      fetch('https://randomuser.me/api/?seed=foobar')
        .then(response => response.json())
        .then(data => {
          const user = data.results[0];
          this.setState({ user, loading: false });
        })
        .catch(error => this.setState({
          error: error.message,
          loading: false,
        }));
    }
    render() {
      return (
        <section>
          {this.props.render(this.state)}
        </section>
      );
    }
  } 