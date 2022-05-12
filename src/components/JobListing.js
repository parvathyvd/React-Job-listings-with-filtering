import React, { useEffect, useState } from "react";
import data from "../data.json";
import Jobs from "./Jobs";
import { AiOutlineClose } from "react-icons/ai";

const JobListing = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [filterJobs, setFilterJobs] = useState([]);
  useEffect(() => {
    setAllJobs(data);
  }, []);
  const filterFunc = ({ role, level, languages, tools }) => {
    if (filterJobs.length === 0) {
      return true;
    }
    const tags = [role, level];
    if (languages) {
      tags.push(...languages);
    }
    if (tools) {
      tags.push(...tools);
    }
    return tags.some((tag) => filterJobs.includes(tag));
  };

  const onAddFilter = (tag) => {
    if (filterJobs.includes(tag)) {
      return;
    }
    setFilterJobs([...filterJobs, tag]);
  };
  const filteredJobs = allJobs.filter(filterFunc);

  const onCloseHandler = (removeItem) => {
    console.log("remove", removeItem);
    setFilterJobs(filterJobs.filter((ip) => ip !== removeItem));
  };
  const onClearHandler = () => {
    setFilterJobs([]);
  };
  return (
    <>
      {filterJobs.length > 0 && (
        <div className="form__control">
          <div className="filter-panel">
            {filterJobs.map((input) => {
              return (
                <button className="filter-btn">
                  {input}
                  <span className="close-container">
                    <AiOutlineClose
                      className="close"
                      onClick={() => onCloseHandler(input)}
                    />
                  </span>
                </button>
              );
            })}
          </div>
          <button className="btn-clear" onClick={onClearHandler}>
            Clear
          </button>
        </div>
      )}
      {filteredJobs.map((job) => {
        return <Jobs job={job} key={job.id} onAddFilter={onAddFilter} />;
      })}
    </>
  );
};

export default JobListing;
