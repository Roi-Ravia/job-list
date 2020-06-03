import React from "react";
import "../Data/data.json";
import FilterTags from "./FilterTags";
// import image from "../images/account.svg";

//MUI
import Grid from "@material-ui/core/Grid";

function Job(props) {
  const {
    id,
    company,
    logo,
    featured,
    position,
    postedAt,
    contract,
    location,
  } = props;
  // console.log(image);
  return (
    <div className={featured ? "container featured-container" : "container"}>
      <Grid container direction="row" style={{ minHeight: "120px" }}>
        <Grid item md={2}>
          <img src={__dirname + logo} className="logo" alt={company} />
        </Grid>
        <Grid item md={4} xs={12}>
          <div className="info-section">
            <div className="main-info" id="badges">
              <h2 className="company">{company}</h2>
              {props.new ? <span className="new">NEW!</span> : null}
              {featured ? <span className="featured">FEATURED</span> : null}
            </div>
            <div className="main-info">
              <h1 className="position">{position}</h1>
            </div>
            <div className="main-info">
              <span className="info">{postedAt}</span>
              <span className="info">{contract}</span>
              <span className="info">{location}</span>
            </div>
          </div>
        </Grid>
        <Grid item md={5} xs={12} style={{ margin: "auto", minWidth: "50%" }}>
          <FilterTags
            id={id}
            key={id}
            role={props.role}
            level={props.level}
            languages={props.languages}
            tools={props.tools}
            tags={props.tags}
            setTags={props.setTags}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Job;
