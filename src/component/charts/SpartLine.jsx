import React from 'react'
import {SparklineComponent,Inject,SparklineTooltip} from '@syncfusion/ej2-react-charts'
const SpartLine = ({id,height,width,color,data,type,currentColor}) => {
  return (
   <SparklineComponent id={id} height={height} width={width} valueType="Numeric" fill={color} border={{color:currentColor, width:2} }
   dataSource={data} lineWidth={1} xName="x" yName="yval" type={type}  tooltipSettings={{
      visible:true,
      format:'${x}: data ${yval}',
      trackLineSettings:{
        visible:true
      } 
    }}>
   
    <Inject services={[SparklineTooltip]} />
   </SparklineComponent>
  )
}

export default SpartLine