import React from "react";

let loadingcomp = null;

const HOC = (Component) => {
    return loadingcomp = (props) => {
        if(props.apiCalled) {
            return <div>
            Loading .....
                </div>
        } else if(props.data.length > 0 ){
            return <Component {...props}/>
        } 
        return <div>
            No data
        </div>
    }

}

export default HOC;