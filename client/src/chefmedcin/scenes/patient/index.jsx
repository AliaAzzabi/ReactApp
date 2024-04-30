import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import person1Image from './images/person_1.jpg';
import person2Image from './images/person_2.jpg';
import person3Image from './images/person_3.jpg';
import person4Image from './images/person_4.jpg';
import ChartCard from '../../components/ChartCard';
import moment from 'moment';
import { getAllPatients } from '../../../liaisonfrontback/operation';

const PatientList = () => {
  const [patients, setpatients] = useState([]);

    useEffect(() => {
      getAllPatients((res) => {
            if (res.data) {
              setpatients(res.data);
            } else {
                console.error("Erreur lors de la récupération des patients :", res.error);
            }
        });
    }, []);
    
    const tableContent = (
      <div className='container'>
        <div className="row">
          {patients.map((patient) => (
            <div className="col-md-4" key={patient._id}>
              <div className="card">
                <div className="card-body no-padding ">
                  <div className="doctor-profile">
             
                    <div className="profile-usertitle">
                      <div className="doctor-name">{patient.user.nomPrenom} </div>
                    </div>
                    <p> {patient.user.adresse}</p>
                    <p> {moment(patient.user.dateNaissance).format('YYYY-MM-DD')}</p>
                    <div>
                      <p><i className="fa fa-phone" /><a href={`tel:${patient.user.telephone}`}> {patient.user.telephone}</a></p>
                    </div>
                    <div>
                      <p><i className="fa fa-envelope" /><a href={`mailto:${patient.user.email}`}> {patient.user.email}</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  



  return (

    <div className="container">
      <div className="row">
        <ChartCard title="Liste des patients" chartId="patientListChart" content={tableContent} />
      </div>
    </div>
  );
};

export default PatientList;
