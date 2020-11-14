import React, { Component } from 'react';
// import studentData from '../../helpers/data/studentData';
import GraveStone from '../GraveStone';

export default class Graveyard extends Component {
  render() {
    const { students } = this.props;
    const renderStudentToDom = () => students.map((student) => <GraveStone key={student.id} student={student} />);
    return (
      <div>
        <h1>Graveyard</h1>
        <div className='Graveyard d-flex flex-wrap'>{renderStudentToDom()}</div>
      </div>
    );
  }
}
