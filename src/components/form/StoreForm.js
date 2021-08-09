import React ,{useRef}from "react";

const dataOption=[
  {id:'1',
  name:'envio local'  
},{id:'2',
  name:'envio nacional'  
},
{id:'3',
  name:'envio express5 '  
}
];
function StoreForm() {
  
  const handleClick=(event)=>{
    console.log('id de option ', event.target.id);
    
  }
  return <div>
      <input type="text" placeholder='Nombre almacen'/>
      <select >
          {
              dataOption.map((item,i)=>{
                return(
                    <option
                      id={item.id}
                      key={`dfe${i}`}
                      onClick={handleClick}
                    >
                      {item.name}
                    </option>
                )
              })
          }
      </select>
  </div>;
}

export default StoreForm;
