import "./App.css";
import Button from "./components/Button/Button";
import WayToTeach from "./components/WayToTeach";
import { useState } from "react";
import { ways, differences } from "./components/data";
import { Fragment } from "react";
import IntroSection from "./components/Intro";
import TabsSections from "./components/TabsSection";
import Ul from "./components/ul";
import FeedbackSection from "./components/FeedbackSection";
import { tabsItems } from "./components/costants";

const tabsContent = {
  "main":<Ul/>,
  "feedback":<FeedbackSection/>,
  "second":<div>hello</div>

}

function App() {
  const [now, setNow] = useState(new Date());
  // setInterval(() => setNow(new Date()), 1000);
  //   const [now, setNow] =useState(new Date())
  // setInterval( ()=> setNow(new Date()),1000)
  const [contentType, setContentType] = useState(null);
  const [counting, setCounting] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(tabsItems[0]);



  const handleOpen = () => {
    setOpen(!open);
  };

  const clickCounting = () => {
    return setCounting(counting + 1);
  };

  //console.log("App...")
  const handleClick = (type) => {
    //console.log('touch',type)
    setContentType(type);
    console.log(contentType);
  };

  const renderContentType = () => {
    if (contentType) {
      return <p>{differences[contentType]} </p>;
    }

    return <p>press button</p>;
  };
  const handleChangeTabs = (tab)=>{
    setActiveTab(tab)

  }

  return (
    <>
    <div className="wraper">
      {/* <header className="time">
        

        <div>
          <span>Welcome</span>
          <span> {now.toLocaleTimeString()}</span>
        </div>
        <button className="esc button " onClick={handleOpen}>
          open module
        </button>
      </header> */}
      <main>
        <div className="conteiner">
          <h1>adasdadasdas</h1>
  
        <TabsSections items={tabsItems} active={activeTab.value} onChange={handleChangeTabs}/>
         {tabsContent[activeTab.value]}
          
        
          
      
          {/* <div className="huy">
            <div
              className="border"
              style={{
                opacity: open ? 1 : 0,
                height: open ? "100vh" : "0",
              }}
            >
              
              <div className="buttons ">
                <button
                  className="esc button"
                  onClick={handleOpen}
                  style={{
                    margin: open ? "20px" : "-100px",
                  }}
                >
                  X
                </button>
              </div>
              <div>
                <a href="img">sdsd</a>
              </div>
            </div>
          </div> */}
          
         
       
       
        </div>
      </main>
      </div>
    </>
  );
}

export default App;
