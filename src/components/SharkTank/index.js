import React, { Component } from 'react';
import studentData from '../../helpers/data/studentData';
import LiveStudent from '../LiveStudent';

class SharkTank extends Component {
  state = {
    students: [],
  };

  componentDidMount() {
    studentData.livingStudents().then((response) => {
      this.setState({
        students: response,
      });
    });
  }

  render() {
    const { students } = this.state;
    const renderStudentToDom = () => students.map((student) => <LiveStudent key={student.id} student={student} />);

    return (
      <div>
        <h1>Shark Tank</h1>
        <div className='SharkTank d-flex flex-wrap'>{renderStudentToDom()}</div>
        <br></br>
        <button type='button' className='btn btn-danger btn-lg btn-blo'>Shark Attack!!!</button>
      </div>
    );
  }
}

export default SharkTank;
