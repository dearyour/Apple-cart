function Cart(props) {
  return (
    <div>
      <Table>table부분</Table>
      {props.alert열렸니 === true ? (
        <div className="my-alert2">
          <p>지금 구매하시면 20% 할인</p>
          <button>닫기</button>
        </div>
      ) : null}
    </div>
  );
}

// 기존
/* function state를props화(state){
  console.log(state);
  return {
    state : state,
  }
} */

function state를props화(state) {
  console.log(state);
  return {
    state: state.reducer,
    alert열렸니: state.reducer2, //리듀서2에 있는거 가져오는법
  };
}
export default connect(state를props화)(Cart);
