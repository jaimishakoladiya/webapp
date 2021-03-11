import React from 'react'
function CompanyProfile() {
    return (
       <>
        <div className="clearfix"></div>
    
    <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" id="departmentModal">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header primaryHeader company_profile">
                    <h1 className="modal-title" id="departmentQuestionTitle" style={{textTransform: "capitalize"}}></h1>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <div id="departmentInputs" className="row">
                        <div className="form-group newStyle col-lg-6 col-md-12">
                            <h6 className="cap">Department</h6>
                            <input type="text" className="form-control formInputs " id="txtDepartmentName"
                                placeholder="Name"/>
                        </div>
                        <div className="form-group newStyle col-lg-6 col-md-12">
                            <h6 className="cap">Cost Center</h6>
                            <input type="text" className="form-control formInputs " id="txtDepartmentCostCenter"
                                placeholder="Cost Center"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive with-action">
                                <table style={{width:"100%"}} id="table">
                                    <thead>
                                        <tr>
                                            <th className="cap" style={{width:"40%"}}> Default Questions for
                                                Department</th>
                                            <th style={{width:"7%"}}></th>
                                        </tr>
                                    </thead>
                                    <tbody id="tblViewQuestionDepartment">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="noStyle mt-3">
                                <div className="innerQForm">
                                    <div className="form-group row">
                                        <div className="form-group sizeing col-md-12 custom-dd">
                                            <input type="text" Re className="form-control formInputs"
                                                id="txtQuestionDepartment" placeholder="New Question"/>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="button" className="btn btn-pink "
                                                id="saveQuestionDepartment">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-cancel float-left" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-pink " id="saveDepartment">Save</button>
                </div>
            </div>
        </div>
    </div>
       </>

    )
}

export default CompanyProfile
