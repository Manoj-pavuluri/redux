import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {connect} from 'react-redux'
import { openModel, closeModal,handleOnChange,handleSubmit,chooseQuestion } from './Actions/postActions';


class dashbord extends Component {
    openModal = () => {
        this.props.openModal()
    }
    closeModal = () => {
        this.props.closeModal()
    }
     handleOnChange = (event) =>{  
        this.props.handleOnChange({[event.target.name]:event.target.value});
     } 
     handleSubmit = () => {
         if (this.props.openmodel1.version) {
            this.props.handleSubmit({ visible: false, alert: true, version: '' });
             toast.success(`You selected template using version ${this.props.openmodel1.version}`);
         } else {
            this.props.handleSubmit({ visible: false, version: '', alert: true });
             toast.error("please select a version")
         }
     };
     chooseQuestion = () =>{  
        this.props.chooseQuestion();
     } 
    render() {
         const { chooseQuestion} = this.props.openmodel1;
        return (
            <React.Fragment>
                {this.props.openmodel1.alert && <React.Fragment>
                    <ToastContainer />
                </React.Fragment>}
                <div className="mt-4 ml-4">
                    <h5 className="my-3">1) Do you want to create HTML template? &nbsp;
                    <button className="btn 
                    btn-sm btn-outline-success mr-2" onClick={this.openModal} >YES</button>
                        <button className="btn btn-sm btn-outline-danger" onClick={this.chooseQuestion}>NO</button>
                    </h5>
                    {chooseQuestion && (
                        <h5>2) Do you want to create EMAIL template? &nbsp;
                         <button className="btn btn-sm btn-outline-success mr-2" onClick={this.openModal} >YES</button>
                            <button className="btn btn-sm btn-outline-danger">NO</button>
                        </h5>
                    )}
                </div>
                <Modal visible={this.props.openmodel1.visible} width="500" height="250" effect="fadeInUp" onClickAway={this.closeModal}>
                    <div className="p-5">
                        <h5>Which version of HTML are you using?</h5>
                        <div className="custom-control custom-radio">
                            <input
                                type="radio"
                                className="custom-control-input"
                                id="html4"
                                name="version"
                                checked={this.props.openmodel1.version === 'HTML4'}
                                value="HTML4"
                                onChange={this.handleOnChange}
                            />
                            <label className="custom-control-label" htmlFor="html4">HTML4</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input
                                type="radio"
                                className="custom-control-input"
                                id="html5"
                                name="version"
                                value="HTML5"
                                checked={this.props.openmodel1.version === 'HTML5'}
                                onChange={this.handleOnChange}
                            />
                            <label className="custom-control-label" htmlFor="html5">HTML5</label>
                        </div>
                        <div className="mt-5">
                            <button className="btn btn-sm btn-outline-success float-left" onClick={this.handleSubmit}>SUBMIT</button>
                            <button className="btn btn-sm btn-outline-danger float-right" onClick={this.closeModal}>CANCEL</button>
                        </div>
                    </div>
                </Modal>
            </React.Fragment>
        )
    }
};

const mapStateToProps = state =>({
    openmodel1 : state.PostReducers
})

const mapDispatchToProps =dispatch=>({
    openModal:()=>dispatch(openModel()),
    closeModal:()=>dispatch(closeModal()),
    handleOnChange:(event)=>dispatch(handleOnChange(event)),
    handleSubmit:()=>dispatch(handleSubmit()),
    chooseQuestion:()=>dispatch(chooseQuestion())

})

export default connect(mapStateToProps,mapDispatchToProps)(dashbord)