import React from 'react';
import { StreamApp, NotificationDropdown, FlatFeed } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

class NewsFeed extends React.Component {
  render() {
    return (
      <StreamApp apiKey='dz5f4d5kzrue' appId='102254' token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYW5jaWVudC1xdWVlbi03IiwiZXhwIjoxNjIzNTM0Nzc5fQ.DgTwcwgnKeEZaS6NOp0ZrdKmjGHbWe2mGthIlh1Nfkc'>
        <NotificationDropdown notify />
        <FlatFeed notify />
      </StreamApp>
    );
  }
}

export default NewsFeed;