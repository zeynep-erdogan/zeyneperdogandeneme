import './Top.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data.js';

import { FormGroup, Input, Label } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Top(props) {
  const { changeDil, dil } = props;
  const {changeTheme, theme} = useTheme();

  

  return (
    <>

      <div className= {`darkmode  ${theme === 'dark' ? 'bg-[#363636] text-white' : 'bg-[#F4F4F4] text-[#777777]'}` }>
        <FormGroup switch onChange={changeTheme}>
          <Input type="switch" role="switch" />
          <Label check>{theme === 'dark' ? 'LİGHT MODE' : 'DARK MODE'}</Label>
        </FormGroup>
        <p>|</p>
        <p >
          {' '}
          <button onClick={changeDil}  className= {`  ${theme === 'dark' ? 'bg-[#525252] ' : 'bg-[#F4F4F4] '}` }>
            {' '}
            {dil === 'tr' ? "TÜRKÇE' YE GEÇ" : 'SWİTCH TO ENGLISH'}{' '}
          </button>
        </p>
      </div>
    </>
  );
}

export default Top;
