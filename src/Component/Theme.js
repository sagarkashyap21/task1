import React from 'react'

export default function Theme() {
    return (
        <div className="theme">

            <h2>Theme Setup</h2>
            <p style={{ color: "gray" }}>Add information about the client to give them a personalized experience.</p>
            <div class="col">
                <p className="primary">primary color</p>
                <input style={{ padding: "1rem" }} type="text" class="form-control" placeholder="🔵 First name" aria-label=" First name" />
                <p style={{ color: "gray", marginTop: "1rem" }}>Add Hex Value.</p>
            </div>
            <h5>Login Theme</h5>
            <p style={{ color: "gray" }}>Select the look and feel of the login page.</p>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Use Color</label>
            </div>
            <div class="col-md-4 my-2">
                <input type="text" class="form-control" placeholder="⚪ #F8F9FD" aria-label="#F8F9FD" />
            </div>
            <p style={{ fontWeight: "bold" }}>Where Should be the login modal?</p>
            <div className="md">
                <div className="md1">
                    <div className="md2 my-4 mx-2" ></div>
                </div>
                <div className="md1">
                    <div className="md2 my-4" style={{ marginLeft: "4rem" }} ></div>
                </div>
                <div className="md1">
                    <div className="md2  my-4 mx-auto"></div>
                </div>
            </div>
            <div class="form-check form-check-inline mx-5">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Left</label>
            </div>
            <div class="form-check form-check-inline mx-5">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Right</label>
            </div>
            <div class="form-check form-check-inline mx-5">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio1">Center</label>
            </div>
           <div>
            <button style={{ marginTop: "1.5rem" }} type="button" class="btn btn-primary">save & continue <i class="fa fa-solid fa-chevron-right"></i></button>
            <button style={{ color: "gray", marginTop: "1.5rem", marginLeft: "2rem" }} type="button" class="btn btn-light"><i class="fa fa-solid fa-rotate-left"></i> Reset</button>
           </div>
        </div>
    )
}
