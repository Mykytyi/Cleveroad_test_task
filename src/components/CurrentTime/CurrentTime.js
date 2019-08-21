import React, {Component} from 'react';
import './CurrentTime.css';

class CurrentTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '00:00',
      nameOfDay: 'Monday',
      day: '1',
      date: '1 Apr 1946'
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.handlingDate();
    setInterval(() => {this.handlingDate()}, 5000);
  }

  handlingDate() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    let date = new Date();
    let hour = date.getUTCHours();
    let minutes = date.getUTCMinutes();

    switch (date.getUTCDay()) {
      case 1:
        this.setState({nameOfDay: 'Monday'});
        break;
      case 2:
        this.setState({nameOfDay: 'Tuesday'});
        break;
      case 3:
        this.setState({nameOfDay: 'Wednesday'});
        break;
      case 4:
        this.setState({nameOfDay: 'Thursday'});
        break;
      case 5:
        this.setState({nameOfDay: 'Friday'});
        break;
      case 6:
        this.setState({nameOfDay: 'Saturday'});
        break;
      case 7:
        this.setState({nameOfDay: 'Sunday'});
        break;
    }//Определяем день недели
    this.setState({day: `${date.getUTCDate()}`});
    this.setState({date: `${monthNames[date.getUTCMonth()]} ${date.getFullYear()}`});
    this.setState({time: `${hour}:${minutes}`});
  }


  render() {
    const { time, nameOfDay, day, date } = this.state;

    return (
      <div className="currentTime">
        <p className="currentTime_title">Current UTC time: {time}</p>
        <p className="currentTime_date">{nameOfDay}, {day} {date}</p>
      </div>
    );
  }
}

export default CurrentTime;