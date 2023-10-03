import React, { MouseEvent, ReactElement, useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import { PortfolioObj } from './PortfolioObj';
import { selectPortfolio } from './features/todos/portfolioSlice'
import { useAppSelector } from './app/hooks'
import Header from './Header';
import Footer from './Footer';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface PorfolioProps {
  portfolioitems: PortfolioObj[];
}

const Portfolio = ({ portfolioitems }: PorfolioProps) => {

  const portfolioSel = useAppSelector(selectPortfolio)
    console.log("portfolioSel: ", portfolioSel)
    let portfolioItems = portfolioSel[0];
    console.log("portfolioItems: ", portfolioItems)
  
  console.log("portfolioitems: ", portfolioitems);

  useEffect(() => {
    //setSizeStyle();
    loadPortfolio();
  }, []);

  const routeParams = useParams();
  let [portfolioItem1, setPortfolioItem1] = useState<PortfolioObj>(new PortfolioObj());
  let [allHtml, setAllHtml] = useState<any>([]);
  //let [imageArray, setImageArray] = useState<any>([]);

  const loadPortfolio = () => {

    let portfolioItem: any = {};
    let portfolioRows: number = 0;
    let htmlArr: Array<object> = [];

    for (let i = 0; i<portfolioitems.length; i++) {
      if (portfolioitems[i].url === routeParams.pagepath) {
        portfolioItem = portfolioitems[i];
        setPortfolioItem1(portfolioitems[i]);
      }
    }

    portfolioItem.imageArray.toString().replace(/'/g,'').split(',')

    let portfolioColumns: Array<any> = [];
    
    if (portfolioItem.columns === 4) {
      portfolioColumns = [1,2,3,4];
    } else if (portfolioItem.columns === 2) {
      portfolioColumns = [1,2];
    } else if (portfolioItem.columns === 3) {
      portfolioColumns = [1,2,3];
    } else if (portfolioItem.columns === 1) {
      portfolioColumns = [1];
    }

    let imgArrLength: number = 0;
    if (portfolioItem.imageArray.length === 0) {
      imgArrLength = 1;
    } else {
      imgArrLength = portfolioItem.imageArray.length
    }
    
    portfolioRows = Math.ceil(imgArrLength / portfolioItem.columns);
    
    for (let i = 0; i<portfolioRows; i++) {
      let item2render: Array<any> = [];
      if (portfolioItem.columns === 4) {
        if (portfolioColumns[i] === 1) {
          item2render = [1,2,3,4];
        }
        if (portfolioColumns[i] === 2) {
          item2render = [5,6,7,8];
        }
        if (portfolioColumns[i] === 3) {
          item2render = [9,10,11,12];
        }
        if (portfolioColumns[i] === 4) {
          item2render = [13,14,15,16];
        }
      }
      if (portfolioItem.columns === 2) {
        switch(i) {
          case 0:
            item2render = [0,1,];
            break;
          case 1:
            item2render = [2,3];
            break;
          case 2:
            item2render = [4,5];
            break;
          case 3:
            item2render = [6,7];
            break;
          default:
            break;
        }
      }
      if (portfolioItem.columns === 1) {
        switch(i) {
          case 0:
            item2render = [0,1,2];
            break;
          case 1:
            item2render = [3,4,5];
            break;
          case 2:
            item2render = [6,7,8];
            break;
          default:
            break;
        }
      }
      if (portfolioItem.columns === 3) {
        
        switch(i) {
          case 0:
            item2render = [0,1,2];
            break;
          case 1:
            item2render = [3,4,5];
            break;
          case 2:
            item2render = [6,7,8];
            break;
          case 3:
            item2render = [9,10,11];
            break;
          case 4:
            item2render = [12,13,14];
            break;
          case 5:
            item2render = [15,16,17];
            break;
          case 6:
            item2render = [18,19,20];
            break;
          case 7:
            item2render = [21,22,23];
            break;
          case 8:
            item2render = [24,25,26];
            break;
          case 9:
            item2render = [27,28,29];
            break;
          case 10:
            item2render = [30,31,32];
            break;
          default:
            break;
        }
      }
      let htmlRow: Array<ReactElement> = [];

      if (portfolioItem.columns === 1 && portfolioItem.videoItem.length > 0) {
        htmlRow.push(<div className="portfolio-item cols-0"><iframe width="560" height="315" src="https://www.youtube.com/embed/V9QLZ_7isHc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>);
      } else {
        portfolioItem.imageArray.forEach((portitem: any, j: number): any => {
          if (item2render.includes(j)) {
            let htmlItem: HTMLElement = document.createElement('div') as HTMLElement;
            let imgItem: HTMLElement = document.createElement('div') as HTMLElement;
            htmlItem.classList.add("portfolio-item");
      
            if (portfolioItem.columns === 2) {
              htmlRow.push(<div className="portfolio-item cols-2" key={j}><img src={`/img/${portitem}`} className="portfolio-item-img"></img></div>);
            } else if (portfolioItem.columns === 3) {
              htmlRow.push(<div className="portfolio-item cols-3" key={j}><img src={`/img/${portitem}`} className="portfolio-item-img"></img></div>);
            } else if (portfolioItem.columns === 4) {
              htmlRow.push(<div className="portfolio-item cols-4" key={j}><img src={`/img/${portitem}`} className="portfolio-item-img"></img></div>);
            } else if (portfolioItem.columns === 1) {
              htmlRow.push(<div className="portfolio-item cols-1" key={j}><img src={`/img/${portitem}`} className="portfolio-item-img"></img></div>);
            }

          }
          
        })
      }
      htmlArr.push(htmlRow);
    }
    setAllHtml(htmlArr);
  }

  const clickNav = (ev: MouseEvent) => {
    if (ev.currentTarget.classList.contains('left-nav') === true) {
      console.log("clickNav:left-nav");
    } else {
      console.log("clickNav:right-nav");
    }
    //console.log("clickItem:ev.currentTarget.getAttribute('data-itempath'): ", ev.currentTarget.getAttribute('data-itempath'));

    //props.history.push("/");
    //window.location.reload();

    //navigate("/" + ev.currentTarget.getAttribute('data-itempath'));

  }

  return (<>
    <div className="portfolio-content">
      <Header headerType={"portfolio"} />

      <div className="portfolio-section">
        <div className="left-nav-wrapper">
          <div className="left-nav" onClick={clickNav}>
            <FontAwesomeIcon icon={faChevronLeft} className="fa-chevron-left" />
          </div>
        </div>
        
        <div className="section-text-content">
          <div className="section-header">
            <div className="section-header-text">{portfolioItem1.title}</div>
          </div>
          <div className="section-text">{portfolioItem1.text}</div>
          </div>
        <div className="right-nav-wrapper">
          <div className="right-nav"  onClick={clickNav}>
            <FontAwesomeIcon icon={faChevronRight} className="fa-chevron-right" />
          </div>
        </div>
      </div>
      <div className="portfolio-items">
        <div className="portfolio-items-row">
          {allHtml}
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Portfolio;
