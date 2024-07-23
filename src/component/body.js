import React, { useRef } from 'react';

const Body = function() {
    const topRef = useRef(null); // ref 생성

    const scrollToTop = () => { // 화살표 함수 문법 수정
        topRef.current.scrollIntoView({ behavior: 'smooth' }); // 부드러운 스크롤
    };

    return (
        <div>
            {/* 상단으로 스크롤할 요소 */}
            <div ref={topRef} style={{ height: '1500px' }}>
                <p>본문 내용</p>
            </div>
            <button onClick={scrollToTop}>Top</button>
        </div>
    );
};

export default Body;
