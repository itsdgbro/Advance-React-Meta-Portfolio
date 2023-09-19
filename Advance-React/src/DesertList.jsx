const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];


function DessertsList() {
  // Implement the component here.
  const data  = desserts;

  const filteredItems = data
    .filter(item => item.calories < 500) 
    .sort((a, b) => a.calories - b.calories); 

  const ItemLists = filteredItems.map(item => (
    <li key={item.id}>
      {`${item.name} - ${item.calories} cal.`}
    </li>
  ));


  return (
    <>
      <ul>
        {ItemLists}
      </ul>
    </>
  )
}

export default DessertsList;
