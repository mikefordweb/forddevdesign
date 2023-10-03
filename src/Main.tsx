import React, { MouseEvent, useEffect, useState } from 'react';
import './App.css';
import WorkItemList from './WorkItemList';
import ServicesItems from './ServicesItems';
import Clients from './Clients';
import WebForm from './WebForm';
import Footer from './Footer';
import Header from './Header';
import { SERVICES_ITEMS } from './ServicesItemData';
import { CLIENTS_ITEMS } from './ClientsData';

const Main: React.FC = () => {

  let [devDesAniClass, setDevDesAniClass] = useState<string>('');
  let [fordAniClass, setFordAniClass] = useState<string>('');
  let [fadeInClass, setFadeInClass] = useState<string>('');
  let [showHideMobileMenu, setShowHideMobileMenu] = useState<string>('hide');
  let [showHideMobileIcon, setShowHideMobileIcon] = useState<string>('hide');
  let [showHideMainMenu, setShowHideMainMenu] = useState<string>('show');
  let [moveLogo, setMoveLogo] = useState<string>('');
  let [fadeBkg, setFadeBkg] = useState<string>('');
  let [hideLogoBkg1, setHideLogoBkg1] = useState<string>('');
  let [hideLogoBkg2, setHideLogoBkg2] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setDevDesAniClass('devdes-animate');
      setFordAniClass('ford-animate');
      setFadeInClass('logo-fade-in');
    }, 1000);

    const animated: HTMLElement | null = document.querySelector(".fdd-logo-devdes");

    if (animated !== null) {
      animated.addEventListener("transitionend", () => {
        setMoveLogo('move-logo');
        setFadeBkg('fade-bkg');
        setHideLogoBkg1('hide');
        setHideLogoBkg2('hide');
      });
    }
  }, []);

  useEffect(() => {
    setSizeStyle();
    showHideMobile();
  });

  const clickMenu = (ev: MouseEvent) => {
    if (showHideMobileMenu === 'hide') {
      setShowHideMobileMenu('show');
    } else {
      setShowHideMobileMenu('hide');
    }
  }

  const showHideMobile = () => {
    if (window.innerWidth < 870) {
      //setShowHideMobileMenu('show');
      setShowHideMobileIcon('show');
      setShowHideMainMenu('hide');
    } else {
      //setShowHideMobileMenu('hide');
      setShowHideMobileIcon('hide');
      setShowHideMainMenu('show');
    }
  }

  const setSizeStyle = () => {
    const sizeStyle: Array<any> = [];
    let orgWidth: HTMLElement | null;
    let workItems: NodeListOf<HTMLElement>;
    let itemWidth: number | null = 0;
    let itemMargin: number | null = 0;
    let numCols: number | null = 0;
    
    orgWidth = document.querySelector<HTMLElement>('.fdd-section-content');
    workItems = document.querySelectorAll<HTMLElement>('.fdd-portfolio-item');
    
    if (window.innerWidth < 621) {
      numCols = 1;
    } else if (window.innerWidth < 1034) {
      numCols = 2;
    } else {
      numCols = 3;
    }

    if (orgWidth !== null && orgWidth !== undefined) {
        itemWidth = orgWidth.offsetWidth / numCols;
        itemMargin = orgWidth.offsetWidth * .015;
        for (let i = 0; i<workItems.length; i++) {
            let dataKey: string | null = '';
            let workItemImage: HTMLElement | null;
            
            workItemImage = workItems[i].querySelector('.work-item-image');
            if (workItemImage !== null) {
              dataKey = workItemImage.getAttribute('data-key');
              workItemImage.style.width = itemWidth + 'px';

              switch(workItems[i].getAttribute('data-itemvalue')) {
                case '1':
                  sizeStyle[0] = itemWidth - itemMargin;
                  sizeStyle[1] = itemWidth * .853711;
                  break;
                case '2':
                  sizeStyle[0] = itemWidth - itemMargin;
                  sizeStyle[1] = itemWidth * .580786;
                  break;
                default:
                  break;
              }

              if (dataKey !== null) {
                if (+dataKey % numCols === 0) {
                    sizeStyle[2] = 0;
                } else {
                    sizeStyle[2] = '1.3%';
                }
              } else {
                sizeStyle[2] = 0;
              }

              workItemImage.style.width = sizeStyle[0] + 'px';
              workItemImage.style.height = sizeStyle[1] + 'px';
              workItemImage.style.marginRight = sizeStyle[2].toString();
              workItemImage.style.marginBottom = itemWidth * .013 * numCols + 'px';
            }
        }
    }
  }

  window.addEventListener("resize", setSizeStyle);
  window.addEventListener("resize", showHideMobile);

  return (
    <div>
    <div className={`intro-bg ${fadeBkg}`}></div>
    <div className="fdd-content">
      <div className={`animated-logo ${moveLogo}`}>
          <div className={`fdd-logo-bkg ${hideLogoBkg1}`}></div>
          <div className={`fdd-logo-bkg2 ${hideLogoBkg2}`}></div>
          <img src="/img/fdd-logo-ford.png" className={`fdd-logo-ford ${fordAniClass}`}></img>
          <img src="/img/fdd-logo-img.png" className={`fdd-logo-img ${fadeInClass}`}></img>
          <img src="/img/fdd-logo-devdes.png" className={`fdd-logo-devdes ${devDesAniClass}`}></img>
      </div>
      
      <div className="bg"></div>
      <Header headerType={"main"} />

      <div className="fdd-main-text">
        <p>Applied science meets aesthetics at Ford Dev & Design. We create. We code. And our web development and design expertise builds brands across multiple platforms through relentless idea generation.</p>

        <p>We’ve produced digital, brand and print projects for United Airlines, Toyota, the Super Bowl, Discover Financial Services and more. And we’re ready to lend our <a href="#" className="fdd-a">extensive experience</a> to your next initiative.</p>

        <p>No matter the project size, our resources and collaborative efforts are always centered around your goals. You’ll never hear us say it can’t be done. Instead, we do whatever it takes to arrive at “<a href="#" className="fdd-a">We can.</a>“</p>
      </div>

      <div className="experience-section">
        <div className="experience-title">
          OUR WEB DEVELOPMENT AND DESIGN EXPERIENCE SPANS ACROSS SECTORS
        </div>
        <ul className="experience-list">
          <li>Advertising</li>
          <li>Communications</li>
          <li>Distribution</li>
          <li>Financial Services</li>
          <li>Healthcare</li>
        </ul>
        <ul className="experience-list">
          <li>Insurance</li>
          <li>IoT</li>
          <li>Legal</li>
          <li>Manufacturing</li>
          <li>Non-profit</li>
        </ul>

        <ul className="experience-list">
          <li>Real Estate</li>
          <li>Software</li>
          <li>Staffing</li>
          <li>Transportation</li>
          <li>Workload Automation (WLA)</li>
        </ul>
      </div>
      <section className="our-work-section">
        <div className="fdd-section-header" id="ourwork">
          Our Work
        </div>
        <div className="fdd-section-content">
          <WorkItemList />
        </div>
      </section>
      <section className="services-section">
        <div className="fdd-section-header" id="services">
          Services
        </div>
        <ServicesItems servicesitems={SERVICES_ITEMS} />
      </section>
      <section className="clients-section">
        <div className="fdd-section-header" id="clients">
          Clients
        </div>
        <Clients clients={CLIENTS_ITEMS} />
      </section>
      <section className="webform-section" id="contact">
        <WebForm />
      </section>
      <Footer />
    </div>
    </div>
  );
}

export default Main;
