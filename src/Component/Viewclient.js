import React from 'react'
import List from '../List';


export default function Viewclient() {
    return (
             <div className="home2">
                <div className="home21">
                    <h1>View Clients</h1>
                    <p>Client Master <span style={{ color: "gray" }}>/View Clients</span></p>
                    <div className="header">
                        <img src="/Images/input field2.png" alt="" />
                        <div>
                            <img src="/Images/Button.png" alt="" />
                            <img className="mx-2" src="/Images/Button2.png" alt="" />
                        </div>
                    </div>
                    <div className="t">

                        <table class="table  table-borderless" >
                            <thead class="table-light">
                                <tr style={{}}>
                                    <td>Company Name</td>
                                    <td>Email Address</td>
                                    <td>Phone No</td>
                                    <td>Contact Person</td>
                                    <td>Facilitator</td>
                                    <td>Sites</td>
                                    <td>Tenants</td>
                                    <td>Tenant Groups</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    List.map((val) => {
                                        return (
                                            <tr>
                                                <td><img src={val.img} alt="" /><span>{val.name}</span> </td>
                                                <td>{val.email}</td>
                                                <td>{val.phone}</td>
                                                <td>{val.contact} </td>
                                                <td>--</td>
                                                <td>{val.sites}</td>
                                                <td>{val.tenants}</td>
                                                <td>{val.tenantgroup}</td>
                                                <td><i class="fa fa-solid fa-ellipsis-vertical"></i></td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                        <div className="homefooter">
                            <div style={{ listStyle: "none" }}>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>...</li>
                                <li>48</li>
                                <li>49</li>
                            </div>
                            <div>
                                <button type="button" class="btn btn-light"><i class="fa fa-solid fa-chevron-left"></i> Previous</button>
                                <button type="button" class="btn btn-light"><i class="fa fa-solid fa-chevron-right"></i> Next</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}
