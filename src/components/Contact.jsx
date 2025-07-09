import "../App.css";
const Contact = () => {
  return (
    <>
      <h3>📞 Contact</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required />
        <button type="submit" className="glow-btn">
          Send
        </button>
      </form>
    </>
  );
};

export default Contact;