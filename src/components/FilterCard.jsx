import React from "react";

function FilterCard(props) {
  const handleClear = () => {
    props.setTags([]);
  };

  const handleClick = (event) => {
    console.log(event.target.name);
    console.log(props.tags.filter((item) => item !== event.target.name));
    props.setTags(props.tags.filter((item) => item !== event.target.name));
  };

  return props.tags.length > 0 ? (
    <div className="container filter">
      <div className="filterTags">
        {props.tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="requirements"
              id="tags"
              style={{ float: "none" }}
            >
              {tag}
              <button className="close" onClick={handleClick} name={tag}>
                X
              </button>
            </span>
          );
        })}
      </div>
      <span onClick={handleClear} className="clear">
        Clear
      </span>
    </div>
  ) : null;
}

export default FilterCard;
