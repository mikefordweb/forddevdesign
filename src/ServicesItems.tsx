import React, { useState, useEffect, MouseEvent } from 'react';
import { ServicesItemObj } from './ServicesItemObj';
import { useParams, useLocation, useNavigate, redirect } from 'react-router-dom';

interface ServicesItemsProps {
    servicesitems: ServicesItemObj[];
}

function ServicesItems({ servicesitems }: ServicesItemsProps) {
    
    let [is2cols, setIs2cols] = useState<string>("");
    
    return (
        <div className="service-items">
            { servicesitems.map((serviceitem: ServicesItemObj,i) => {
                return(
                    <div className="services-item" key={i}>
                        <div className="services-icon">
                            <img src={`/img/${serviceitem.icon}`} className="services-icon-img"></img>
                        </div>
                        <div className="services-info">
                            <div className="services-skills">{serviceitem.techitems}</div>
                            <div className="services-title">{serviceitem.title}</div>
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}

export default ServicesItems;