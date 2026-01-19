import "../assets/Css/grafico.css"
import React, {useState, useEffect} from 'react';
import ReactEcharts from 'echarts-for-react'; 
import * as echarts from 'echarts';



function LineChart({data}) {

  const [analitycs, setAnalitycs] = useState({})
  const [xAxisData, setAxisData] = useState([])
  const [dataPicked, setDataPicked] = useState(1)
  const [chartsName, setChartsName] = useState("")
          

  useEffect(() => {
  console.log(Object.keys(data || {}))
  setAxisData((Object.keys(data || {}))?.[0])
  }, [])
 
  useEffect(() => {
  console.log(xAxisData, "OOOO")
  console.log(data?.[xAxisData]?.[dataPicked])

  }, [xAxisData])
  
 


  const option = {
    title:{text:`Gráfico de ${chartsName}`},
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: data?.[xAxisData]?.[0],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name:chartsName ,
        type: "line",
        data: data?.[xAxisData]?.[dataPicked],
        smooth: true,
        symbol: "circle",
        symbolSize: 8,
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '400px', display:"flex" }}> 

    <ReactEcharts
      option={option}
      style={{ height: 400, width: "100%" }}
    />
 
  <section className={"container-btns-grafico-config"}> 
    <div className={"container-btn-anos"}>
    
       <h4> Periodos </h4> 

      
      {Object.keys(data || {}).map((day, index) => ( 

        <button className={xAxisData == day ? 'btn-actived' : 'btn'} key={index} 
        onClick={() => {setAxisData(day); }} 
        >{day}</button>
      ) )}


    </div>
    
    <div className={"container-btn-estatisticas"}>
       <h4> Estatisticas </h4> 
     
        <button onClick={() => {setDataPicked(1); setChartsName("Atividade")} } 
    className={chartsName == "Atividade" ? "btn-actived" : "btn"} >
          Visitas
      </button>
 
      <button  onClick={() => {setDataPicked(2); setChartsName("Vendas feitas")}} 
    className={chartsName == "Vendas feitas" ? 'btn-actived' : 'btn' } >
        Vendas feitas 
      </button>

    </div>
     </section>


    </div>

  );


}




export default LineChart
