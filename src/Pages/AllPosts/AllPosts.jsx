import "./AllPosts.css";
import { Fragment } from "react";
import { ShareFill, Eye } from "react-bootstrap-icons";
import More from "./Layout/More/More";
import { Article, Meetup, Job } from "./Layout/Posts";
import demoData from "./demoData";

const AllPosts = () => {
  return (
    <Fragment>
      {demoData.map((data) => {
        const {
          id,
          postImgUrl,
          category,
          title,
          profileUrl,
          date,
          location,
          more,
          org,
          ownerName,
          view,
        } = data;
        const f = Intl.NumberFormat("en", { notation: "compact" });
        const views = f.format(view);
        return (
          <div className="post__div" key={id}>
            {postImgUrl && (
              <div className="post__img">
                <img src={postImgUrl} alt="Image" className="img-fluid" />
              </div>
            )}
            <div className="post__dis">
              <div className="post__category">{category}</div>
              <div className="post__title">
                <h4>{title}</h4>
                <More />
              </div>
              {more && <Article more={more} />}
              {date && <Meetup date={date} location={location} />}
              {org && <Job org={org} location={location} />}
              <div className="post__owner">
                <div className="owner__info">
                  <img
                    src={profileUrl}
                    alt="Profile Pic"
                    className="img-fluid"
                  />
                  <span className="owner__name">{ownerName}</span>
                </div>
                <div className="view__share">
                  <span className="post__view">
                    <Eye size={18} style={{ marginRight: "8px" }} /> {views}{" "}
                    views
                  </span>
                  <div className="post__share">
                    <ShareFill size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default AllPosts;
