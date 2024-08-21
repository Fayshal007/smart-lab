import React from "react";
import Banner from "./Banner";
import bio from '../../../public/images/bio-sensor.jpg'
import ml from '../../../public/images/ML.jpg'
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Banner />

        {/*---------------------- Research Focus Areas------------------------- */}
        <section className="mt-14">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">Research Focus Areas</h1>
            <p>
              At the intersection of advanced technology, we're shaping the
              future of data-driven research.
            </p>
          </div>
          <div className="flex justify-center gap-8">
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={bio}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Advanced Bio-Sensor Development</h2>
                <p className="text-justify">Designing and engineering next-generation bio-sensors that detect and monitor biological signals with unprecedented accuracy and sensitivity. Our work bridges the gap between biology and technology, enabling real-time health monitoring and diagnostics.</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline"><NavLink to='/biosensor'>Learn More</NavLink></div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={ml}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Machine Learning for Biomedical Data</h2>
                <p className="text-justify">Harnessing the power of machine learning to analyze complex biomedical data, uncovering patterns and insights that drive advancements in personalized medicine, early disease detection, and predictive healthcare.</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline"><NavLink to='/machinelearning'>Learn More</NavLink></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
