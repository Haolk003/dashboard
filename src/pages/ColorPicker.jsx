import React from 'react'
import { Header } from '../component'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
const change=(args)=>{
document.getElementById('preview').style.backgroundColor=args.currentValue.hex;
}
const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Color Picker" category="App" />
      <div className='text-center'>
        <div id="preview"/>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <div className="text-2xl font-semibold mt-2 mb-4">Inline pallete</div>  
             <ColorPickerComponent id="inline-palette" mode='Palette' modeSwitcher={false} inline showButtons={false} change={change}/>
          </div>
     
          <div>
            <div className="text-2xl font-semibold mt-2 mb-4">Inline Picker</div>  
             <ColorPickerComponent id="inline-picker" mode='Picker' modeSwitcher={false} inline showButtons={false} change={change}/>
          </div>
     
          </div> 
      </div>
    </div>
  )
}

export default ColorPicker