import React from 'react';
import ReactDOM from 'react-dom';

import ToggleSwitch from 'components/toggle-switch';

class UserManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 1
    };
  }


  render() {
    return (
      <div className="user-manager"> hey hows it going hows life blalah blah.
        <ToggleSwitch />
      </div>
    );
  }
}

ReactDOM.render(<UserManager />, document.getElementById('contents'));
