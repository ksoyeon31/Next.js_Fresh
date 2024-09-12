'use client';
import { useState } from 'react';


export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
    //html 코드 안에서는 반복문 for과 같은 문법을 쓰지 못하기 때문에 반복 작업을 실행하고 싶다면 map 함수를 적용시키면 됨.
    //map 함수는 "array".map(function(function은 생략가능)()=>) 이런식으로 작성

    let [수량, 수량변경] = useState([0, 0, 0]) //client 컴포넌트이기 때문에 사용 가능
    //state의 장점: state가 변경되면 state 사용하는 html 부분도 재랜더링 됨 그냥 변수 사용하면 재랜더링 안됨


    return (
        <div>
            <h4 className='logo'>상품목록</h4>
            {//반복(map) 코드가 많으면 헷갈리기 때문에 유니크한 key값 같은 걸 설정하기도 함

                상품.map((a, i) => {
                    return (
                        <div className='food' key={i}>
                            <img src={'food' + i + '.png'} className='food-img' />
                            {/* public 폴더 안에 있으면 /로 바로 입력해도 됨 */}
                            <h4>{a} 40원</h4>
                            {/* {a}아니면 {상품[i]}  */}
                            <button onClick={() => {
                                let copy = [...수량]
                                copy[i]--
                                수량변경(copy)
                            }}>-</button>
                            <span> {수량[i]} </span>
                            <button onClick={() => {
                                let copy = [...수량]
                                copy[i]++
                                수량변경(copy)
                            }}>+</button>
                        </div >
                    )
                })
            }
        </div >
    );
}

//array변수.map(()=>{})
//map((이 안엔 a,i 이렇게 파라미터가 들어올 수 있는데 ))
//a는 array변수에 담긴 값을 하나씩 불러 오는 역할
//i는 0부터 array변수에 담긴 데이터 값의 개수만큼 1씩 증가하여 0,1,2,3 이런식으로 값을 가져오는 역할을 한다
//이때 반복할 값은 {}안에 정의하는데 return 값이 올 경우 array안의 데이터 값을 return 값으로 바꿔서 array의 데이터 개수만큼 반복하는 역할을 한다.
//return 10을 하게 된다면 상품.map을 실행하면 10,10,10 이라고 나옴.
