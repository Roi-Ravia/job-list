import React, { Fragment } from "react";
import "../Data/data.json";

function FilterTags(props) {
  //When clicked, change state accordingly
  const handleClick = (event) => {
    const filtered = event.target.innerHTML.trim();
    !props.tags.includes(filtered) && props.setTags([...props.tags, filtered]);
  };

  const { role, level, languages, tools, id } = props;

  return (
    <Fragment>
      <div className="requirements-div">
        {languages
          ? languages.map((language, index) => {
              return (
                <span
                  key={id + index}
                  className="requirements"
                  onClick={handleClick}
                >
                  {language}
                </span>
              );
            })
          : null}
        {tools
          ? tools.map((tool, index) => {
              return (
                <span
                  key={id + index}
                  className="requirements"
                  onClick={handleClick}
                >
                  {tool}
                </span>
              );
            })
          : null}
        <span className="requirements" onClick={handleClick}>
          {level}
        </span>
        <span className="requirements" onClick={handleClick}>
          {role}
        </span>
      </div>
    </Fragment>
  );
}

export default FilterTags;
