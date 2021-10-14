import { useEffect } from "react";

function SearchBar({search, onChange}){
    return(
        <div className="input-group mb-3 row">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">
                        <i className="bi bi-search" stylename="font-size: 2rem; color: cornflowerblue;"/>
                    </span>
                    <input type="text" 
                            value={search} 
                            onChange={(evt) => {onChange(evt.target.value)}} 
                            className="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping"/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;