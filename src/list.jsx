import Person from "./person";
export default function List({ people }) {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
}
