import React from 'react'
import {KanbanComponent,Inject,ColumnDirective,ColumnsDirective} from '@syncfusion/ej2-react-kanban';
import { Header } from '../component';
import { kanbanData, kanbanGrid } from '../data/dummy';
const Kanban = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Kanban" category="App" />
      <KanbanComponent id="kanban" dataSource={kanbanData} keyField="Status" cardSettings={{contentField:'Summary', headerField:'Id'}} swimlaneSettings={{keyField:"Assignee"}} >
        <ColumnsDirective>
        {kanbanGrid.map((item,index)=>{
          return(
            <ColumnDirective key={index} {...item } />
          )
        })}
        </ColumnsDirective>
     </KanbanComponent>
    </div>
  )
}

export default Kanban