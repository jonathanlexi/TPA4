import React from "react";
import Video1 from "../videos/video1.mp4";
import Video2 from "../videos/video2.mp4";
import Video3 from "../videos/video3.mp4";
import Video4 from "../videos/video4.mp4";
import Video5 from "../videos/video5.mp4";
import Video6 from "../videos/video6.mp4";
import "./Blog.css";

function Blog() {
  return (
    <div className="video-blog">
      <h3>Some videos for motivate you to coding </h3>

      <video width="320" height="240" controls>
        <source src={Video1} type="video/mp4" />
      </video>

      <video width="320" height="240" controls>
        <source src={Video2} type="video/mp4" />
      </video>

      <video width="320" height="240" controls>
        <source src={Video3} type="video/mp4" />
      </video>

      <video width="320" height="240" controls>
        <source src={Video4} type="video/mp4" />
      </video>

      <video width="320" height="240" controls>
        <source src={Video5} type="video/mp4" />
      </video>

      <video width="320" height="240" controls>
        <source src={Video6} type="video/mp4" />
      </video>
    </div>
  );
}

export default Blog;
