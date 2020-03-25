import Link from '../Link/Link';
import React from 'react';
import './PageSelector.css';

function PageSelector(props){
    const {start, end=Infinity, current, linkBuilder} = props;
    let renderStart;
    let renderEnd;
    console.log({start,end,current});
    if(end-current<=3){
        console.log(0);
        renderEnd=end;
        renderStart=Math.max(end-7,start);
    }else if(current-start<=3){
        console.log(1);
        renderStart=start;
        renderEnd=Math.min(start+7,end);
    }else{
        console.log(2);
        renderStart = current - 3;
        renderEnd = current + 4;
    }
    let numbers = new Array(renderEnd-renderStart).fill(renderStart).map((c,i)=>c+i);
    return (
        <div style={{textAlign:'center'}}>
            {numbers.map(n=>(
                <Link href={linkBuilder(n)} key={n} >
                    <span className={`PageSelectorNumber ${current===n?'selected':''}`}>{n}</span>
                </Link>
            ))}
        </div>
    );
}

export default PageSelector;