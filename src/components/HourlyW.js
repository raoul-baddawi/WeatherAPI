import React from "react";

class HourlyW extends React.Component {

    constructor({hour, temp, image}){
        super({hour, temp, image})
        this.state={hour:hour, temp:temp, image:image}
    }
    render(){
        return <div className="svg">
            <p>{this.state.hour}</p>
            <img src={this.state.image}/>
            <p>{this.state.temp}</p>
        </div>
    }
}

export default HourlyW;