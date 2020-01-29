// react
import React from 'react';
export default function NewAddress() {
    return (

                <div className="row no-gutters">
                    <div className="col-12 col-lg-7 col-xl-6">
                        <div className="panel panel-default">
                            <span className="text-dark"> New Address</span>
                        </div>
                        <div className="form">
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-input"
                                id="password-current"
                                placeholder="First Name"
                            />
                        </div> <div className="form-group">
                            <input
                                type="password"
                                className="form-input"
                                id="password-current"
                                placeholder="Last Name"
                            />
                        </div> <div className="form-group">
                            <input
                                type="password"
                                className="form-input"
                                id="password-current"
                                placeholder="Country"
                            />
                        </div> <div className="form-group">
                            <input
                                type="password"
                                className="form-input"
                                id="password-current"
                                placeholder="Postal Code"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-input"
                                id="password-new"
                                placeholder="City"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-input"
                                id="password-confirm"
                                placeholder="Address"
                            />
                        </div>
                        <div className="form-group mt-5 mb-0">
                            <button type="button"  className="form-submit btn btn-primary">Change</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}
