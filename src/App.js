import React from 'react';
import Kursus from './state/State';
import Materi from './props/Prop';
import './props/style.css';

function App() {
  return (
    <div className="wraperapp">
      <Kursus/>
      <p>contoh state</p>
      <hr/>
      <Materi img={require('./props/kursus.jpg')} des="belajar seo" harga="120000"/>
      <Materi img={require('./props/kursus.jpg')} des="belajar google adword" harga="120000"/>
      <Materi img={require('./props/kursus.jpg')} des="belajar react js" harga="120000"/>
    </div>
  );
}

export default App;
