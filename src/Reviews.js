import React, { useState } from 'react'
import people from './data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Reviews() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
    const checkNumber = (number) => {
        if (number < 0) {
            return people.length - 1;
        }
        else if (number > people.length - 1) {
            return 0;
        }
        return number;
    }
    const nextPerson = () => {
        // setIndex(checkNumber(index + 1));
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }
    const prevPerson = () => {
        // setIndex(checkNumber(index - 1));
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }
    return (
        <article className="container">
            <img src={image} alt="" />
            <div className="info">
                <h2>{name}</h2>
                <h3>{job}</h3>
                <p>{text}</p>
            </div>

            <div className="btn-container">
                <button className="prev-btn" onClick={prevPerson}><FaChevronLeft className="left" /></button>
                <button className="next-btn" onClick={nextPerson}><FaChevronRight className="right" /></button>
            </div>
        </article>
    )
}

export default Reviews
