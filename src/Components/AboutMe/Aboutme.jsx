import "./Aboutme.css";
import CardAM from "./Card-am/Card-am";
import { Code, Lightbulb, Users, Coffee } from "lucide-react";


const AboutMe = () => {
  return (
    <div id="about">
      <div>
        <div className="heading">About Me</div>
        <h3>
          TL;DR: Frontend Developer skilled in HTML, CSS, JavaScript, and React,
          focused on building clean, responsive, and user-friendly interfaces.
          With a background in fashion retail and pharmaceuticals, I bring a
          unique mix of user insight, analytical thinking, and real-world
          problem solving. I adapt quickly, learn fast, and thrive in different
          environments—like a multi-purpose tool, I fit where I’m needed and add
          value where it counts.
        </h3>
        <p>
          I’m a Frontend Developer who enjoys turning ideas into clean,
          responsive, and user-friendly web experiences. I work with HTML, CSS,
          JavaScript, and React to build interfaces that are not just
          functional, but intuitive and engaging.
          <br />
          <br />
          I pay close attention to structure, performance, and usability because
          to me, good frontend development is as much about how it feels as how
          it works. My path into tech wasn’t traditional, and that’s what shapes
          how I think today. I started my career in fashion retail, working in
          fast-paced, customer-focused environments where understanding people
          was everything. I learned how small details can shape a user’s
          experience, how to read behavior, and how to improve processes to make
          interactions smoother. Without realizing it, I was already thinking in
          terms of user experience. Later, I transitioned into the
          pharmaceutical industry as a Medicine Information Officer. There, I
          worked closely with data, interpreting complex medical information and
          communicating it in a clear and structured way. That experience
          strengthened my analytical thinking and taught me how to simplify
          complexity something I now apply when building interfaces and writing
          clean, maintainable code.
          <br />
          <br />
          Over time, I realized I wanted to move from observing and analyzing
          systems to actually building them. That curiosity led me to frontend
          development. Today, I combine my technical skills with my background
          in business and real-world problem solving. I don’t just focus on
          writing code. I think about the user behind the screen and the purpose
          behind the product. My goal is to build experiences that are
          thoughtful, efficient, and aligned with real needs. I’m continuously
          learning, improving, and pushing myself to grow as a developer—one
          project at a time.
        </p>
      </div>
      <div className="Card">
        <CardAM
          icon={<Code className="icon" />}
          head={"Clean Code"}
          detail={
            "Writing maintainable, scalable, and efficient code that stands the test of time"
          }
        />
        <CardAM
          icon={<Lightbulb className="icon" />}
          head={"Innovation"}
          detail={
            "Always exploring new technologies and creative solutions to complex problems."
          }
        />
        <CardAM
          icon={<Users className="icon" />}
          head={"Collaboration"}
          detail={
            "Working effectively with teams to deliver exceptional user experiences."
          }
        />
        <CardAM
          icon={<Coffee className="icon" />}
          head={"Dedication"}
          detail={
            "Committed to continuous learning and staying current with industry trends."
          }
        />
      </div>
    </div>
  );
};

export default AboutMe;
