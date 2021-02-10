import React from 'react'
import './../index.css'

function Search() {
    return (
        <div className="s01">
            <form>
                    <div className="row">
                        <div className="col-lg-5 col-sm-12">
                            <select class="form-select" aria-label="Default select example">
                                <option value="1" selected>Lahore</option>
                                <option value="2">Karachi</option>
                                <option value="3">Islamabad</option>
                                <option value="3">Rawalpindi</option>
                                <option value="3">Sargodha</option>
                            </select>
                        </div>
                        <div className="col-lg-5 col-sm-6">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Select Specialist</option>
                                <option value="1">Neurologist</option>
                                <option value="2">Child Specialist</option>
                                <option value="3">Gynecologist</option>
                                <option value="3">Orthopadic Surgeon</option>
                                <option value="3">Endocrinlogist</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <input type="submit" className="btn btn-primary" value="Search" />
                        </div>
                    </div>
            </form>
        </div>
    );
}

export default Search;