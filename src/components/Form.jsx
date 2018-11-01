import React, { Component } from 'react';
import {connect} from "react-redux";

class Form extends Component {


    render() { 
            console.log(this.props)
        return ( 
            <div className="row">
            
                <form onSubmit={(e) => this.props.onSubmit(e) } className="col-md-6 offset-3">
                <br/> <br/>
                    <input 
                     className="form-control"
                     type="text"
                     name=""
                     value={this.props.value}
                     onChange={(e) => this.props.onChange(e) }
                     placeholder="votre nom"
                    />

                    <br/>
                    
                    <input
                     className="btn btn-dark form-control"
                     type="submit"
                     value="envoyer" 
                    />
                </form>
            </div>
         );
    }

}



const mapStateToProps = (state) => {
    return {value : state.value}
};
const mapDispatchToProps = (dispatch,state) => {
 return {  
     onChange : (e) =>{
        dispatch({
            type : "ON_CHANGE",
            payload : {
                value : e.target.value
            }
        })
    },
    onSubmit : (e)=>{
        e.preventDefault();
        dispatch({
            type: "ON_SUBMIT",
            payload : {
                pushToList : e.target[0].defaultValue
            }
        })
    }
 }
}



 
export default connect(mapStateToProps,mapDispatchToProps)(Form);