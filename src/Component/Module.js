import React from 'react'

export default function Module() {
    return (
        <div className="module">
            <div className="module1">
                <h2>Modules Setup</h2>
                <p style={{ color: "gray" }}>Select the modules that the client can use..</p>
                <div className="checkbox">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Home / Dashboard</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Helpdesk</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Assets</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Daily Tasks</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">PPM</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Employees</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Profile</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Transactions</label>
                    </div>
                </div>
                <button style={{ marginTop: "1.5rem" }} type="button" class="btn btn-primary">save & continue <i class="fa fa-solid fa-chevron-right"></i></button>
                <button style={{ color: "gray", marginTop: "1.5rem", marginLeft: "2rem" }} type="button" class="btn btn-light"><i class="fa fa-solid fa-rotate-left"></i> Reset</button>
            </div>
            <div className="module2">
                <div className="md21">
                    <img src="/Images/Icon Block.png" alt="" />
                    <div>
                        <h4>Daily Tasks</h4>
                        <p style={{ color: "gray" }}>Select the sub modules that the client can use.</p>
                    </div>
                    <button style={{ backgroundColor: "#153AC7" }} type="button" class=""><i class="sa fa-solid fa-check"></i> Visible to Client</button>
                </div>
                <div className="checkbox">
                    <div style={{ fontWeight: "bold" }} class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Show All Sub Modules</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Summary</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">View Tasks</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Create New Task</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Logbook</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Logsheet</label>
                        <li className="my-3">
                            <input type="checkbox" name="tall-1" id="tall-1" />
                            <label className="mx-3" for="tall-1">Daily</label>
                        </li>
                        <li>
                            <input type="checkbox" name="tall-1" id="tall-1" />
                            <label  className="mx-3" for="tall-1">Activity Wise</label>
                        </li>

                    </div>
                </div>
            </div>
        </div>
    )
}
