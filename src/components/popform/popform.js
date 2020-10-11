import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

class Aceform extends Component {
  render() {
    return (
      <div className='askmd'>
        <div>
          <div className="">
            <h5> {this.props.subtitle} </h5> <h2> {this.props.title} </h2>
            <button className='popform-close' onClick={this.props.closeForm}> <FontAwesome name='times' size='2x' /> </button>
            <form method="POST" action="https://formspree.io/condig69@hotmail.com">
              <select className="input-cell pageList" name="topic" required>
                <option value="generic" selected disabled>Επιλέξτε θέμα ερώτησης</option>
                <option value="face-nonInvasive">Πρόσωπο - μη επεμβατικές θεραπείες</option>
                <option value="face-slight">Πρόσωπο - ελάχιστα επεμβατικές θεραπείες</option>
                <option value="face-surgery">Πρόσωπο - χειρουργικές επεμβάσεις</option>
                <option value="hifu">Hifu</option>
                <option value="limbs">Άκρα</option>
                <option value="torso">Κορμός</option>
                <option value="innovation">Πρωτοποριακές Θεραπείες</option>
                <option value="breast-repair">Αποκατάσταση Μαστού</option>
                <option value="nevi&moles">Σπίλοι & Μελανώματα</option>
                <option value="burn">Έγκαυμα</option>
                <option value="trauma">Τραύμα</option>
                <option value="skin-cancer">Καρκίνος Δέρματος</option>
                <option value="scars">Ουλές</option>
                <option value="CongenitalAnomalies">Συγγενείς Ανωμαλίες</option>
              </select>
              <textarea type="textarea" className="textarea"  rows="5" cols="20" wrap="hard" name="question" placeholder="  H ερώτηση σας" ></textarea>
              <input type="textbox" className="input-cell" name="fullname" placeholder="  Το oνοματεπώνυμο σας" required/>
              <input type="textbox" className="input-cell" name="email" placeholder="  Το email σας" required/>
              <button type="submit" className='popform-button'>Αποστολή</button><br/>

            </form>
            <Link className='form-link' to={`/GDPR`}> <p className="gdpr"> Συναίνεση περί προσωπικών δεδομένων,<br/>μάθετε περισσότερα </p></Link>
          </div>

        </div>
      </div>
    )
  }
}


class FormContainer extends Component {
  constructor(props) {
    super(props);
    // this.popout = this.popout.bind(this);
    // this.popoutClosed = this.popoutClosed.bind(this);
    this.state = { isSeen: false};
}
  toggleForm() {
    this.setState({
      isSeen: !this.state.isSeen
    });
  }
  render() {
    const {title, subtitle, openFormButton } = this.props;
    return (
    <div className='popform'>
    {this.state.isSeen ?
          <Aceform
            title={title}
            subtitle={subtitle}
            closeForm={this.toggleForm.bind(this)}
          />
        : <div>
            <button className='popform-open' onClick={this.toggleForm.bind(this)}>
              <FontAwesome className='md-icon' name='user-md' size='4x' /> <br/>
              {openFormButton}
            </button>
          </div>
    }
    </div>
    );
  }
  handleClickOutside = () => {
    this.setState({isSeen: false})
  }
}
const Popform = onClickOutside(FormContainer)
export {Popform};
