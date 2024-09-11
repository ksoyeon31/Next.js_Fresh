//맨 위에 'use client'를 작성하는 순간 밑에 코드들은 클라이언트 컴포넌트가 됨
// 중간에 끼워
// 이 밑에는 기본적으로 다 서버 컴포넌트임
export default function Cart(){
    return(
        <div>
        <h4 className="title">Cart</h4>
        <div className="cart-item">
          <p>상품명</p>
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
