import { Calendar4Event, GeoAlt, BriefcaseFill } from "react-bootstrap-icons";

export const Article = ({ more }) => {
  return (
    <div className="post__more">
      <p>{more}</p>
    </div>
  );
};

export const Meetup = ({ date, location }) => {
  return (
    <div className="post__more meetup">
      <div className="meetup__info">
        <span className="date">
          {" "}
          <Calendar4Event
            size={20}
            style={{ transform: "rotateY(180deg)" }}
          />{" "}
          {date}
        </span>
        <span className="location">
          <GeoAlt size={20} /> {location}
        </span>
      </div>
      <button className="link" role="link" style={{ color: "#e56135" }}>
        Visit Website
      </button>
    </div>
  );
};

export const Job = ({ org, location }) => {
  return (
    <div className="post__more meetup">
      <div className="job__info">
        <span className="org">
          {" "}
          <BriefcaseFill
            size={20}
            style={{ transform: "rotateY(180deg)" }}
          />{" "}
          {org}
        </span>
        <span className="location">
          {" "}
          <GeoAlt size={20} />
          {location}
        </span>
      </div>
      <button className="link" role="link" style={{ color: "#02B875" }}>
        Visit Website
      </button>
    </div>
  );
};
