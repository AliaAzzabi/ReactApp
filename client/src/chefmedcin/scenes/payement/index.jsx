import React from 'react';
import { Link } from 'react-router-dom';
import ChartCard from '../../components/ChartCard';
import PrintIcon from '@mui/icons-material/Print';


const PayementList = () => {
    const tableContent = (
        <div className="container">
            <div className="page-content-wrapper">
                <div className="page-content">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                               
                                    <table className="table table-striped table-bordered table-hover table-checkable order-column full-width" id="example4">
                                        <thead>
                                        <tr>
                                                <th className="center"> Numéro de facture </th>
                                                <th className="center"> Patient </th>
                                                <th className="center"> Docteur </th>
                                                <th className="center"> Date </th>
                                                <th className="center"> Frais </th>
                                                <th className="center"> Taxe </th>
                                                <th className="center"> Remise </th>
                                                <th className="center"> Total</th>
                                                <th>&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="odd gradeX">
                                                <td className="center">111</td>
                                                <td className="center">Jenish Shah</td>
                                                <td className="center">DR. John Deo</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">510$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">340$</td>
                                                <td>
                                      
                                        <div className="d-flex justify-content-center">
                                            {/* Icône de modification */}
                                         
                                            <Link to="/facture"> <button
                                                type="button"
                                                className="btn btn-outline-success  "
                                            >
                                                <PrintIcon />
                                            </button>
                                            </Link> 
                                           
                                            
                                        </div>
                                    </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">112</td>
                                                <td className="center">Priya Patel</td>
                                                <td className="center">Dr.Rajesh</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">239$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">358$</td>
                                               
                                                <td>
                                      
                                      <div className="d-flex justify-content-center">
                                          {/* Icône de modification */}
                                       
                                          <button
                                              type="button"
                                              className="btn btn-outline-success  "
                                          >
                                              <PrintIcon />
                                          </button>
                                        
                                         
                                          
                                      </div>
                                  </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">113</td>
                                                <td className="center">Mayank Jani</td>
                                                <td className="center">Dr.Rajesh</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">456$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">340$</td>
                                                <td>
                                      
                                      <div className="d-flex justify-content-center">
                                          {/* Icône de modification */}
                                       
                                          <button
                                              type="button"
                                              className="btn btn-outline-success  "
                                          >
                                              <PrintIcon />
                                          </button>
                                        
                                         
                                          
                                      </div>
                                  </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">114</td>
                                                <td className="center">Priya Patel</td>
                                                <td className="center">DR. John Deo</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">510$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">358$</td>
                                                <td>
                                      
                                        <div className="d-flex justify-content-center">
                                            {/* Icône de modification */}
                                         
                                            <button
                                                type="button"
                                                className="btn btn-outline-success  "
                                            >
                                                <PrintIcon />
                                            </button>
                                          
                                           
                                            
                                        </div>
                                    </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">115</td>
                                                <td className="center">Jenish Shah</td>
                                                <td className="center">Dr.Rajesh</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">239$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">340$</td>
                                                <td>
                                      
                                      <div className="d-flex justify-content-center">
                                          {/* Icône de modification */}
                                       
                                          <button
                                              type="button"
                                              className="btn btn-outline-success  "
                                          >
                                              <PrintIcon />
                                          </button>
                                        
                                         
                                          
                                      </div>
                                  </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">116</td>
                                                <td className="center">Priya Patel</td>
                                                <td className="center">Dr.Rajesh</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">456$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">358$</td>
                                                <td>
                                      
                                      <div className="d-flex justify-content-center">
                                          {/* Icône de modification */}
                                       
                                          <button
                                              type="button"
                                              className="btn btn-outline-success  "
                                          >
                                              <PrintIcon />
                                          </button>
                                        
                                         
                                          
                                      </div>
                                  </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">117</td>
                                                <td className="center">Mayank Jani</td>
                                                <td className="center">DR. John Deo</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">510$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">423$</td>
                                                <td>
                                      
                                      <div className="d-flex justify-content-center">
                                          {/* Icône de modification */}
                                       
                                          <button
                                              type="button"
                                              className="btn btn-outline-success  "
                                          >
                                              <PrintIcon />
                                          </button>
                                        
                                         
                                          
                                      </div>
                                  </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">118</td>
                                                <td className="center">Priya Patel</td>
                                                <td className="center">Dr.Rajesh</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">239$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">340$</td>
                                                <td>
                                      
                                        <div className="d-flex justify-content-center">
                                            {/* Icône de modification */}
                                         
                                            <button
                                                type="button"
                                                className="btn btn-outline-success  "
                                            >
                                                <PrintIcon />
                                            </button>
                                          
                                           
                                            
                                        </div>
                                    </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">119</td>
                                                <td className="center">Mayank Jani</td>
                                                <td className="center">DR. John Deo</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">510$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">423$</td>
                                                <td>
                                      
                                      <div className="d-flex justify-content-center">
                                          {/* Icône de modification */}
                                       
                                          <button
                                              type="button"
                                              className="btn btn-outline-success  "
                                          >
                                              <PrintIcon />
                                          </button>
                                        
                                         
                                          
                                      </div>
                                  </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">120</td>
                                                <td className="center">Jenish Shah</td>
                                                <td className="center">DR. Megha Trivedi</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">510$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">358$</td>
                                                <td>
                                      
                                      <div className="d-flex justify-content-center">
                                          {/* Icône de modification */}
                                       
                                          <button
                                              type="button"
                                              className="btn btn-outline-success  "
                                          >
                                              <PrintIcon />
                                          </button>
                                        
                                         
                                          
                                      </div>
                                  </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">121</td>
                                                <td className="center">Priya Patel</td>
                                                <td className="center">Dr.Rajesh</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">239$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">340$</td>
                                                <td>
                                      
                                        <div className="d-flex justify-content-center">
                                            {/* Icône de modification */}
                                         
                                            <button
                                                type="button"
                                                className="btn btn-outline-success  "
                                            >
                                                <PrintIcon />
                                            </button>
                                          
                                           
                                            
                                        </div>
                                    </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">122</td>
                                                <td className="center">Jayna Sharma</td>
                                                <td className="center">DR. Megha Trivedi</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">510$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">423$</td>
                                                <td>
                                      
                                        <div className="d-flex justify-content-center">
                                            {/* Icône de modification */}
                                         
                                            <button
                                                type="button"
                                                className="btn btn-outline-success  "
                                            >
                                                <PrintIcon />
                                            </button>
                                          
                                           
                                            
                                        </div>
                                    </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">123</td>
                                                <td className="center">Jenish Shah</td>
                                                <td className="center">Dr.Rajesh</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">239$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">358$</td>
                                                <td>
                                      
                                        <div className="d-flex justify-content-center">
                                            {/* Icône de modification */}
                                         
                                            <button
                                                type="button"
                                                className="btn btn-outline-success  "
                                            >
                                                <PrintIcon />
                                            </button>
                                          
                                           
                                            
                                        </div>
                                    </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">124</td>
                                                <td className="center">Jayna Sharma</td>
                                                <td className="center">DR. Megha Trivedi</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">127$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">423$</td>
                                                <td>
                                      
                                      <div className="d-flex justify-content-center">
                                          {/* Icône de modification */}
                                       
                                          <button
                                              type="button"
                                              className="btn btn-outline-success  "
                                          >
                                              <PrintIcon />
                                          </button>
                                        
                                         
                                          
                                      </div>
                                  </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">125</td>
                                                <td className="center">Sonali Malik</td>
                                                <td className="center">Dr.Rajesh</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">510$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">340$</td>
                                                <td>
                                      
                                        <div className="d-flex justify-content-center">
                                            {/* Icône de modification */}
                                         
                                            <button
                                                type="button"
                                                className="btn btn-outline-success  "
                                            >
                                                <PrintIcon />
                                            </button>
                                          
                                           
                                            
                                        </div>
                                    </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">126</td>
                                                <td className="center">Jayna Sharma</td>
                                                <td className="center">DR. John Deo</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">510$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">423$</td>
                                                <td>
                                      
                                        <div className="d-flex justify-content-center">
                                            {/* Icône de modification */}
                                         
                                            <button
                                                type="button"
                                                className="btn btn-outline-success  "
                                            >
                                                <PrintIcon />
                                            </button>
                                          
                                           
                                            
                                        </div>
                                    </td>
                                            </tr>
                                            <tr className="odd gradeX">
                                                <td className="center">127</td>
                                                <td className="center">Sonali Malik</td>
                                                <td className="center">DR. Megha Trivedi</td>
                                                <td className="center">12 Jan 2012</td>
                                                <td className="center">127$</td>
                                                <td className="center">10%</td>
                                                <td className="center">5$</td>
                                                <td className="center">358$</td>
                                                <td>
                                      
                                        <div className="d-flex justify-content-center">
                                            {/* Icône de modification */}
                                         
                                            <button
                                                type="button"
                                                className="btn btn-outline-success  "
                                            >
                                                <PrintIcon />
                                            </button>
                                          
                                           
                                            
                                        </div>
                                    </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                <ChartCard title="Paiements hospitaliers" chartId="departListChart" content={tableContent} />
            </div>
        </div>
    );
};

export default PayementList;
