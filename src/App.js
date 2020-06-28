import React, { useState, Fragment } from "react";
import Job from "./components/Job";
import Navbar from "./components/Navbar";
import FilterCard from "./components/FilterCard";
import "./style.css";

import data from "../src/Data/data.json";

function App() {
  const [tags, setTags] = useState([]);

  return (
    <Fragment>
      <Navbar />
      <div className="main-container">
        <FilterCard tags={tags} setTags={setTags} />
        {data.map((item, index) => {
          // Destructure main variables
          let role = item.role;
          let level = item.level;
          let languages = item.languages || [];
          let tools = item.tools || [];
          let requirements = [role, level, ...languages, ...tools];

          //Filtering using tags array
          let filterJobs = (arr, target) =>
            target.every((value) => arr.includes(value));

          //If no tag is selected, show all jobs
          return tags.length === 0 ? (
            <Job
              id={item.id}
              key={index}
              role={role}
              level={level}
              languages={languages}
              tools={tools}
              logo={item.logo}
              company={item.company}
              new={item.new}
              featured={item.featured}
              position={item.position}
              postedAt={item.postedAt}
              contract={item.contract}
              location={item.location}
              tags={tags}
              setTags={setTags}
            />
          ) : (
            //If a tag or more have been selected, show only filtered jobs.
            filterJobs(requirements, tags) && (
              <Job
                id={item.id}
                key={index}
                role={role}
                level={level}
                languages={languages}
                tools={tools}
                logo={item.logo}
                company={item.company}
                new={item.new}
                featured={item.featured}
                position={item.position}
                postedAt={item.postedAt}
                contract={item.contract}
                location={item.location}
                tags={tags}
                setTags={setTags}
              />
            )
          );
        })}
      </div>
    </Fragment>
  );
}

export default App;
