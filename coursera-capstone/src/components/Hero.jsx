import "./Hero.css";
import heroImage from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <article>
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <h4>
            We are a family owned Mediterranean restaurant,<br></br>focused on
            traditional recipes served with a modern twist.
          </h4>

          <Link to="/reservations">
            <button className="btn">Reserve a Table</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Little Lemon dishes" />
        </div>
      </article>
    </section>
  );
}
