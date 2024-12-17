```javascript
const CardList = () => {
  const data = [
    { id: 1, title: "Card 1", description: "Description 1" },
    { id: 2, title: "Card 2", description: "Description 2" },
    { id: 3, title: "Card 3", description: "Description 3" },
  ];

  return (
    <div className="card-list">
      {data.map((item) => (
        <Card key={item.id} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default CardList;
```
