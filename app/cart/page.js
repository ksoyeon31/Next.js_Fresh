// 맨 위에 'use client'를 작성하는 순간 밑에 코드들은 클라이언트 컴포넌트가 됨
// 중간에 끼워넣는거 안됨
// 이 밑에는 기본적으로 다 서버 컴포넌트임
// 둘의 차이는 서버 컴포넌트에선 html 코드 중간에 js 기능을 넣는게 불가능함 ex useState, useEffect, onClick같은 것들
// 근데 client 컴포넌트에선 js 기능을 넣을 수 있음
// 대신 서버 컴포넌트는 로딩속도가 빠름 왜냐 js기능이 없기 때문 또한 검색엔진 노출 유리
// client 컴포넌트는 로딩속도가 느림 1. js 많이 필요 2. hydration이라는 과정을 거쳐야함(리액트 문법을 쓰기위해서 html을 유저에게 쏴주고 그 html을 리액트로 분석하는 과정)

// 큰 페이지는 server component로 , js 기능 필요한 곳만 client component

import age from './data.js';

export default function Cart(){
    return(
        <div>
        <h4 className="title">Cart</h4>
        <div className="cart-item">
          <p>상품명 {age}</p>
          <p>$40</p>
          <p>1개</p>
        </div>
        <CartItem />
      </div>
    );
}

function CartItem(){
    return(
        <div className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </div>
    )
}
//재사용이 잦은 html 덩어리들을 주로 component로 만드는게 좋음
