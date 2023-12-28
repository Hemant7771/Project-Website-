import React from 'react'
import tick from './404-tick.png'
import { Link } from 'react-router-dom';
import './Payment.css'

const Payment = () => {
    let popup= document.getElementById('popup');
    function openpopup(){
        popup.classList.add('open-popup');
    }
    function closepopup(){
        popup.classList.remove('open-popup');
    }
  return (
    <>
    <div className="body">
        <div className="container paymentcontainer">
        <h6 className='payment-h6' >CheckOut</h6>
        <Link className='cross' to='/buy'>X</Link>
        <h1 className='payment-h1' >Payment Method</h1>
        <form action="">
            <label className='payement-label' for="country">Country
                <select className='payment-select' name="country" id="country">
                    <option value="India">India</option>
                    <option value="England">England</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Germany">Germany</option>
                    <option value="China">China</option>
                    <option value="United State">United State</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Russia">Russia</option>
                    <option value="Japan">Japan</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Thailand">Thailand</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Spain">Spain</option>
                </select>
            </label>
            <div className="input-group">
                <label for="card">Choosse Card</label>
                <div className="input-box">
                    <input type="radio" name="pay" id="pay1" className="radio" required/>
                    <p className='payement-p'>Credit Card</p>
                    <input type="radio" name="pay" id="pay2" className="radio" required/>
                    <p className='payement-p'>Debit Card</p>
                </div>
            </div>
            <label for="cardno">Card Number
                <input type="text" name="cardno" id="cardno" maxlength="19" required onkeypress="cardspace()" />
            </label>
            <div className="float">
                <label for="validtill">Valid till
                    <input type="text" name="validtill" id="validtill" required maxlength="7" onkeypress="addSlashes()"/>
                </label>
                <label for="cvv">CVV
                    <input type="text" name="cvv" id="cvv" required maxlength="3"/>
                </label>
            </div>
            <label for="checkbox">
            <input type="checkbox" name="checkbox" required id="checkbox"/>
            <p  className="same payement-p">Payment Address is the same as the Delivery Address</p>
            </label>
            <div className="successfull">
                <button className='payement-btn' type="button" onClick={openpopup}>PAY NOW</button>
                <div className="popup" id="popup">
                    <img src={tick} alt='tick'/>
                    <h2>Thank You</h2>
                    <p className="sucess payement-p">Your Payment As Successfully Done. Enjoy Shopping!</p>
                    <button className='payement-btn' type="button" onClick={closepopup}>OK</button>
                </div>
            </div>
            
        </form>
        </div>
    </div>
    </>
  )
}

export default Payment