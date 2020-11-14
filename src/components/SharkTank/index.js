import React, { Component } from 'react';
import studentData from '../../helpers/data/studentData';
import LiveStudent from '../LiveStudent';
import Graveyard from '../Graveyard';

class SharkTank extends Component {
  state = {
    liveStudents: [],
    deadStudents: [],
  };

  componentDidMount() {
    this.getLiveStudents();
    this.getDeadStudents();
  }

  getLiveStudents = () => {
    studentData.livingStudents().then((response) => {
      this.setState({
        liveStudents: response,
      });
    });
  }

  sharkButton = () => {
    const randomStudent = this.state.liveStudents[
      Math.floor(Math.random() * this.state.liveStudents.length)
    ];

    studentData.followTheLight(randomStudent).then((response) => {
      this.getDeadStudents();
      this.getLiveStudents();
    });
  }

  getDeadStudents = () => {
    studentData.dearlyBeloved().then((response) => {
      this.setState({
        deadStudents: response,
      });
    });
  }

  render() {
    const { liveStudents, deadStudents } = this.state;
    const renderStudentToDom = () => liveStudents.map((student) => <LiveStudent key={student.id} student={student} />);

    return (
      <div>
        <h1>Shark Tank</h1>
        <div className='SharkTank d-flex flex-wrap'>{renderStudentToDom()}</div>
        <br></br>
        <button className='btn btn-danger btn-lg btn-blo'onClick={this.sharkButton}>Shark Attack!!!</button>
        <Graveyard students={ deadStudents } />
      </div>
    );
  }
}

export default SharkTank;
