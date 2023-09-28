import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const meals = [
  {
    id: "m1",
    name: "Butter Chicken",
    description: "Tender chicken in a creamy tomato sauce",
    price: 12.99,
  },
  {
    id: "m2",
    name: "Biryani",
    description: "Fragrant rice cooked with spices and your choice of meat",
    price: 14.5,
  },
  {
    id: "m3",
    name: "Paneer Tikka",
    description: "Grilled cottage cheese with spices and herbs",
    price: 9.99,
  },
  {
    id: "m4",
    name: "Masala Dosa",
    description: "Crispy rice crepe with a spiced potato filling",
    price: 8.99,
  },
];

const AvailableMeals = () => {
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
