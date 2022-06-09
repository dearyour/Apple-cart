function Detail(){

  let [ alert, alert변경 ] = useState(true);
  let [inputData, inputData변경] = useState('');
  useEffect(()=>{
    let 타이머 = setTimeout(()=>{ alert변경(false) }, 2000);
  },[alert]);
  
  return (
    <HTML많은곳/>

    { inputData }
    <input onChange={ (e)=>{ inputData변경(e.target.value) }}/>

    {
      alert === true
      ? (<div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>)
      : null
    }
  )
}