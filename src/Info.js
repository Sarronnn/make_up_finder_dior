export default function Info({ name, data }) {
  return !data || !Array.isArray(data) ? (
    /**If data is present.. then */
    <p></p>
  ) : data.length === 0 ? (
    <p> No results for {name} </p>
  ) : (
    <div>
      <h2> We have: </h2>
      <ul>
        {data.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
