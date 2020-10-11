import React, { Component } from 'react';
import {Popform} from './popform';
import scrollToComponent from 'react-scroll-to-component';
import FontAwesome from 'react-fontawesome';
import B2a1 from './img/B2a1.png';
import B2a2 from './img/B2a2.png';
import B2a3 from './img/B2a3.png';
import B2a4 from './img/B2a4.png';
import B2a5 from './img/B2a5.png';
import B2a6 from './img/B2a6.png';
import B2a7 from './img/B2a7.png';
import B2b1 from './img/B2b1.png';

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

const Nevi = () => (

  <div className="sub_page">
  <ScrollToTopOnMount/>
    <h1 ref={(section) => {this.head=section;}}> ΣΠΙΛΟΙ ή ΕΛΙΕΣ ( Nevi or moles ) </h1>
    <Popform title={`Ace Athens`} subtitle={'Ρωτήστε την'} openFormButton={'Ρωτήστε μας'} />
    <p>
      Οι σπίλοι ή ελιές είναι καλοήθεις μορφολογικοί σχηματισμοί του δέρματος. Μπορεί να εμφανιστούν από την γέννηση ή τις πρώτες μέρες της ζωής ( συγγενείς ) ή αργότερα κατά
      την εφηβική ή ενήλικη ζωή ( επίκτητοι ). Περιγράφονται διάφορες κλινικές οντότητες και το είδος τους εξαρτάται τόσο από γενετικούς παράγοντες, όσο και από την έκθεση
      κάποιου στον ήλιο. Εμφανίζονται οπουδήποτε στο σώμα, αλλά απαντώνται συχνότερα σε σημεία που εκτίθενται στην ηλιακή ακτινοβολία. Απαιτείται κλινική εκτίμηση των σπίλων
      για αξιολόγηση της καλοήθειας ή υποψίας κακοήθειας και πρέπει να γίνεται είτε από δερματολόγο ή πλαστικό χειρουργό. Σε άτομα που έχουν πολλαπλούς σπίλους, συνιστάται
      προληπτικός κλινικός έλεγχος μία φορά το χρόνο για τυχόν αλλαγές στο μορφή, την υφή και το σχήμα τους.
    </p>
    <p>
      Το βασικοκυτταρικό καρκίνωμα εμφανίζεται στο δέρμα, ενώ το ακανθοκυτταρικό τόσο στο δέρμα όσο και στους βλεννογόνους και από τα δύο είναι αυτό που μπορεί να δώσει
      και μεταστάσεις σε άλλα σημεία του σώματος.
    </p>
    <div className="sub_flex">
      <div className="flexitem_a">
        <img src={B2a1} alt="mole-1" className="img-height-many" />
        <img src={B2a2} alt="mole-2" className="img-height-many" />
        <img src={B2a3} alt="mole-3" className="img-height-many" />
        <img src={B2a4} alt="mole-4" className="img-height-many" />
        <img src={B2a5} alt="mole-5" className="img-height-many" />
      </div>
    </div>
    <h3>Μύθοι και πραγματικότητες για τους σπίλους</h3>
    <ul>
      <li> Η άποψη ότι δεν πειράζουμε μία ελιά, είναι εντελώς ΛΑΝΘΑΣΜΕΝΗ</li>
      <li> Αντίθετα, η ένδειξη για τυχόν αφαίρεση κάποιων ύποπτων σπίλων τίθεται από τους ειδικούς και μόνο ιατρούς</li>
      <li> Η αξιολόγηση ενός ύποπτου σπίλου βασίζεται στο ΑΒCDE, δηλαδή ασυμμετρία, όρια, χρώμα, διάμετρος και εξέλιξη και η σύγκρισή του με προηγούμενες μετρήσεις</li>
      <li> Ο έλεγχος κλινικά γίνεται με δερματοσκόπηση ή χαρτογράφηση</li>
      <li> Η ένδειξη για αφαίρεση με χειρουργείο ή Laser τίθεται από τον ειδικό ιατρό </li>
      <li> Οποιαδήποτε ελιά αφαιρείται χειρουργικά είναι σκόπιμο να αποστέλλεται για ιστολογική εξέταση</li>
      <li> Οι λόγοι αφαίρεσης ενός σπίλου είναι καθαρά αισθητικοί, πρακτικοί ( κίνδυνος τραυματισμού - φλεγμονής ) και ιατρικοί ( υποψία δυσπλασίας ή κακοήθειας ) </li>
      <li> Ο τρόπος εφαρμογής της αφαίρεσης, το μέγεθος του σπίλου αλλά και ο ίδιος ο οργανισμός, καθορίζουν τη διαδικασία επούλωσης και το σημάδι που δημιουργείται</li>
      <li> Πολλές φορές συστήνεται η εφαρμογή τοπικής επουλωτικής θεραπείας καθώς και η προστασία από τον ήλιο κατά την διαδικασία της πολύμηνης επούλωσης. </li>
    </ul>
    <h3>ΑΤΥΠΟΙ Ή ΔΥΣΠΛΑΣΤΙΚΟΙ ΣΠΙΛΟΙ </h3>
    <p>
      Οι άτυποι σπίλοι είναι ασυνήθεις καλοήθεις ελιές, που αποκαλούνται και με τον όρο δυσπλαστικές. Μπορεί να μοιάζουν με μελάνωμα και όσοι έχουν πάνω τους δυσπλαστικούς
      σπίλους έχουν μεγαλύτερο κίνδυνο εμφάνισης μελανώματος στο έδαφος του σπίλου ή σε κάποιο άλλο σημείο του σώματός τους, σε κάποιο στάδιο της ζωής τους. Όσο περισσότερους
      τέτοιους σπίλους έχει κάποιος τόσο μεγαλύτερος είναι ο κίνδυνος. Έτσι αν έχει πάνω από 10 δυσπλαστικούς σπίλους στο σώμα του, ο κίνδυνος εμφάνισης μελανώματος αυξάνει
      κατά 12 φορές συγκριτικά με τον γενικό πληθυσμό.
    </p>
    <p>
      Η κληρονομικότητα σχετίζεται άμεσα με την εμφάνιση της δυσπλασίας. Μπορεί να εμφανίζεται σε οικογένειες αλλά και στους Καυκάσιους. Ο κίνδυνος εμφάνισης μελανώματος ανά
      ομάδα επικινδυνότητας είναι:
    </p>
    <ul>
      <li> Όσοι έχουν δυσπλαστικούς σπίλους και ιστορικό μελανώματος στην οικογένεια σε συγγενείς α’ βαθμού</li>
      <li> Όσοι έχουν δυσπλαστικούς σπίκλους χωρίς οικογενειακό ιστορικό μελανώματος</li>
      <li> Όσοι έχουν πάνω από 50 φυσιολογικούς σπίλους στο σώμα τους</li>
    </ul>
    <p>
      Ολοι αυτοί θα πρέπει να αποφεύγουν έκθεση στον ήλιο μεταξύ 11πμ – 4 μμ, να έχουν αντιηλιακή προστασία και να υποβάλλονται σε τακτικό περιοδικό έλεγχο.
    </p>
    <div className="sub_flex">
      <div className="flexitem_a">
        <img src={B2a6} alt="" className="img-width-small" />
      </div>
      <div className="flexitem_text_w_picture_wide">
          Για να ταξινομηθεί ένας σπίλος ως άτυπος υπάρχουν συγκεκριμένα ιστολογικά κριτήρια, τα οποία πρέπει να πληρούνται, ενώ η κυτταρική ατυπία θα ταξινομηθεί από τον
          εξειδικευμένο γιατρό ως ήπια, μέτρια ή βαριά. Οι συγκεκριμένοι σπίλοι συνήθως συγκεντρώνονται στον κορμό, ειδικά στην πλάτη, αλλά και σε άλλα σημεία του σώματος.
          Κλινικά πληρούν κάποια ή όλα τα κριτήρια ABCDE, τα οποία χρησιμοποιούνται για την αξιολόγηση του ενδεχόμενου κακοήθους μελανώματος με ασυμμετρία, ακανόνιστα άκρα,
          παραλλαγές του χρώματος, διάμετρο μεγαλύτερη των 6 χιλιοστών και αύξηση του μεγέθους ή εξέλιξη.
      </div>
    </div>
    <p>
      Επομένως, οι άτυποι σπίλοι πρέπει να αφαιρούνται, να αποστέλλονται για βιοψία για την οριστική διάγνωση και ταξινόμησή τους καθώς επίσης θα πρέπει να δίνονται και σαφείς
      οδηγίες σε σχέση με τη συμπεριφορά απέναντι στον ήλιο.
    </p>
    <div className="sub_flex">
      <div className="flexitem_a">
        <img src={B2a7} alt="many-nevi" className="img-width-small" />
      </div>
      <div className="flexitem_text_w_picture_wide">
          Ορισμένα άτομα έχουν πολλαπλούς σπίλους στο σώμα τους, παρουσιάζοντας το σύνδρομο δυσπλαστικών σπίλων, με τα ακόλουθα τρία χαρακτηριστικά:
          <ul>
            <li> 100 ή περισσότεροι σπίλοι</li>
            <li> Ένας ή περισσότεροι με διάμετρο >8 χιλ. </li>
            <li> Ένας ή περισσότεροι με δυσπλασία</li>
          </ul>
      </div>
    </div>
    <h3>ΜΕΛΑΝΩΜΑ</h3>
    <div className="sub_flex">
      <div className="flexitem_a">
        <img src={B2b1} alt="melanoma" className="img-width-extra-small" />
      </div>
      <div className="flexitem_text_w_picture_wide">
          Είναι από τις πιο επικίνδυνες κακοήθειες του δέρματος, προερχόμενο από τα μελανοκύτταρα που βρίσκονται στην επιδερμίδα. Το πιο σύνηθες αίτιο είναι η διακεκομμένη
          χωρίς προφύλαξη έκθεση στο υπεριώδες φάσμα της ηλιακής ακτινοβολίας, που ενεργοποιεί μια σειρά αλυσιδωτών αντιδράσεων με την καταστροφή του DNA των δερματικών
          κυττάρων και τις μεταλλάξεις, που οδηγούν στον ταχύ πολλαπλασιασμό και τη δημιουργία κακοήθων όγκων. Μπορεί να εμφανιστεί στο έδαφος προϋπάρχοντος σπίλου ή απευθείας
          στο δέρμα. Συνήθως έχει σκούρο μαύρο ή καφέ χρώμα, αλλά μπορεί να αποκτήσει και άλλες αποχρώσεις όπως ερυθρό, μώβ, μπλε ή και ανοιχτό χρώμα. Το ερύθημα από τον ήλιο
          κατά την παιδική ηλικία έχει συσχετιστεί άμεσα με την ανάπτυξη μελανώματος κατά την ενήλικη ζωή.
      </div>
    </div>
    <p>
      Η θεραπεία του είναι καταρχήν χειρουργική. Πάνω από όλα όμως προέχει η έγκαιρη διάγνωση και η χειρουργική του αντιμετώπιση στα πρώιμα στάδια, όπου και θεωρείται σχεδόν
      100% θεραπεύσιμο. Σε αντίθετη περίπτωση, θεωρείται συστηματική νόσος με αυξημένο κίνδυνο μεταστάσεων σε άλλα μέρη του σώματος, δια μέσου της λεμφικής ή αιματικής ροής
      και η θεραπεία του είναι πιο περίπλοκη και μακρόχρονη, συνδυάζοντας τη χειρουργική αντιμετώπιση με την ανοσοθεραπέια, τη χημειοθεραπεία και άλλες πιο σύγχρονες μεθόδους.
    </p>
    <p>
      Σε μεγαλύτερα στάδια επέκτασης της νόσου, θεωρείται από τις πλέον θανατηφόρες κακοήθειες.
    </p>
    <br/><br/>
    <FontAwesome className='scrollArrowBack' onClick={() => scrollToComponent(this.head, {offset: -300, align: 'top', duration: 2500})} name='angle-up' data-hover='πίσω στο μενού' spin={false} size='2x' />
    <br/><br/>
  </div>
)

export default Nevi
