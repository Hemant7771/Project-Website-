import React from 'react'
import logo from '../../Assets/Gada_Electronic.png'
import secure from './sprite-secure.png'
import './Buy.css'
import { Link } from 'react-router-dom'

const Buy = () => {
  return (
    <>
        <div className="header">
        <div className="container">
            <div className="nav-container">
                <div className="left">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="mid">
                    <li className='buy-li'>Cart</li>
                    <li className='buy-li'>------</li>
                    <li className='buy-li'>Address</li>
                    <li className='buy-li'>------</li>
                    <li className='buy-li'>Payment</li>
                </div>
                <div className="right">
                    <img src={secure} alt="secure" className="secureIcon" width="26" height="28"/>
                    <div className="secure">100% SECURE</div>
                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <div className="col-md-8 mb-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Address Details</h5>
                </div>
                <div className="card-body">
                  <form>
                    
                    <div className="row mb-4">
                      <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form7Example1">First name</label>
                          <input type="text" required id="form7Example1" className="form-control" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form7Example2">Last name</label>
                          <input type="text" required id="form7Example2" className="form-control" />
                        </div>
                      </div>
                    </div>
          
                   
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form7Example3">Pincode</label>
                      <input required type="number" maxlength="6" id="form7Example3" className="form-control" />
                    </div>
          
                    
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form7Example4">Address</label>
                      <input type="text" required id="form7Example4" className="form-control" />
                    </div>
          
                    
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form7Example5">State</label>
                        <select className='form-select' name="state" id="state">
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </div>
          
                    
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form7Example6">Phone</label>
                      <input required type="number" id="form7Example6" className="form-control" minLength='10' maxlength="10" />
                    </div>
          
                    
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form7Example7">Additional information</label>
                      <textarea className="form-control" id="form7Example7" rows="4"></textarea>
                    </div>
          
                    
                    <div className="form-check d-flex justify-content-center mb-2">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form7Example8" checked />
                      <label className="form-label" for="form7Example8">
                        Make This My Default Address
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          
            <div className="col-md-4 mb-4">
              <div className="card mb-4">
                <div claspayments="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>$53.98</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span><strong>$53.98</strong></span>
                    </li>
                  </ul>
          
                  <Link to="/payment">
                    <button type="button" className="btn btn-primary btn-lg btn-block">
                        Make purchase
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default Buy