import React, {Component} from 'react';
import './Crew.css';
import CrewMember from './CrewMember';

class Crew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crewArr: [],
      amountOfCrew: 0
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    let promise = fetch('https://cors-anywhere.herokuapp.com/http://api.open-notify.org/astros.json');

    promise.then(response => response.text())
      .then(result => JSON.parse(result))
      .then(obj => {
        this.setState({crewArr: obj.people, amountOfCrew: obj.number});
        return true;
      })
  }

  render() {
    const { amountOfCrew, crewArr } = this.state;
    console.log(crewArr);
    return (
      <div className="Crew">
        <section className="Crew_astronauts_field">
        <ul className="Crew_astronauts_list">
          {crewArr.map((elem, i) => (
            <CrewMember key={i} className="crewMember" name={elem.name}/>
          ))}
        </ul>
        </section>
        <section className="Crew_astronauts_amount_field">
          <p className="Crew_astronaut_amount_field_text">Total amount: {amountOfCrew} people on ISS</p>
        </section>
      </div>
    );
  }
}

export default Crew;