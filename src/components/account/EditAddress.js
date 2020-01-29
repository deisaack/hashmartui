// react
import React from 'react';
import addresses from "../../data/accountAddresses";
export default function EditAddress() {
const address= addresses[0];
    return (
        <div className="row no-gutters">
            <div className="col-12 col-lg-7 col-xl-6" >
                <div className="panel panel-default">
                    <span className="text-dark"> Update Address</span>
                </div>
                <div className="form">
                    <div className="form-group">
                        <input
                            type="text"
                            value={address.firstName}
                            className="form-input"
                            id="password-current"
                        />
                    </div> <div className="form-group">
                    <input
                        type="text"
                        className="form-input"
                        value={address.lastName}
                        id="password-current"
                    />
                </div> <div className="form-group">
                    <input
                        type="text"
                        value={address.country}
                        className="form-input"
                        id="password-current"
                    />
                </div> <div className="form-group">
                    <input
                        type="text"
                        value={address.postcode}
                        className="form-input"
                        id="password-current"
                    />
                </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-input"
                            value={address.city}
                            id="password-new"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-input"
                            value={address.address}
                            id="password-confirm"
                        />
                    </div>
                    <div className="form-group mt-5 mb-0">
                        <button type="button"  className="form-submit btn btn-primary">Update</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
