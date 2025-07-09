import "../App.css";
const Projects = () => {
  return (
    <>
      <h3>📖 Projects</h3>
      <div className="projects white">
        {[
          {
            title: "Nebulix",
            desc: "A Blog/Article Website That You Can Use To Share Your Knowledge About Space.",
          },
          {
            title: "My Portfolio",
            desc: "Simple portfolio concept with percise identity.",
          },
          {
            title: "Classy",
            desc: "My future plan to make a website to help with making a simple class website.",
          }
        ].map((proj, i) => (
          <div key={i} className="project-card">
            <h4>{proj.title}</h4>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;