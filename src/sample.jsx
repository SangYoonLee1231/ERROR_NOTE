import React from 'react';

class App extends React.Component {
  state = { scheduleItem: 3, inputValue: '', calculItem: 0, current: 0 };

  calDelQuality = e => {
    const keepCount = e.target.value;

    if (this.state.scheduleItem < keepCount) {
      console.log('스케쥴 값 보다 지울 값이 더 많습니다!');
    }

    if (Number.isInteger(keepCount) === false) {
      return (
        this.setState({ inputValue: Math.round(keepCount) }),
        console.log(Math.round(keepCount))
      );
    }

    const calculate = this.state.scheduleItem - keepCount;
    console.log(calculate);
  };

  render() {
    return <p>Hello,App</p>;
  }
}

export default App;
