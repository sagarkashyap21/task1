import React from 'react'

export default function Payment() {
    return (
        <div className="payment">
            <div className="pay1">
                <h2>Payment Setup</h2>
                <p style={{ color: "gray" }}>Set up payments for the client. </p>
            </div>
            <div className="form1">
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Billing Address *" aria-label="Billing Address *" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <select style={{ color: "gray" }} id="inputState" class="form-select">
                            <option selected>Select State *</option>
                        </select>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Select City *" aria-label="Select City *" />
                    </div>
                    <div class="col-md-2">
                        <input type="text" class="form-control" placeholder="Pincode *" aria-label="Pincode *" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <select style={{ color: "gray" }} id="inputState" class="form-select">
                            <option selected>Select Number of Site Access *</option>
                        </select>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder={`Rs. Payable Amount per Site *
                          Input Total:Rs. 000000`} aria-label="Rs. Payable Amount per Site * InputTotal:Rs. 000000" />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Discount (%) *" aria-label="Discount (%) *" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Reason *" aria-label="Reason *" />
                    </div>
                </div>

            </div>
            <div className="pmode">
                <div>
                    <h5>Payment Mode</h5>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">UPI</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Net Banking</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Cash</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Cheque</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Other</label>
                    </div>
                    <div>
                        <button style={{ marginTop: "1.5rem" }} type="button" class="btn btn-primary">save & continue <i class="fa fa-solid fa-chevron-right"></i></button>
                        <button style={{ color: "gray", marginTop: "1.5rem", marginLeft: "2rem" }} type="button" class="btn btn-light"><i class="fa fa-solid fa-rotate-left"></i> Reset</button>
                    </div>
                </div>

                <div>
                    <h5>Payment Status</h5>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Cash</label>
                    </div><div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Cash</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
