
export default function Home() {
  let name = '소연';
  return (
    <div>
      {/* 리액트에서 쓰는 html 문법을 jsx라고 함 */}
      <div>
      <h2 className = "logo">{name}후레시</h2>
      <p  className = "welcome">환영합니다</p>
      </div>
    </div>
  );
}
