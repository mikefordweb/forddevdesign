import React, { useState, useEffect, MouseEvent } from 'react';
import { ClientsObj } from './ClientsObj';
import { useParams, useLocation, useNavigate, redirect } from 'react-router-dom';

interface ClientsProps {
    clients: ClientsObj[];
}

function Clients({ clients }: ClientsProps) {
    
    let [clientsClass, setClientsClass] = useState<string>("move-right");
    let [hideDot, setHideDot] = useState<string>("");

    const clickClientNav = (ev: MouseEvent) => {
        let clientList: Element | null = document.querySelector('.clients-inner');
        let dot1: Element | null = document.querySelector('[data-dot="1"]');
        let dot2: Element | null = document.querySelector('[data-dot="2"]');
        
        if (clientList !== null && dot1 !== null && dot2 !== null) {
            if (ev.currentTarget.getAttribute('data-dot') === "2") {
                if (clientList.classList.contains('move-right')) {
                    setClientsClass('move-left');
                    ev.currentTarget.classList.add('dot-selected');
                    dot1.classList.remove('dot-selected');
                }
            } else if (ev.currentTarget.getAttribute('data-dot') === "1") {
                if (clientList.classList.contains('move-left')) {
                    setClientsClass('move-right');
                    ev.currentTarget.classList.add('dot-selected');
                    dot2.classList.remove('dot-selected');
                }
            }
        }
    }
    
    return (
        <>
            <div className="clients">
                <div className={`clients-inner ${clientsClass}`}>
                    { clients.map((client: ClientsObj,i) => {
                        return(
                            <a href="#" className="clients-item" key={i}>
                                <img src={`/img/${client.icon}`} className="clients-icon-img"></img>
                            </a>
                        )
                    }) }
                </div>
            </div>
            <div className="clients-nav">
                <div className="nav-dot dot-1" onClick={clickClientNav} data-dot="1"></div>
                <div className="nav-dot dot-2" onClick={clickClientNav} data-dot="2"></div>
                <div className={`nav-dot dot-3 ${hideDot}`} onClick={clickClientNav} data-dot="3"></div>
            </div>
        </>
    )
}

export default Clients;