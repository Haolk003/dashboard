import React from 'react'
import {stackedCustomSeries,stackedPrimaryXAxis,stackedPrimaryYAxis} from '../../data/dummy';
import { ChartComponent,SeriesCollectionDirective,Inject,Legend,Tooltip,ColumnSeries,DataLabel,LineSeries,Category ,SeriesDirective,StackingColumnSeries} from '@syncfusion/ej2-react-charts'
const Stacked = ({data,id,name,type,width,height}) => {
  return (
    <ChartComponent id={id} 
    primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} 
    width={width} height={height} chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    legendSettings={{background:"white"}}>
      <Inject services={[Tooltip,Legend,Category,StackingColumnSeries]}/>
    <SeriesCollectionDirective>
      {stackedCustomSeries.map((item,index)=>
       

       
       <SeriesDirective key={index} {... item} />
        
      )}
    </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked