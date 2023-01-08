import React, { useEffect, useState, useRef } from "react"
import Card from '../components/Card'
export default function AnimateWhenScrolled() {
    useEffect(()=>{
        myFunction();
    },[])

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-appear");
            } else {
              entry.target.classList.remove("animate-disappear");
            }
          });
    })

    const myFunction=()=>{
        const grids = [...document.querySelectorAll(".targetClass")];
        grids.map((item) => {
            observer.observe(item);
        });
    }

    return <>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            <div className="targetClass">
                <Card/>
            </div>
            
        </>

}
