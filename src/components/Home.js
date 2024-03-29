import React, {useRef} from 'react'
import FontAwesome from 'react-fontawesome';
import Sticky from 'react-stickynode';
// import scrollToComponent from 'react-scroll-to-component';
// import {Link} from 'react-router-dom';
import {Slider} from './slider/slider';
// import {HostPopout} from './popunder';
import {Modal} from './popunder/modal';
import {Phil} from './moreInfo';
import {Mastos} from './moreInfo';
import {LaserFast} from './moreInfo';

import {Service} from './items/service';

const scrollUpToRef = (ref) => window.scrollTo(0, ref.current.offsetTop-400)
const scrollDownToRef = (ref) => window.scrollTo(0, 900)

const Home = () => {
    const topRef = useRef(null);
    const executeScroll = () => scrollUpToRef(topRef);
    const midRef = useRef(null);
    const executeDownScroll = () => scrollDownToRef(midRef)
    return (
        <div ref={topRef}>
          <Sticky enabled={true} top={40} bottomBoundary={1000} >
            <FontAwesome className='scrollArrow' onClick={executeDownScroll} name='chevron-down' data-hover='SCROLL DOWN' spin={false} size='2x' />
          </Sticky>
          <div className="mainpic"></div>
          <div className='mainpic-divider'></div>
          <div className="site-page">
            <div className="about" id="About_Us" ref={midRef}>
              <section className="about_title"> Ace Athens<br/><span className="about_subtitle"> Aesthetics Center</span><br/><span className="about_under_subtitle">
                Πλαστική, Επανορθωτική και Αισθητική Χειρουργική</span>
              </section>
            </div>
            <div className="about_text" >
              <p> <strong> Η Εταιρεία </strong> <br/><br/>
                Η Ace Athens - Aesthetics Center εδρεύει στην Αθήνα και δραστηριοποιείται στην Ελλάδα, Κύπρο και Αραβικό Κόσμο. Επιστημονικός Διευθυντής της Εταιρείας είναι ο πλαστικός
                χειρουργός κ. Κώστας Παπαιωάννου με πολυετή εμπειρία στο χώρο της Πλαστικής, Επανορθωτικής και Αισθητικής Χειρουργικής. Εργάστηκε στα Νοσοκομεία Γ.Ο.Ν.Κ « Αγ. Ανάργυροι»
                και Ογκολογικό Νοσοκομείο 6 ο ΙΚΑ «Γ. Γεννηματάς» από το 1998 έως το 2016, ενώ για το διάστημα 2015 – 2017, ως Διευθυντής τμήματος Πλαστικής Χειρουργικής σε Νοσοκομείο
                της Σαουδ. Αραβίας. Επιπλέον από το 1999 έως σήμερα δραστηριοποιείται και στον ιδιωτικό τομέα συνεργαζόμενος με μεγάλα ιδιωτικά Νοσοκομεία της Αθήνας. Σήμερα συνεργάζεται
                με το Νοσοκομείο Metropolitan General (πρώην ΙΑΣΩ General) στην Αθήνα, με το Κέντρο Poseidonia HealthCare στη Λάρνακα της Κύπρου και τον όμιλο ALHOKAIL Polyclinics στο
                Κόμπαρ της Σαουδικής Αραβίας και το Μπαχρέιν.
                <br/><br/><br/>
                H εταιρεία Ace Athens στεγάζεται στην Αθήνα, Κηφισιάς 27 Α , σε έναν ειδικά διαμορφωμένο χώρο, για την εφαρμογή των εξειδικευμένων εφαρμογών της πλαστικής, επανορθωτικής
                και αισθητικής χειρουργικής. Μία ομάδα πλαστικών χειρουργών σε συνεργασία με εξειδικευμένους ιατρούς στην αντιγήρανση, διατροφολόγους και αισθητικούς διαμορφώνει εξατομικευμένα
                πρωτόκολλα πάνω στην αντιγήρανση και την αναγεννητική ιατρική, συνδυάζοντας επεμβατικές και ελάχιστα επεμβατικές μεθόδους.
                <br/><br/>
                Πυλώνες της καθημερινής ιατρικής πρακτικής και συνεργασίας είναι:
              </p>
              <ul>
                <li>Βαθιά γνώση του αντικειμένου μας</li>
                <li>Συνεχής εκπαίδευση στα πλαίσια της συνεχιζόμενης ιατρικής εκπαίδευσης</li>
                <li>Αναζήτηση και εφαρμογή πρωτοποριακών πρωτοκόλλων θεραπείας</li>
                <li>Ενσωμάτωση των νεότερων εξελίξεων</li>
                <li>Συνεχής επικοινωνία με τους ασθενείς μας</li>
                <li>Δημιουργία και διατήρηση άμεσου και φιλικού περιβάλλοντος για τους ενδιαφερόμενους και ασθενείς μας</li>
              </ul>
              <p> <u>Πλαστικοί Χειρουργοί</u> <br/><br/>
                  Κώστας Παπαϊωάννου, MD, MSc <br/>
                  <span>Επιστημονικός Διευθυντής</span><br/><br/>
                  <u>Συνεργάτες</u> <br/><br/>
                  Κώστας Πάτσης, MD <br/>
                  <span>Πλαστικός Χειρουργός</span><br/><br/>
                  Poseidonia Healthcare <br/>
                  <span>47a Eleftherias Avenue/Aradippou, Larnaca, 7102, Cyprus</span><br/><br/>
                  Alcokail Specialized Polyclinic <br/>
                  <span>King Faisal Road, Al Yarmouk, Al Khobar 34422 7063, Saudi Arabia</span>
              </p>
              <Modal modaltitle={'Η ΦΙΛΟΣΟΦΙΑ ΜΟΥ'} title={'Η φιλοσοφία μου'} text={<Phil />} />
          </div>
          <div className="services" id="Services"> </div>
          <section className="services_text">
            <p className='paragraph'> Εφαρμογές του Ιατρείου μας </p>
            <div className="services-flex">
                <Service title='Αναίμακτη μεσοθεραπεία και μη επεμβατικές θεραπείες προσώπου και σώματος' link='/non-invasive-therapies' />
                <Service title='PRP και PRF θεραπείες προσώπου' link='/slightly-invasive-therapies'/>
                <Service title='Λιπομεταφορά' link='/limbs'/>
                <Service title='Ενδοϊστική Laser λιπόλυση' link='/limbs'/>
                <Service title='Ενέσιμη λιπόλυση, κρυολιπόλυση και Hifu λιπόλυση' link='/limbs'/>
                <Service title='Θεραπεία κυτταρίτιδας' link='/limbs'/>
                <Service title='Θεραπεία ουλών ακμής' link='/slightly-invasive-therapies'/>
                <Service title='Fractional Laser για αναγέννηση δέρματος προσώπου' link='/slightly-invasive-therapies'/>
                <Service title='Μη χειρουργικό lifting προσώπου και λαιμού με τεχνολογία Hifu' link='/hifu'/>
                <Service title='Φωτοαναγέννηση δέρματος προσώπου με τεχνολογία IPL' link='/slightly-invasive-therapies'/>
                <Service title='Θεραπεία καλοήθων δερματικών βλαβών και μυρμηκιών με Laser Διοξειδίου του Άνθρακα' link='' />
                <Service title='Αποτρίχωση με Laser' link='' />
                <Service title='Χαρτογράφηση σπίλων' link='/nevi&melanomas'/>
                <Service title='Χειρουργική αφαίρεση και αποκατάσταση δερματικού καρκίνου και μελανώματος' link='/skin-cancer'/>
                <Service title='Αποκατάσταση μαστού μετά μαστεκτομή' link='/breast-restoration'/>
                <Service title='Αυξητική, μειωτική και ανόρθωση μαστού. Γυναικομαστία' link='/torso'/>
                <Service title='Θεραπεία μετατραυματικών και μετεγχειρητικών ουλών' link='/scars'/>
                <Service title='Μετεγκαυματικές ουλές' link='/burn'/>
                <Service title='Ελάχιστα επεμβατικές θεραπείες' link='/slightly-invasive-therapies' subheader='με τη χρήση microneedling, fillers, Botox, νημάτων και μεσοθεραπείας' />
                <Service title='Αισθητικές επεμβάσεις προσώπου και σώματος' subheader='Βλεφαροπλαστική, Ωτοπλαστική, Ρινοπλαστική, Πωγωνοπλαστική, Lifting προσώπου και λαιμού, Κοιλιοπλαστική, Λιποαναρρόφηση, lifting μηρών και γλουτών' link='/face-surgery'/>
                <Service title='Laser F.A.S.T.' link='' />
            </div>
          </section>
          {/*<HostPopout title={'H φιλοσοφία μου'} text={<Phil />} buttonname={'H φιλοσοφία μου'} /> */}
          <p className='paragraph'>Το ιατρείο - εξοπλισμός</p>
          <Slider />
          <div className='divider'></div>
          <div className="mastos" id="mastos">
            <section className="mastos_title"> ΜΑΣΤΟΣ </section>
          </div>
          <div className="mastos_text" >
              <p> <strong> ΜΑΣΤΟΣ </strong> <br/><br/>
                Στην ιστορία της ανθρώπινης φύσης ανέκαθεν ο μαστός αποτελούσε σημαντικό όργανο για τη γυναίκα και σύμβολο μητρότητας και θηλυκότητας. Αποτελεί όμως και όργανο που δέχεται σημαντικές βιολογικές μεταβολές σ’ όλη τη διάρκεια ζωής της γυναίκας. Παράγοντες όπως η αυξομείωση του βάρους, οι ορμονικές διακυμάνσεις, η εφηβεία, η εγκυμοσύνη και η γαλουχία επηρεάζουν το σχήμα, το μέγεθος και τη σπαργή του, δημιουργώντας έτσι πλήθος αισθητικών προβλημάτων, που αναζητούν λύσεις στην πλαστική χειρουργική. Έτσι αυτές που δίνονται αφορούν την αύξηση, τη μείωση, την αποκατάσταση της συμμετρίας, την ανόρθωση  και την αποκατάσταση των μαστών μετά από μαστεκτομή.
              </p>
              <p>
                <u>Αυξητική μαστών</u> <br/>
                 Από τα τέλη του 19ου αιώνα επιχειρήθηκε ανεπιτυχώς η αύξηση των μαστών με μοσχεύματα λίπους. Στα μέσα του 20ου αιώνα ανακοινώθηκε η πρώτη επιτυχής αύξηση μαστών με ενθέματα σιλικόνης και έκτοτε έτυχε ευρείας αποδοχής παγκοσμίως η μέθοδος αυτή. Σήμερα χρησιμοποιούνται κυρίως ενθέματα δύο ειδών: ενθέματα με περίβλημα ελαστκοποιημένης σιλικόνης και ζελατινώδες περιεχόμενο και ενθέματα με περίβλημα από ελαστικοποιημένη σιλικόνη και περιεχόμενο από φυσιολογικό ορρό. Όλα τα παραπάνω ενθέματα προσφέρονται σε ποικιλία μεγεθών και σχημάτων και χρειάζονται έγκριση από τους αντίστοιχους οργανισμούς τροφίμων και φαρμάκων. Οι ενδείξεις για την αύξηση των μαστών με ενθέματα είναι: συγγενής μικρομαστία, ασυμμετρία μεγέθους μαστών, υποστροφή μαστών, αύξηση μεγέθους για αισθητικούς λόγους). Η επέμβαση γίνεται με γενική αναισθησία και η παραμονή στην κλινική είναι συνήθως μιας ημέρας. Οι τομές προσπέλασης είναι η δια της υπομάστιας πτυχής, περιθηλαία ή μασχαλιαία ενώ τελευταία αναφέρεται και η υπερομφάλια  που γίνεται ενδοσκοπικά και αποκλειστικά με ενθέματα φυσιολογικού ορρού.
              </p>
              <Modal modaltitle={'ΠΕΡΙΣΣΟΤΕΡΑ'} title={'Μαστός'} text={<Mastos />} />
          </div>
          {/* <HostPopout title={''} text={<Mastos />} buttonname={'Περισσότερα'} /> */}
          {/*<div className="other"></div>
            <section className="other_text">
              <p> <strong> Πλαστική χειρουργική και Υπερβαρικό οξυγόνο </strong> <br/><br/>
                Η χρήση του Υπερβαρικού Οξυγόνου στην Πλαστική Χειρουργική κερδίζει ολοένα και περισσότερο έδαφος στην Αμερική. Το Υπερβαρικό Οξυγόνο με τη χρήση καμπίνας μπορεί να προσφέρει σημαντικό όφελος στο τελικό αποτέλεσμα πλαστικών επεμβάσεων όπως η λιποαναρρόφηση, μειωτική και αυξητική μαστών, η κοιλιοπλαστική, τα face lifts καθώς και στην Επανορθωτική χειρουργική. Παράλληλα η εφαρμογή των χημικών peelings και των laser είναι ένα πεδίο όπου ο συνδυασμός τους με το Υπερβαρικό οξυγόνο μπορεί να αποβεί εξαιρετικά αποτελεσματικός. Αντίστοιχα εντυπωσιακά αποτελέσματα έχουμε στη μεταμόσχευση λίπους και στη χρήση αυξητικών παραγόντων για την επούλωση του τραύματος αλλά και την ανανέωση του προσώπου και την αντιμετώπιση της φωτογήρανσης.
              </p>
              <p>
                Οι ασθενείς που λαμβάνουν παράλληλα θεραπεία με Υπερβαρικό Οξυγόνο μπορεί να αναρρώνουν 30-50%  γρηγορότερα σε σχέση με αυτούς που δεν θα λάβουν την αντίστοιχη θεραπεία. Βλέπουν μείωση του οιδήματος, λιγότερες εκχυμώσεις και περιορισμό στην μετεγχειρητική φλεγμονή, γεγονός που τους επαναφέρει ταχύτερα στον καθημερινό ρυθμό ζωής. Μειώνει επίσης τον κίνδυνο μετεγχειρητικής λοίμωξης   στην περιοχή των τομών όπως και βελτιώνει μακροπρόθεσμα την ποιότητα των ουλών. Η μείωση του μετεχγειρητικκού πόνου επαναφέρει ταχύτερα τις δραστηριότητες του ατόμου. Στις μη επεμβατικές θεραπείες, όπως τα lasers και τα χημικά peelings, μειώνεται σημαντικά η ερυθρότητα και ο χρόνος ανάρρωσης, ενώ διεγείρεται εντονότερα και γρηγορότερα ο μηχανισμός παραγωγής κολλαγόνου και ελαστίνης, με αποτέλεσμα καλύτερα και πλέον μακρόχρονα αποτελέσματα.
              </p>
              <p>
                Οι καπνιστές, άτομα με μειωμένο αμυντικό σύστημα, παχύσαρκοι και οποιοσδήποτε έχει επιβαρυμένο ιατρικό ιστορικό που θα επηρεάσουν το χρόνο αλλά και την ποιότητα της ανάρρωσης, είναι οι καλύτεροι υποψήφιοι για να λάβουν παράλληλα με την επέμβαση ή την θεραπεία και Υπερβαρικό οξυγόνο. Επιπλέον και πέραν της μετεγχειρητικής θεραπείας με Υπερβαρικό οξυγόνο συστήνεται τουλάχιστον μια θεραπεία προεγχειρητικά για ακόμη καλύτερα αποτελέσματα.
              </p>
              <p>
                Τώρα και στην Ελλάδα εφαρμόζουμε αντίστοιχα πρωτόκολλα πριν και μετά από χειρουργικές και μη επεμβατικές θεραπείες στην πλαστική χειρουργική, χρησιμοποιώντας τις πλέον σύγχρονες τεχνολογίες υπερβαρικού οξυγόνου και fractional Lasers, με στόχο τα ταχύτερα και εντυπωσιακότερα αποτελέσματα.
             </p>
             <br/><br/>
             <FontAwesome className='scrollArrowBack' onClick={executeScroll} name='angle-up' data-hover='πίσω στο μενού' spin={false} size='2x' />
             <br/><br/>
            </section>*/}
            <div className="other">
                <div className="sectionTitle">
                Τι είναι το Laser F.A.S.T. <span>(Fiber Assisted Skin Tightening)</span> <br/>και πώς δρα στο λίπος και το δέρμα;
                </div>
            </div>
              <section className="other_text">
               <p>
                Εδώ και δύο χρόνια περίπου, εφαρμόζουμε στο ιατρείο μας μία νέα, πρωτότυπη και άκρως εντυπωσιακή θεραπεία με στόχο την αντιμετώπιση του χαλαρού και «κρεμασμένου» δέρματος σε σημεία στο πρόσωπο και το σώμα αλλά και του τοπικού λίπους.
               </p>
               <Modal modaltitle={'ΠΕΡΙΣΣΟΤΕΡΑ'}
                      title={<p className="modal-title">Laser F.A.S.T. <br/><span>(Fiber Assisted Skin Tightening)</span></p>}
                      text={<LaserFast />} />
               <br/><br/>
               <FontAwesome className='scrollArrowBack' onClick={executeScroll} name='angle-up' data-hover='πίσω στο μενού' spin={false} size='2x' />
               <br/><br/>
              </section>
          </div>
        </div>
    );
}

export default Home
