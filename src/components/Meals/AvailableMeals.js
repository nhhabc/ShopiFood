import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Cá và rong biển',
      price: 150000,
    },
    {
      id: 'm2',
      name: 'Phở bò',
      description: 'Món ăn truyền thống Việt Nam!',
      price: 40000,
    },
    {
      id: 'm3',
      name: 'Bánh mỳ trứng, xúc xích',
      description: 'Nhớ lại tuổi thơ',
      price: 25000,
    },
    {
      id: 'm4',
      name: 'Salat rau',
      description: 'Khỏe...và bổ dưỡng...',
      price: 20000,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => 
    <MealItem id={meal.id}
       key={meal.id} 
       name={meal.name} 
       description={meal.description} 
       price={meal.price}/>)

    return (
        <section className={classes.meals}> 
            <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals