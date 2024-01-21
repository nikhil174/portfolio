import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
                    onClick={() => setToggleState(1)}
                    >
                        <i className="bx bxs-graduation qualification__icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
                    onClick={() => setToggleState(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                        <div>
                                <h3 className="qualification__title">Fellowship in Advanced Fullstack  Developement (MERN)</h3>
                                <span className="qualification__subtitle">Crio.do</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> may 2023 - present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Bachelors of Computer Applications</h3>
                                <span className="qualification__subtitle">Prof. Rajendra Prasad(Rajju Bhaiya) University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2022
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Intermediate(11, 12)</h3>
                                <span className="qualification__subtitle">St. Joseph's College, Prayagraj</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                    </div>


                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Backend Developer</h3>
                                <span className="qualification__subtitle">Faclon Labs</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> july 2022 - Dec 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        {/* <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UI Expert</h3>
                                <span className="qualification__subtitle">Art Director</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web developement</h3>
                                <span className="qualification__subtitle">Prof. Rajendra Prasad(Rajju Bhaiya) University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">Art Director</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2022
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Qualification
