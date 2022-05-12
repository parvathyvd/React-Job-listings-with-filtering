import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Jobs = ({ job, onAddFilter }) => {
  const {
    company,
    contract,
    featured,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = job;
  const allTags = [level, role];

  if (languages) {
    allTags.push(...languages);
  }
  if (tools) {
    allTags.push(...tools);
  }
  const getResults = (tag) => {
    onAddFilter(tag);
  };
  return (
    <Card>
      <div className="main-section">
        <div className="main-details">
          <img className="img-round" src={logo} alt={`${company} icon`} />
          <div className="img-block">
            <div className="button-text">
              <p className="d-inline-block">{company}</p>
              {job.new && (
                <Button type="button" status="btn-light" value="new">
                  {" "}
                  New
                </Button>
              )}
              {featured && (
                <Button type="button" status="btn-dark" value="featured">
                  {" "}
                  Featured
                </Button>
              )}
            </div>
            <h3 className="main-title">{position}</h3>
            <div className="title">
              {" "}
              <span className="dot">{postedAt}</span>
              <span className="dot">{contract}</span>
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className="tags">
          {allTags.map((tag) => {
            return (
              <button onClick={() => getResults(tag)} value={level}>
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default Jobs;
