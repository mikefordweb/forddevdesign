import React, { MouseEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { WorkItemObj } from '../WorkItemObj';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

interface WorkItemProps {
    workitem: WorkItemObj
  }

const WorkItem = (props: WorkItemProps) => {

    const navigate = useNavigate();

    const clickItem = (ev: MouseEvent) => {
        navigate("/" + ev.currentTarget.getAttribute('data-itempath'));
    }

    return (
        <div className="fdd-portfolio-item size-1" onClick={clickItem} data-itemvalue="1" data-itempath="" data-itemtype="url">
            <div className="portfolio-item-hover">
                <div className="portfolio-item-bkg"></div>
                <div className="portfolio-item-content">
                <div className="portfolio-item-title">SportsAlum React Development</div>
                <div className="portfolio-item-text">Adobe Creative Suite, Express.js, HTML, MySQL, Node.js, React, Responsive Design, TypeScript, UI/UX Design</div>
                </div>
            </div>
            <div style={{"backgroundImage": "url('/img/React-Developer-Node-MySQL-1-630x542.jpeg')"}} className="react-developer-node-mysql"></div>
        </div>
    )

}