import React from 'react';
import A6a1 from './img/A6a1.jpg';
import A6a2 from './img/A6a2.jpg';
import A6a3 from './img/A6a3.jpg';
import A6a3b from './img/A6a3b.jpg';
import A6b1 from './img/A6b1.jpg';
import A6b2 from './img/A6b2.jpg';
import {Popform} from './popform';
import scrollToComponent from 'react-scroll-to-component';
import FontAwesome from 'react-fontawesome';
import { HashLink } from 'react-router-hash-link';

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return null
  }
}

const Hifu = () => (
  <div className="sub_page">
  <ScrollToTopOnMount/>
  <h1 ref={(section) => {this.head=section;}} > Hifu <br/><br/> </h1>
  <div className="therapy-links">
      <div className="therapy"> <HashLink to="#face-lifting" scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'center'})}>Μη χειρουργικό<br/>Lifting<br/>προσώπου</HashLink> </div>
      <div className="therapy_bg"> <HashLink to="#liposculpture" scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'center'})}>Λιπογλυπτική<br/>σώματος</HashLink> </div>
  </div>
  <Popform title={`Ace Athens`} subtitle={'Ρωτήστε την'} openFormButton={'Ρωτήστε μας'} />
  <h3 id='face-lifting'>Lifting προσώπου χωρίς χειρουργείο; <br/> Ναι, και με άμεσα και εντυπωσιακά αποτελέσματα! </h3>
  <p>
    Το επεμβατικό λίφτινγκ ήταν μέχρι σήμερα ο μόνος τρόπος να έχουμε ένα σφικτό και νεανικό δέρμα στο πρόσωπο. Τώρα αυτό σε πολλές περιπτώσεις είναι πια
    παρελθόν. Η <b>νέα τεχνολογία HIFU</b> (High Intensity Focused Ultrasound) εξασφαλίζει, χωρίς χειρουργείο, την <b>τέλεια σύσφιξη για προγούλι, λαιμό, πρόσωπο,
    μάτια, με συνδυασμό πρωτοπόρων θεραπειών</b>. Τώρα οι γυναίκες μπορούν να αφαιρέσουν χρόνια από την εμφάνιση τους και να χαρίσουν νεανικότητα με τη σύγχρονη
    τεχνολογία εστιασμένων υπερήχων που επιτυγχάνουν σύσφιγξη και ανόρθωση του δέρματος στο λαιμό, την παρειά και τη γωνία του φρυδιού. Το επεμβατικό lifting
    του προσώπου και του λαιμού παραμένει βέβαια ένα ισχυρό όπλο στα χέρια του πλαστικού χειρουργού στις περιπτώσεις εκείνες που η χαλάρωση του δέρματος και
    των ιστών είναι σημαντική και δεν θα μπορούσε να ανταποκριθεί σε συντηρητικές θεραπείες.
  </p>
  <div className="sub_flex">
    <div className="sub_onepic">
      <img src={A6a1} alt="hifu-device" className="img-width-large" />
    </div>
  </div>
  <p>
    Η HIFU είναι η μοναδική τεχνολογία Αισθητικής Ιατρικής που έχει λάβει έγκριση από το αμερικάνικο οργανισμό FDA, τόσο για τις εφαρμογές της στο πρόσωπο όσο
    και για εκείνες στο σώμα.
  </p>
  <p>
    Οι υψηλής πυκνότητας εστιασμένοι υπέρηχοι ( High Intensed focused ultrasound – HIFU ) διοχετεύονται δια μέσου του δέρματος ( αναίμακτα ) και προκαλούν
    εκλεκτική θερμική ζώνη στο επιπολής μυοαπονευρωτικό σύστημα της παρειάς, θερμαίνοντας την περιτονία σε τέτοιο βαθμό ώστε να προκαλείται ρίκνωσή της. Ως
    αποτέλεσμα έτσι, έχουμε σύσφιγξη και ανόρθωση του δέρματος στο λαιμό, την παρειά και τη γωνία του φρυδιού.
  </p>
  <p>
    Στο κέντρο μας <b>συνδυάζεται</b> με αυτόλογη ή ετερόλογη μεσοθεραπεία, εφαρμογή επεμβατικών ή μη επεμβατικών Laser και μείωση του φλεγμονώδους παράγοντα,
    περιορισμό του οιδήματος και επιτάχυνση της επούλωσης με τη χρήση κάψουλας με τεχνολογία στο μακρό φάσμα της υπέρυθρης ακτινοβολίας ή Αναπλαστική
    Οξυγονοθεραπεια (Θάλαμος Υπερβαρικου Οξυγόνου).
  </p>
  <p>
    Τα οφέλη από έναν τέτοιο συνδυασμό είναι άμεσα, εντυπωσιακά  και με διάρκεια αποτελέσματα με ελάχιστο χρόνο ανάρρωσης και αποφεύγοντας ξένα υλικά,
    αντιμετωπίζοντας έτσι αναίμακτα την γήρανση των ιστών στο σύνολό τους και όχι μόνο στο επίπεδο του δέρματος.
  </p>
  <p>
    Η θεραπεία ολοκληρώνεται σε 1-3 συνεδρίες ανάλογα με την βαρύτητα της γήρανσης με μεσοδιαστήματα ενός μηνός ανάμεσα στις θεραπείες.
  </p>
  <div className="sub_flex">
    <div className="sub_onepic">
      <img src={A6a2} alt="hifu-face" className="img-width-large" />
    </div>
  </div>
  <h4>Αναίμακτη βλεφαροπλαστική</h4>
  <p>
    Η θεραπεία ολοκληρώνεται σε 1-3 συνεδρίες ανάλογα με την βαρύτητα της γήρανσης με μεσοδιαστήματα ενός μηνός ανάμεσα στις θεραπείες.
  </p>
  <div className="sub_flex">
    <div className="sub_onepic">
      <img src={A6a3} alt="hifu-eye-before" className="img-width-small" />
      <img src={A6a3b} alt="hifu-eye-after" className="img-width-small" />
    </div>
  </div>
  <br/><br/>
  <FontAwesome className='scrollArrowBack' onClick={() => scrollToComponent(this.head, {offset: -300, align: 'top', duration: 4500})} name='angle-up' data-hover='πίσω στο μενού' spin={false} size='2x' />
  <br/><br/>
  <h3 id='liposculpture'>Λιπογλυπτική σώματος χωρίς χειρουργείο; <br/> Ναι, και με άμεσα και εντυπωσιακά αποτελέσματα! </h3>
  <p>
    Το επεμβατικό λίφτινγκ ήταν μέχρι σήμερα ο μόνος τρόπος να έχουμε ένα σφικτό και νεανικό σώμα.
  </p>
  <div className="sub_flex">
    <div className="flexitem_a">
      <img src={A6b1} alt="hifu flanks" className="img-width-extra-small" />
    </div>
    <div className="flexitem_text_w_picture">
        Τώρα αυτό είναι σε πολλές περιπτώσεις πια παρελθόν. Η νέα τεχνολογία HIFU (High Intensity Focused Ultrasound) εξασφαλίζει, χωρίς χειρουργείο το
        αποτέλεσμα. Ο στόχος είναι να έχουμε σύσφιξη σε περιοχές του σώματος που μέχρι τώρα μόνο χειρουργικά θα μπορούσαμε. Γόνατα, κοιλιά, ένωση γλουτών
        με πόδια, μπράτσα και ντεκολτέ είναι οι περιοχές δράσης αυτής της μοναδικής θεραπείας. Η θεραπεία HIFU BODY είναι απολύτως ακίνδυνη και ανώδυνη.
        H ασθενής μπορεί αμέσως να επιστρέψει στις καθημερινές της δραστηριότητες χωρίς κανένα απολύτως σημάδι ή ερεθισμό στο σώμα, και φυσικά χωρίς κανένα
        πόνο.
        <br/><br/>
        Η HIFU είναι η μοναδική τεχνολογία Αισθητικής Ιατρικής που έχει λάβει έγκριση από το αμερικάνικο οργανισμό FDA, τόσο για τις εφαρμογές της στο
        πρόσωπο όσο και για εκείνες στο σώμα.
    </div>
  </div>
  <p>
    Η τεχνολογία Lipo-Hifu χρησιμοποιεί υψηλής έντασης εστιασμένους υπερήχους παρέχοντας ομοιόμορφη ενέργεια σε ακριβές βάθος για να καταστρέψει στοχευμένα
    το υποδόριο λίπος μη επεμβατικά. Προκαλεί ταχεία αύξηση τοπικά της θερμοκρασίας, καταστρέφοντας το λίπος στην κοιλιά και τα χέρια, χαρίζοντας ορατά
    αποτελέσματα μετά από μια μόνο θεραπεία διάρκειας μιας ώρας. Εχει την ικανότητα να διεισδύει στο λίπος χωρίς να προκαλεί βλάβη στο δέρμα ή τους γύρω
    ιστούς.
  </p>
  <div className="sub_flex">
    <div className="sub_onepic">
      <img src={A6b2} alt="hifu-schematic" className="img-width-extra-large" />
    </div>
  </div>
  <br/><br/>
  <FontAwesome className='scrollArrowBack' onClick={() => scrollToComponent(this.head, {offset: -300, align: 'top', duration: 4500})} name='angle-up' data-hover='πίσω στο μενού' spin={false} size='2x' />
  <br/><br/>
  <h6>
    <center>Kαλέστε τωρα στο  <a href="tel:+302106471066">210 64 71 066</a>  για να κλεισετε ραντεβού με τον πλαστικό χειρουργό</center>
  </h6>
  <br/><br/>
</div>
)

export default Hifu
