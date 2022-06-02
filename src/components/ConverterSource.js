import { useEffect, useState } from 'react';
import Converter from './Converter';
import './ConverterSource.css';
import PropTypes from 'prop-types';

function FetchConverters({source, onChange}){
const [data, setData] = useState([]); 

useEffect(()=> {
    fetch(source)
    .then(resp => resp.json())
    .then(data => {
        setData(data);
      console.log(data);
    })
  }, [])

  function handleChange(){
    onChange();
  }

const dataComponent = data.map((converter) =>(
    <li key={converter.id}>
    <Converter cryptoName={converter.name} title={<div className='title'><strong> {converter.label} Converter </strong></div>} exchangeRate={converter.conversionRate} onChange={handleChange} />
    </li>));


return(
 <ul>  
   {dataComponent} 
</ul>);
}

FetchConverters.prototypes = {
    source: PropTypes.string,
    onChange: PropTypes.func,
};

export default FetchConverters;
