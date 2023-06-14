 import data from '../../data/data.json'
export const Statistics = ({ title, stats}) => {
  // return stats.map((stat)=>{
    return (
      <section 
      // key = {stat.id}
      className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
        {stats.map(stat=>(
        <li className="item" key={stat.id}>
            <span className="label">{stat.label} </span>
            <span className="percentage">{stat.percentage}</span>
          </li>
          ))}
         </ul>
      </section>
    );
};