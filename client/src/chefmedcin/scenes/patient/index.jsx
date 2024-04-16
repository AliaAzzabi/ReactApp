import React from 'react';
import { Link } from 'react-router-dom';
import person1Image from './images/person_1.jpg';
import person2Image from './images/person_2.jpg';
import person3Image from './images/person_3.jpg';
import person4Image from './images/person_4.jpg';
import ChartCard from '../../components/ChartCard';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PersonRemoveTwoToneIcon from '@mui/icons-material/PersonRemoveTwoTone';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const PatientList = () => {

  const tableContent = (
    <div className='container'>
    <div className="row">
    <div className="col-sm-12 col-md-6">
        <div className="dataTables_length" id="example4_length">
            <label>Afficher :</label>
            <select name="example_length" className="form-select form-select-sm">
                <option value={50}>50</option>
                <option value={20}>20</option>
                <option value={10}>10</option>
            </select>
        </div>
    </div>
    <div className="col-sm-12 col-md-6 d-flex align-items-end justify-content-end">
        <div id="example4_filter" className="dataTables_filter">
            <label>Rechercher :</label>
            <input type="search" className="form-control form-control-sm" placeholder="Rechercher..." aria-controls="example" />
        </div>

    </div>

</div>
    <div className="tab-pane" id="tab2">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body no-padding ">
              <div className="doctor-profile">
                <img src="img/user/user10.jpg" className="doctor-pic" alt />
                <div className="profile-usertitle">
                  <div className="doctor-name">Pooja Patel </div>
                </div>
                <p>A-103, shyam gokul flats, Mahatma Road <br />Mumbai</p>
                <div>
                  <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                </div>
                <div>
                  <p><i className="fa fa-envelope" /><a href="mailto:adresse@example.com"> adresse@example.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body no-padding ">
              <div className="doctor-profile">
                <img src="img/user/user1.jpg" className="doctor-pic" alt />
                <div className="profile-usertitle">
                  <div className="doctor-name">Rajesh </div>
                </div>
                <p>45, Krishna Tower, Near Bus Stop, Satellite, <br />Mumbai
                </p>
                <div>
                  <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                </div>
                <div>
                  <p><i className="fa fa-envelope" /><a href="mailto:adresse@example.com"> adresse@example.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body no-padding ">
              <div className="doctor-profile">
                <img src="img/user/user2.jpg" className="doctor-pic" alt />
                <div className="profile-usertitle">
                  <div className="doctor-name">Sarah Smith </div>
                </div>
                <p>456, Estern evenue, Courtage area, <br />New York</p>
                <div>
                  <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                </div>
                <div>
                  <p><i className="fa fa-envelope" /><a href="mailto:adresse@example.com"> adresse@example.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body no-padding ">
              <div className="doctor-profile">
                <img src="img/user/user3.jpg" className="doctor-pic" alt />
                <div className="profile-usertitle">
                  <div className="doctor-name">John Deo </div>
                </div>
                <p>A-103, shyam gokul flats, Mahatma Road <br />Mumbai</p>
                <div>
                  <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                </div>
                <div>
                  <p><i className="fa fa-envelope" /><a href="mailto:adresse@example.com"> adresse@example.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body no-padding ">
              <div className="doctor-profile">
                <img src="img/user/user4.jpg" className="doctor-pic" alt />
                <div className="profile-usertitle">
                  <div className="doctor-name">Jay Soni </div>
                </div>
                <p>45, Krishna Tower, Near Bus Stop, Satellite, <br />Mumbai
                </p>
                <div>
                  <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                </div>
                <div>
                  <p><i className="fa fa-envelope" /><a href="mailto:adresse@example.com"> adresse@example.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body no-padding ">
              <div className="doctor-profile">
                <img src="img/user/user5.jpg" className="doctor-pic" alt />
                <div className="profile-usertitle">
                  <div className="doctor-name">Jacob Ryan </div>
                </div>
                <p>456, Estern evenue, Courtage area, <br />New York</p>
                <div>
                  <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                </div>
                <div>
                  <p><i className="fa fa-envelope" /><a href="mailto:adresse@example.com"> adresse@example.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body no-padding ">
              <div className="doctor-profile">
                <img src="img/user/user6.jpg" className="doctor-pic" alt />
                <div className="profile-usertitle">
                  <div className="doctor-name">Megha Trivedi </div>
                </div>
                <p>A-103, shyam gokul flats, Mahatma Road <br />Mumbai</p>
                <div>
                  <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                </div>
                <div>
                  <p><i className="fa fa-envelope" /><a href="mailto:adresse@example.com"> adresse@example.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body no-padding ">
              <div className="doctor-profile">
                <img src="img/user/user1.jpg" className="doctor-pic" alt />
                <div className="profile-usertitle">
                  <div className="doctor-name">Rajesh </div>
                </div>
                <p>45, Krishna Tower, Near Bus Stop, Satellite, <br />Mumbai
                </p>
                <div>
                  <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                </div>
                <div>
                  <p><i className="fa fa-envelope" /><a href="mailto:adresse@example.com"> adresse@example.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body no-padding ">
              <div className="doctor-profile">
                <img src="img/user/user2.jpg" className="doctor-pic" alt />
                <div className="profile-usertitle">
                  <div className="doctor-name">Sarah Smith </div>
                  <div className="name-center"> Anaesthetics </div>
                </div>
                <p>456, Estern evenue, Courtage area, <br />New York</p>
                <div>
                  <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                </div>
                <div>
                  <p><i className="fa fa-envelope" /><a href="mailto:adresse@example.com"> adresse@example.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body no-padding ">
              <div className="doctor-profile">
                <img src="img/user/user10.jpg" className="doctor-pic" alt />
                <div className="profile-usertitle">
                  <div className="doctor-name">Pooja Patel </div>
                  <div className="name-center"> Cardiology </div>
                </div>
                <p>A-103, shyam gokul flats, Mahatma Road <br />Mumbai</p>
                <div>
                  <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                </div>
                <div>
                  <p><i className="fa fa-envelope" /><a href="mailto:adresse@example.com"> adresse@example.com</a></p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body no-padding ">
              <div className="doctor-profile">
                <img src="img/user/user1.jpg" className="doctor-pic" alt />
                <div className="profile-usertitle">
                  <div className="doctor-name">Rajesh </div>
                </div>
                <p>45, Krishna Tower, Near Bus Stop, Satellite, <br />Mumbai
                </p>
                <div>
                  <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                </div>
                <div>
                  <p><i className="fa fa-envelope" /><a href="mailto:adresse@example.com"> adresse@example.com</a></p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body no-padding ">
              <div className="doctor-profile">
                <img src="img/user/user3.jpg" className="doctor-pic" alt />
                <div className="profile-usertitle">
                  <div className="doctor-name">John Deo </div>
                </div>
                <p>A-103, shyam gokul flats, Mahatma Road <br />Mumbai</p>
                <div>
                  <p><i className="fa fa-phone" /><a href="tel:(123)456-7890"> (123)456-7890</a></p>
                </div>
                <div>
                  <p><i className="fa fa-envelope" /><a href="mailto:adresse@example.com"> adresse@example.com</a></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
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
