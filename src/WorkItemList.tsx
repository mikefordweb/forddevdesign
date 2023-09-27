import { useState, useEffect } from 'react';
import { selectWorkItems } from './features/todos/workitemSlice'
import { useAppSelector } from './app/hooks'

//function WorkItemList({ workitems }: WorkItemListProps) {
function WorkItemList() {
    
    const workitemsSel = useAppSelector(selectWorkItems)
    //console.log("workitemsSel: ", workitemsSel)
    let workitems = workitemsSel[0];
    //console.log("workitems: ", workitems)

    let [is2cols, setIs2cols] = useState<string>("");
    
    useEffect(() => {
        if (window.innerWidth < 1034) {
            setIs2cols('is2cols');
        } else {
            setIs2cols('');
        }
    }, [])
    
    const setCols = () => {
        if (window.innerWidth < 1034) {
            setIs2cols('is2cols');
        } else {
            setIs2cols('');
        }
    }

        let col1items: Array<any> = [];
        let col2items: Array<any> = [];
        let col3items: Array<any> = [];

        window.addEventListener("resize", setCols);

        if (window.innerWidth < 1034) {
            if (workitems !== undefined) {
                for (let i = 0; i<workitems.length; i++) {
                    if (workitems[i].id === 1 || workitems[i].id === 3 || workitems[i].id === 5 || workitems[i].id === 7 || workitems[i].id === 9 || workitems[i].id === 11 || workitems[i].id === 13 || workitems[i].id === 15) {
                        col1items.push(<div className="fdd-portfolio-item size-1" onClick={()=>{window.location.href=workitems[i].pageUrl}} data-itemvalue={workitems[i].sizeStyle} data-itempath={workitems[i].pageUrl} data-itemtype="url" key={workitems[i].id}>
                                <div className="portfolio-item-hover">
                                <div className="portfolio-item-bkg"></div>
                                <div className="portfolio-item-content">
                                    <div className="portfolio-item-title">{workitems[i].title}</div>
                                    <div className="portfolio-item-text">{workitems[i].text}</div>
                                </div>
                                </div>
                                <div style={{"backgroundImage": `url('${workitems[i].imgSrc}')`}}  className="work-item-image"></div>
                                
                            </div>);
                        
                    } else if (workitems[i].id === 2 || workitems[i].id === 4 || workitems[i].id === 6 || workitems[i].id === 8 || workitems[i].id === 10 || workitems[i].id === 12 || workitems[i].id === 14 || workitems[i].id === 16) {
                        col2items.push(<div className="fdd-portfolio-item size-1" onClick={()=>{window.location.href=workitems[i].pageUrl}} data-itemvalue={workitems[i].sizeStyle} data-itempath={workitems[i].pageUrl} data-itemtype="url" key={workitems[i].id}>
                        <div className="portfolio-item-hover">
                        <div className="portfolio-item-bkg"></div>
                        <div className="portfolio-item-content">
                            <div className="portfolio-item-title">{workitems[i].title}</div>
                            <div className="portfolio-item-text">{workitems[i].text}</div>
                        </div>
                        </div>
                        <div style={{"backgroundImage": `url('${workitems[i].imgSrc}')`}}  className="work-item-image"></div>
                        
                    </div>);
                    }
                }
            }
        } else {
            if (workitems !== undefined) {
                for (let i = 0; i<workitems.length; i++) {
                    if (workitems[i].id === 1 || workitems[i].id === 4 || workitems[i].id === 7 || workitems[i].id === 10 || workitems[i].id === 13) {
                        col1items.push(<div className="fdd-portfolio-item size-1" onClick={()=>{window.location.href=workitems[i].pageUrl}} data-itemvalue={workitems[i].sizeStyle} data-itempath={workitems[i].pageUrl} data-itemtype="url" key={workitems[i].id}>
                                <div className="portfolio-item-hover">
                                <div className="portfolio-item-bkg"></div>
                                <div className="portfolio-item-content">
                                    <div className="portfolio-item-title">{workitems[i].title}</div>
                                    <div className="portfolio-item-text">{workitems[i].text}</div>
                                </div>
                                </div>
                                <div style={{"backgroundImage": `url('${workitems[i].imgSrc}')`}}  className="work-item-image"></div>
                                
                            </div>);
                        
                    } else if (workitems[i].id === 2 || workitems[i].id === 5 || workitems[i].id === 8 || workitems[i].id === 11 || workitems[i].id === 14) {
                        col2items.push(<div className="fdd-portfolio-item size-1" onClick={()=>{window.location.href=workitems[i].pageUrl}} data-itemvalue={workitems[i].sizeStyle} data-itempath={workitems[i].pageUrl} data-itemtype="url" key={workitems[i].id}>
                        <div className="portfolio-item-hover">
                        <div className="portfolio-item-bkg"></div>
                        <div className="portfolio-item-content">
                            <div className="portfolio-item-title">{workitems[i].title}</div>
                            <div className="portfolio-item-text">{workitems[i].text}</div>
                        </div>
                        </div>
                        <div style={{"backgroundImage": `url('${workitems[i].imgSrc}')`}}  className="work-item-image"></div>
                        
                    </div>);
                    } else if (workitems[i].id === 3 || workitems[i].id === 6 || workitems[i].id === 9 || workitems[i].id === 12 || workitems[i].id === 15) {
                        col3items.push(<div className="fdd-portfolio-item size-1" onClick={()=>{window.location.href=workitems[i].pageUrl}} data-itemvalue={workitems[i].sizeStyle} data-itempath={workitems[i].pageUrl} data-itemtype="url" key={workitems[i].id}>
                        <div className="portfolio-item-hover">
                        <div className="portfolio-item-bkg"></div>
                        <div className="portfolio-item-content">
                            <div className="portfolio-item-title">{workitems[i].title}</div>
                            <div className="portfolio-item-text">{workitems[i].text}</div>
                        </div>
                        </div>
                        <div style={{"backgroundImage": `url('${workitems[i].imgSrc}')`}}  className="work-item-image"></div>
                        
                    </div>);
                    }
                } 
            }
        }
    
    return (
        <div>
            <div className={`col1items item-column ${is2cols}`}>{col1items}</div>
            <div className={`col2items item-column ${is2cols}`}>{col2items}</div>
            {col3items ? <div className="col3items item-column">{col3items}</div> : <div></div>}
            
        </div>
    )
}

export default WorkItemList;