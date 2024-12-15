import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Graduated (2014 - 2015)"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. Christine Elementary School
          </h3>
          <p>St. Christine, Lianga, Surigao del Sur</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Graduated (2017 - 2018)"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          St. Christine National Highschool
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          </h4>

          <p>St. Christine, Lianga, Surigao del Sur</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Graduated (2019 - 2020)"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          St. Christine Senior Highschool
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            GAS (General Academic Strand)
          </h4>

          <p>St. Christine, Lianga, Surigao del Sur</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="A-Y 2024-2025 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           North Eastern Mindanao State University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Science in Computer Science 
          </h4>
          <p>Poblacion Lianga, Surigao Del Sur</p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Internship
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Engineer
          </h4>
          <p>
            My goal.
          </p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
