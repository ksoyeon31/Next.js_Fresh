
export default function subLayout({children}) {
    return (
      <html lang="en">
        <body>
        <div>
            <p>현대카드 무이자 이벤트 중</p>
            {children}
          </div>
        </body>
      </html>
    );
  }