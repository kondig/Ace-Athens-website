import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Innov from './Innov';
import Laser from './Laser';
import Limbs from './Limbs';
import Repairmastos from './Repairmastos';
import Facenon from './Face_non_invasive';
import Faceslight from './Face_slight_invasive';
import Facesurgery from './Face_surgery';
import Torso from './Torso';
import SkinCancer from './Skincancer';
import Nevi from './Nevi';
import Notice from './Gdprnotice';
import Burn from './Burn';
import Trauma from './Trauma';
import Scars from './Scars';
import Congenital from './Congenitalanomalies';
import Hifu from './Hifu';
import Regen from './Regen';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/innovative-therapies' component={Innov} onUpdate={() => window.scrollTo(0, 0)}/>
      <Route path='/non-invasive-therapies' component={Facenon}/>
      <Route path='/slightly-invasive-therapies' component={Faceslight}/>
      <Route path='/face-surgery' component={Facesurgery}/>
      <Route path='/torso' component={Torso}/>
      <Route path='/laser' component={Laser}/>
      <Route path='/limbs' component={Limbs}/>
      <Route path='/hifu' component={Hifu}/>
      <Route path='/breast-restoration' component={Repairmastos}/>
      <Route path='/nevi&melanomas' component={Nevi} onUpdate={() => window.scrollTo(0, 0)}/>
      <Route path='/skin-cancer' component={SkinCancer}/>
      <Route path='/GDPR' component={Notice}/>
      <Route path='/burn' component={Burn}/>
      <Route path='/trauma' component={Trauma}/>
      <Route path='/scars' component={Scars}/>
      <Route path='/congenital-anomalies' component={Congenital}/>
      <Route path='/regererative-med' component={Regen}/>
    </Switch>
  </main>
)


export  {Main}
