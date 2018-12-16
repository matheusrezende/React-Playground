import React, {PureComponent} from 'react';

import EventList from './Components/EventList/EventList.container';
import HeaderComponent from './Components/Header/Header.component';

class App extends PureComponent {
  render() {
    return (
      <div>
        <HeaderComponent />
        <EventList />
      </div>
    );
  }
}

export default App;
