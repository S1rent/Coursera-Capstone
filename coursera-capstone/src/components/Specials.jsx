import "./Specials.css";
import greekSalad from '../assets/greek-salad.jpg';
import bruschetta from '../assets/bruschetta.svg';
import lemonDessert from '../assets/lemon-dessert.jpg';

const specials = [
  {
    title: "Greek salad",
    price: "$12.99",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: greekSalad,
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: bruschetta,
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: lemonDessert,
  },
];

export default function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This weeks specials!</h2>
        <button className="btn">Online Menu</button>
      </div>
      <div className="specials-cards">
        {specials.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="card-body">
              <div className="card-title">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.desc}</p>
              <a href="#" className="delivery">
                Order a delivery 🚴
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
