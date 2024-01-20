import data from "../utils/data";
import Card from "./Card";

export default function CardList() {
    return (
      <div className="container"> 
      <div className="card_list">
          {data.map((person) => {
              return (
                  <div key={person.id}>
                      <Card person={person} />
               </div>
           )
       })}
    </div>
      </div>
  )
}
