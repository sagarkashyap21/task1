import React from 'react'

export default function Profile() {
    return (
        <div>
            <div className="cont1">
                            <h2>Create Client Profile</h2>
                            <p>Add some basic information related to the client.</p>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div style={{ border: "1px solid lightgray", color: "gray", borderRadius: "50%", fontSize: "2rem", height: "8rem", width: "8rem", display: "flex", justifyContent: "center", alignItems: "center" }}>+</div>
                                <div style={{ marginLeft: "1rem" }}>
                                    <h5>Company Logo</h5>
                                    <p style={{ color: "gray" }}>Logo ratio shoud be 1:1 and should be 120px X 120 px</p>
                                </div>
                            </div>
                            <div className="form1">
                                <div class="row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="First name *" aria-label="First name *" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Last name *" aria-label="Last name *" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Select Business Category *" aria-label="Select Business Category *" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Select Facility Management Company *" aria-label="Select Facility Management Company *" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Company Email Address *" aria-label="Company Email Address *" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Mobile Number *" aria-label="Mobile Number *" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Select State *" aria-label="Select State *" />
                                    </div>
                                    <div class="col" style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div class="col-md-6">
                                            <input type="text" placeholder="Select city *" class="form-control" id="inputCity" />
                                        </div>
                                        <div class="col-md-5">
                                            <input type="text" placeholder="Pincode *" class="form-control" id="inputCity" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="GST Number *" aria-label="GST Number *" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="GST Number *" aria-label="GST Number *" />
                                    </div>
                                </div>
                                <button style={{ marginTop: "1.5rem" }} type="button" class="btn btn-primary">save & continue <i class="fa fa-solid fa-chevron-right"></i></button>
                                <button style={{ color: "gray", marginTop: "1.5rem", marginLeft: "2rem" }} type="button" class="btn btn-light"><i class="fa fa-solid fa-rotate-left"></i> Reset</button>
                            </div>

                        </div>
        </div>
    )
}
