import React, { Component, useRef} from 'react';
import A3a1 from './img/A3a1.jpg'
import A3a2 from './img/A3a2.jpg'
import A3a3 from './img/A3a3.jpg'
import A3b1 from './img/A3b1.jpg'
import A3b2 from './img/A3b2.jpg'
import A3c1 from './img/A3c1.png'
import A3c2 from './img/A3c2.png'
import {Popform} from './popform';
// import scrollToComponent from 'react-scroll-to-component';
import FontAwesome from 'react-fontawesome';
import { HashLink } from 'react-router-hash-link';

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return null
  }
}

const scrollUpToRef = (ref) => window.scrollTo(0, ref.current.offsetTop-400)

const Facesurgery = () => {
    const topRef = useRef(null);
    const executeScroll = () => scrollUpToRef(topRef);
    return (
      <div className="sub_page">
      <ScrollToTopOnMount/>
        <h1 ref={topRef}> ΠΡΟΣΩΠΟ <br/> Χειρουργικες Επεμβασεις </h1>
        <div className="therapy-links">
            <div className="therapy_bg"> <HashLink to="#rhinoplasty" scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'center'})}>Ρινο-<br/>πλαστική</HashLink> </div>
            <div className="therapy_bg"> <HashLink to="#blepharoplasty" scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'center'})}>Βλέφαρο-<br/>πλαστική</HashLink> </div>
            <div className="therapy_bg"> <HashLink to="#otoplasty" scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'center'})}>Ωτο-<br/>πλαστική</HashLink> </div>
        </div>
        <Popform title={`Ace Athens`} subtitle={'Ρωτήστε την'} openFormButton={'Ρωτήστε μας'} />
        <h3 id='rhinoplasty'>ΡΙΝΟΠΛΑΣΤΙΚΗ </h3>
        <h4>1. Σχετικά με την ανατομία της μύτης </h4>
        <p>
          Η μύτη ως ανατομικός και αισθητικός σχηματισμός, θεωρείται αναπόσπαστο συστατικό στην διαμόρφωση ενός ισορροπημένου και όμορφου
          προσώπου. Φανταστείτε ένα ηλιακό ρολόι χωρίς γνώμονα; Κάπως έτσι θα ήταν και ένα πρόσωπο χωρίς τη μύτη του.
        </p>
        <div className="sub_flex">
          <div className="flexitem_a">
            <img src={A3a1} alt="solar clock" className="img-width-medium" />
          </div>
          <div className="flexitem_a">
            <img src={A3a2} alt="sphinx" className="img-width-medium" />
          </div>
        </div>
        <p>
          Φυλετικοί, γενετικοί αλλά και επίκτητοι παράγοντες ( π.χ. ένας προηγούμενος τραυματισμός ) καθορίζουν το σχήμα και τις διαστάσεις
          της μύτης στο κάθε άτομο ξεχωριστά. Η διαμόρφωση της ολοκληρώνεται με τη διαμόρφωση του υπόλοιπου σκελετού του προσώπου και είναι
          για μεν τα κορίτσια η ηλικία των 16 και τα αγόρια η ηλικία των 18 ετών αντίστοιχα..
        </p>
        <div className="sub_flex">
          <div className="flexitem_a">
            <img src={A3a3} alt="solar clock" className="img-width-extra-small" />
          </div>
          <div className="flexitem_text_w_picture">
              Το σχήμα και η διαμόρφωση της μύτης καθορίζονται από τη διάταξη και τις αναλογίες του οστέινου και χόνδρινου σκελετού καθώς
              και το πάχος του δέρματος. Τελικά η μύτη αποτελεί έναν πυραμοειδή σχηματισμό στο κέντρο του προσώπου, στο μέσο τριτημόριο.
              Οι τέλειες αναλογίες της μύτης έχουν περιγραφεί από τον Leonardo da Vinci και άλλους.
          </div>
        </div>
        <h4>2. Σχετικά με την επέμβαση</h4>
        <p>
            Η επέμβαση γίνεται με γενική αναισθησία.
            <br/> <br/>
            Μπορεί να γίνει είτε με ανοικτή ή με κλειστή μέθοδο, ανάλογα με τις ενδείξεις.
            <br/> <br/>
            Στις περισσότερες επεμβάσεις γίνονται και οστεοτομίες, πλην των επεμβάσεων που αφορούν μόνο το ακρορρίνιο.
            <br/> <br/>
            Λόγω των καταγμάτων που κάνουμε υπάρχει μετεγχειρητικά οίδημα και μελανιές γύρω από τα μάτια.
            <br/> <br/>
            Η επέμβαση δεν χαρακτηρίζεται από πόνο.
            <br/> <br/>
            Η διάρκεια παραμονής στο Νοσοκομείο κυμαίνεται από λίγες ώρες μετά την επέμβαση έως ένα βράδυ.
        </p>
        <h4>3. Σχετικά με τη μετεγχειρητική πορεία</h4>
        <p>
          2-3 μέρες μετά αφαιρείται το ταμπόν από τη μύτη.
          <br/> <br/>
          Ο γύψινος νάρθηκας αφαιρείται σε μία βδομάδα.
          <br/> <br/>
          Αρχικά υπάρχει το μετεγχειρητικό οίδημα, αλλά το νέο σχήμα της μύτης φαίνεται αμέσως μετά την αφαίρεση του νάρθηκα. Η διαμόρφωση της μύτης
          είναι σταδιακή και το τελικό αποτέλεσμα φαίνεται μετά από 6-12 μήνες ανάλογα και με το πάχος του δέρματος.
          <br/> <br/>
          Τον πρώτο μήνα δεν φοράτε γυαλιά, αποφεύγετε τους κλειστούς χώρους με συνωστισμό και μπάνιο στη θάλασσα μπορείτε να κάνετε μετά από 2-3 βδομάδες.
          Όσοι φοράτε φακούς επαφής, μπορείτε να τους φορέσετε μετά από μία βδομάδα.
          <br/> <br/>
          Μιλήστε με το γιατρό σας για τις επιπλοκές που μπορεί να επισυμβούν.
        </p>
        <p>
          <b>ΟΙ ΑΙΣΘΗΤΙΚΕΣ ΕΠΕΜΒΑΣΕΙΣ ΕΙΝΑΙ ΙΑΤΡΙΚΕΣ ΠΡΑΞΕΙΣ ΚΑΙ ΩΣ ΕΚ ΤΟΥΤΟΥ ΕΝΕΧΟΥΝ ΤΟΝ ΚΙΝΔΥΝΟ ΕΜΦΑΝΙΣΗΣ ΕΠΙΠΛΟΚΩΝ, ΟΠΩΣ ΚΑΘΕ ΧΕΙΡΟΥΡΓΙΚΗ ΕΠΕΜΒΑΣΗ.</b>
        </p>
        <br/><br/>
        <FontAwesome className='scrollArrowBack' onClick={executeScroll} name='angle-up' data-hover='πίσω στο μενού' spin={false} size='2x' />
        <br/><br/>
        <h3 id='blepharoplasty'>ΒΛΕΦΑΡΟΠΛΑΣΤΙΚΗ</h3>
        <h4>1. Σχετικά με την ανατομία της περιοχής </h4>
        <div className="sub_flex">
          <div className="flexitem_a">
            <img src={A3b1} alt="eye" className="img-width-medium" />
          </div>
          <div className="flexitem_text_w_picture">
              Όπως ακριβώς ένα κάδρο τονίζει το περιεχόμενο ενός πίνακα, έτσι και τα μάτια θα πρέπει να περιβάλλονται από ένα ισχυρό πλαίσιο για να θεωρούνται ελκυστικά.
              Εδώ οι καθαρές γραμμές των βλεφάρων και ο σκελετός του κόγχου σηματοδοτούν την ομορφιά, τη νεανικότητα και την ανάδειξη της φρεσκάδας και ξεκούρασης σε ένα
              πρόσωπο. Η απουσία χαλάρωσης στο δέρμα των βλεφάρων, πτώσης του άνω βλεφάρου και σακκούλων στο κάτω σε συνδυασμό με την σωστή θέση του φρυδιού και την
              προβολή των οστών του κόγχου συνθέτουν τον βασικό προσανατολισμό σε μία αισθητική επέμβαση βλεφάρων.
          </div>
        </div>
        <h4>2. Σχετικά με την επέμβαση  </h4>
        <p>
          Η επέμβαση γίνεται με τοπική αναισθησία ή νευροληπτοαναλγησία ( μέθη ).
          <br/><br/>
          Μπορεί να γίνει επέμβαση στα άνω  ή και στα άνω και κάτω βλέφαρα ταυτόχρονα
        </p>
        <div className="sub_flex">
          <div className="flexitem_a">
            <img src={A3b2} alt="plepharoplasty schematic" className="img-width-small" />
          </div>
          <div className="flexitem_text_w_picture">
            Υπάρχουν διάφορες μέθοδοι για τη βλεφαροπλαστική, ανάλογα με τις ενδείξεις. Αν όμως δεν υπάρχει σημαντική χαλάρωση στο κάτω βλέφαρο παρά σακκούλα
            ( λόγω της ιδιοκατασκευής του, ιδιαίτερα σε νεότερα άτομα ) η επέμβαση μπορεί να γίνει διαμέσου του επιπεφυκότα του κάτω βλεφάρου και να αφαιρεθεί το προέχον λίπος
            με τη βοήθεια Laser ή διαθερμίας.
          </div>
        </div>
        <p>
          Μπορεί να συνδυαστεί με άλλες επεμβάσεις όπως lifting ή ανόρθωση φρυδιών.
        </p>
        <h4>3. Σχετικά με την μετεγχειρητική πορεία  </h4>
        <p>
          Μπορεί να παρατηρηθεί οίδημα ή μελανιές που περνάνε σε μερικές μέρες.
          <br/> <br/>
          Γενικά το άτομο μπορεί να επιστρέψει στην εργασία του μετά σπό 5-7 μέρες και στην γυμναστική μετά από 2-3 βδομάδες.
          <br/> <br/>
          Χρειάζεται οπωσδήποτε αντι ηλιακή προστασία.
          <br/> <br/>
          Μιλήστε με το γιατρό σας για τις επιπλοκές που μπορεί να επισυμβούν.
        </p>
        <p>
          <b>ΟΙ ΑΙΣΘΗΤΙΚΕΣ ΕΠΕΜΒΑΣΕΙΣ ΕΙΝΑΙ ΙΑΤΡΙΚΕΣ ΠΡΑΞΕΙΣ ΚΑΙ ΩΣ ΕΚ ΤΟΥΤΟΥ ΕΝΕΧΟΥΝ ΤΟΝ ΚΙΝΔΥΝΟ ΕΜΦΑΝΙΣΗΣ ΕΠΙΠΛΟΚΩΝ, ΟΠΩΣ ΚΑΘΕ ΧΕΙΡΟΥΡΓΙΚΗ ΕΠΕΜΒΑΣΗ.</b>
        </p>
        <br/><br/>
        <FontAwesome className='scrollArrowBack' onClick={executeScroll} name='angle-up' data-hover='πίσω στο μενού' spin={false} size='2x' />
        <br/><br/>
        <h3 id='otoplasty'>ΩΤΟΠΛΑΣΤΙΚΗ</h3>
        <h4>1. Σχετικά με την ανατομία των αυτιών </h4>
        <div className="sub_flex">
          <div className="sub_onepic">
            <img src={A3c1} alt="ear anatomy" className="img-width-extra-large" />
          </div>
        </div>
        <p>
          Το 75% του τελικού μεγέθους του πτερυγίου διαμορφώνεται ήδη στην ηλικία των 4 ετών.
        </p>
        <div className="sub_flex">
          <div className="flexitem_a">
            <img src={A3c2} alt="ear schematic" className="img-width-small" />
          </div>
          <div className="flexitem_text_w_picture">
            Οι συνήθεις ανατομικές δυσμορφίες αφορούν στον ατελή σχηματισμό της ανθέλικας, στην μεγάλη κογχοσκαφική γωνία και στην υπεραναπτυγμένη κόγχη.
            <br/><br/> Άλλες δυσμορφίες μπορεί να αφορούν στο σχηματισμό του λοβίου, όπως επίσης και στην συνολικη απλασία του πτερυγίου, που χρειάζεται πιο σύνθετη αποκατάσταση.
          </div>
        </div>
        <p>
          Η δυσμορφία του πτερυγίου των αυτιών μπορεί να δημιουργήσει πρόβλημα στην κοινωνικοποίηση των παιδιών, γι αυτό και συστήνεται η διόρθωσή τους πριν τη σχολική ηλικία.
        </p>
        <h4>2. Σχετικά με την επέμβαση </h4>
        <p>
          Η επέμβαση γίνεται με τοπική αναισθησία. Σε μικρά παιδιά παρ’ όλα αυτά, συστήνεται η γενική αναισθησία.
          <br/><br/>
          Υπάρχουν διάφορες τεχνικές με πολύ καλά αποτελέσματα.
          <br/><br/>
          Όλες οι τομές γίνονται από την πίσω πλευρά του πτερυγίου με συνέπεια να μην είναι εμφανείς οι ουλές μετεγχειρητικά
        </p>
        <h4>3. Σχετικά με την μετεγχειρητική πορεία  </h4>
        <p>
          Η επίδεση των αυτιών ανοίγεται μετά 2-3 μέρες.
          <br/> <br/>
          Τα ράμματα αφαιρούνται στις 10 μέρες.
          <br/> <br/>
          Για ένα μήνα πρέπει να φοράτε μία κορδέλα στα αυτιά, ιδιαίτερα κατά τη διάρκεια του ύπνου.
          <br/> <br/>
          Μιλήστε με το γιατρό σας για τις επιπλοκές που μπορεί να επισυμβούν.
        </p>
        <p>
          <b>ΟΙ ΑΙΣΘΗΤΙΚΕΣ ΕΠΕΜΒΑΣΕΙΣ ΕΙΝΑΙ ΙΑΤΡΙΚΕΣ ΠΡΑΞΕΙΣ ΚΑΙ ΩΣ ΕΚ ΤΟΥΤΟΥ ΕΝΕΧΟΥΝ ΤΟΝ ΚΙΝΔΥΝΟ ΕΜΦΑΝΙΣΗΣ ΕΠΙΠΛΟΚΩΝ, ΟΠΩΣ ΚΑΘΕ ΧΕΙΡΟΥΡΓΙΚΗ ΕΠΕΜΒΑΣΗ.</b>
        </p>
        <br/><br/>
        <FontAwesome className='scrollArrowBack' onClick={executeScroll} name='angle-up' data-hover='πίσω στο μενού' spin={false} size='2x' />
        <br/><br/>
      </div>
)};

export default Facesurgery
