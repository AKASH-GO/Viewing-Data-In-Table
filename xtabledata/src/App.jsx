import { useState } from "react";
import "./App.css";

function App() {
  const data = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const dateCompare=(a,b)=>{
    let date1=Date.parse(a.date)
    let date2=Date.parse(b.date)
    if(date1!==date2){
      return date2-date1
    }else{
      return b.views-a.views
    }
  }
  const viewsCompare=(a,b)=>{
    let date1=Date.parse(a.date)
    let date2=Date.parse(b.date)
    if(b.views!==a.views){
      return b.views-a.views
    }else{
      return date2-date1
    }
  }
  const [sortedData, setSortedData] = useState([...data]);
   const sortByDate=()=>{
    const res=data.sort(dateCompare)
    console.log(res);
    setSortedData(res)
   }
   const sortByViews=()=>{
    const res=data.sort(viewsCompare)
    console.log(res);
    setSortedData(res)
   }
   
  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={()=>sortByViews()}>Sort by Views</button>
      <table style={{width:"20rem"}}>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        {
          sortedData.map((item,index)=>(
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}

export default App;