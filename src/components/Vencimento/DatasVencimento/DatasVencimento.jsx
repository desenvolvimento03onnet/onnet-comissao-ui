import stylesDatasVencimento from './DatasVencimento.module.css';
import Select from 'react-select';
import { useState } from "react";
import makeAnimated from 'react-select/animated';

export default function inputDatasVencimento() {

  const customStyles = {
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            color: '#ffffff',
        }
    },
    control: (base, state) => ({
      ...base,
      background: "transparent",
      color: '#F0F8FF',
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "white" : "white",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "black" : "white"
      }
    }),
    menuList: styles => ({
      ...styles,
      background: 'transparent',
      color: '#ffffff'
    }),
    option: (styles, {isFocused, isSelected}) => ({
        ...styles,
        background: isFocused
            ? 'black'
            : isSelected
                ? 'black'
                : undefined,
        zIndex: 1
    }),
    menu: base => ({
        ...base,
        zIndex: 100,
        background: "transparent"
    })
  };

  const [userChoice, setUserChoice] = useState("");

  const animatedComponents = makeAnimated();

  const options = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
    { value: 11, label: '11' },
    { value: 12, label: '12' },
    { value: 13, label: '13' },
    { value: 14, label: '14' },
    { value: 15, label: '15' },
    { value: 16, label: '16' },
    { value: 17, label: '17' },
    { value: 18, label: '18' },
    { value: 19, label: '19' },
    { value: 20, label: '20' },
    { value: 21, label: '21' },
    { value: 22, label: '22' },
    { value: 23, label: '23' },
    { value: 24, label: '24' },
    { value: 25, label: '25' },
    { value: 26, label: '26' },
    { value: 27, label: '27' },
    { value: 28, label: '28' },
    { value: 29, label: '29' },
    { value: 30, label: '30' },
    { value: 31, label: '31' }
  ]

  const handleChange = (e) => {
    setUserChoice(Array.isArray(e) ? e.map(x => x.value) : []);
  };

  if(userChoice != ''){
    document.getElementById("SpanDia").innerText = userChoice;
  }

  var valor = options.filter(obj => userChoice.includes(obj.value));
  return (
    <div className={stylesDatasVencimento.DivDatasVencimento}>
      <Select isMulti isClearable options={options} onChange={handleChange} styles={customStyles} classNamePrefix="select" placeholder=" -- Datas de Vencimento -- " closeMenuOnSelect={false} components={animatedComponents} id='ComboBoxDatasVencimento' value={valor} />
      <input type='text' id='valorSelect' onChange={handleChange} value={userChoice} hidden />
    </div>
  );
}