import React from 'react'
import { useState, useEffect } from 'react';
import styles from './phanb.module.css'
import StyledButton from './StyledButton';
import {BsFillArrowRightSquareFill} from 'react-icons/bs'

const domains = ["shrtco","9qr","shiny"]
const PhanB = () => {
    const [url, setUrl] = useState("http://example.org/very/long/link.html")
    const [shortenedLinks, setShortenedLinks] = useState([])
    const [isFetchDone, setIsFetchDone] = useState(false)
    const [currentDomain, setCurrentDomain] = useState(0)

    const handleChangeDomain = (i) => {
      (i!==currentDomain) && setCurrentDomain(i);
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchData();
    }
    const fetchData = async () => {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await response.json();
      setShortenedLinks([data.result.short_link,data.result.short_link2,data.result.short_link3]);
    }
    useEffect(() => {
      setIsFetchDone(true);
    }, [shortenedLinks])
    
    return (
      <div className={styles.wrapper}>
        
        <div className={styles.convert_area}>
          <h2>Enter your URL:</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_btn}>
              <input type='url'
                placeholder='Type in a link to shorten...'
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
              <button className={styles.arrowBtn}><BsFillArrowRightSquareFill/></button>
            </div>
            <ul className={styles.domain_buttons}>
              <li><h3>Domain:</h3></li>
              {domains.map((domain, i) => (
                <li key={`domain_${i}`}><StyledButton disabled={(i===currentDomain)} className={(i===currentDomain) && styles.activeDomain} onClick={() => handleChangeDomain(i)}>{domain}</StyledButton></li>
              ))}
            </ul>
          </form>
          <div>
            <br/><h2>Your shortened URL:</h2>
            {isFetchDone && shortenedLinks[currentDomain]}
          </div>  
        </div>
      </div>
    );
}

export default PhanB;