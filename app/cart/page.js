// 맨 위에 'use client'를 작성하는 순간 밑에 코드들은 클라이언트 컴포넌트가 됨
// 중간에 끼워넣는거 안됨
// 이 밑에는 기본적으로 다 서버 컴포넌트임
// 둘의 차이는 서버 컴포넌트에선 html 코드 중간에 js 기능을 넣는게 불가능함 ex useState, useEffect, onClick같은 것들
// 근데 client 컴포넌트에선 js 기능을 넣을 수 있음
// 대신 서버 컴포넌트는 로딩속도가 빠름 왜냐 js기능이 없기 때문 또한 검색엔진 노출 유리
// client 컴포넌트는 로딩속도가 느림 1. js 많이 필요 2. hydration이라는 과정을 거쳐야함(리액트 문법을 쓰기위해서 html을 유저에게 쏴주고 그 html을 리액트로 분석하는 과정)

// 큰 페이지는 server component로 , js 기능 필요한 곳만 client component

import age from './data.js';
import Payment from './payment/page.js';

export default function Cart(){
    let 장바구니 = ['Tomato','Pasta','Coconut']; //function 안에서 만든 변수는 해당 function 안에서만 사용 가능
    return(
        <div>
        <h4 className="title">Cart</h4>
        <CartItem item = {장바구니[0]}/>
        <CartItem item = {장바구니[1]} />
        <CartItem item = {장바구니[2]}/>
        <Payment />
        <Banner content = "롯데카드" />
        <Banner content = "현대카드" />
        <Btn buttoncolor = "blue"/>
      </div>
    );
}

function Banner(props){
  return <h5>{props.content} 결제 행사중</h5>
}
// 이때 Cart 컴포넌트가 CartItem을 감싸고 있으므로 Cart가 부모 컴포넌트이고, CartItem이 자식 컴포넌트가 됨
// 부모 컴포넌트에서 만든 변수를 자식 컴포넌트로 전달하고 싶으면 부모 컴포넌트에서 자식 컴포넌트가 사용된 부분에서 <자식컴포넌트 작명 = '전할 데이터' /> 하고(변수나 함수를 전달하고 싶으면 {}사용)
// 자식 컴포넌트에서 props로 받아옴. 받은 데이터를 사용할 부분에서 {props.작명} 이렇게 사용
// 자식이 부모한테 데이터 전달은 못함. 
// 부모-자식 관계가 아닌 관계 없는 컴포넌트끼리는 데이터 전송 불가능 ex) 자식-자식 
// 데이터가 많은 컴포넌트에서 필요한 데이터나 변수/함수가 있다면 그들 중 최고 부모 컴포넌트에 보관해야 좋음 why? 부모 > 자식으로만 데이터 전송이 가능하기 때문
function CartItem(props){
    return(
        <div className="cart-item">
          <p>상품명 {props.item} </p>
          <p>$40</p>
          <p>1개</p>
        </div>
    )
}
//재사용이 잦은 html 덩어리들을 주로 component로 만드는게 좋음

function Btn(props){
  return(
    <button style={{background:props.buttoncolor}}>버튼</button>
  )
}

