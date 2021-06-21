import "./styles.css";
import logo1 from './logo1.png'
import logo2 from './logo2.png'
import log3 from './log3.png'
//import logo1 from './logo1.png'

export default function App() {
  var s1 = {background: "url('./logo1.png')" }
  return (
    <div className="App">
      <header> 
<nav id="header-nav" className="navbar navbar-default">
  <div className="container"> 
 
 <div className="navbar-header" style={s1}> 
    <a href="index.html" className="pull-left visible-md visible-lg">
      <div id="logo-img" alt="logo image">
      <img src={logo2} alt=""/>
     </div>
    </a>
    <div className="navbar-brand">
      <a href="index.html"> <h1> David Chu's China Bistrot</h1></a> 
    <p> 
      <img src={log3} alt=""/>
      <span> Kosher Certified</span>
     </p>
    </div>
    <button type="button" className="navbar-toggle collapsed"
    data-toggle="collapse" data-target="#collapse-nav" aria-expanded="false"> 

    <span className="sr-only"> Toggle navigation </span>
    <span className="icon-bar" > </span>
    <span className="icon-bar"> </span>
    <span className="icon-bar"> </span>
    </button>
 </div>
<div> 
  <ul className="nav navbar-nav pull-right"> 
    <li>
      <a href=""> <span> </span> Menu</a>

    </li>
    <li>
      <a href=""> <span> </span> Award</a>

    </li>
    <li>
      <a href=""> <span> </span> Contact</a>

    </li>
  </ul>

</div>


</div>
 </nav>
  </header>
      
    </div>
    
  );
}
