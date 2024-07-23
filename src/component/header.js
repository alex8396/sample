import '../css/header.css';
import React, { useRef, useState, useEffect } from 'react';

function Header() {
    const inputRef1 = useRef(null); // 첫 번째 입력 필드 참조
    const inputRef2 = useRef(null); // 두 번째 입력 필드 참조
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(null); // 타이머 ID 저장

    const handleStart = () => {
        // 이미 타이머가 실행 중인 경우 중복 실행 방지
        if (intervalId) return;

        const current = setInterval(() => {
            setCount(prevCount => prevCount + 1); // 이전 상태를 기반으로 카운트 증가
        }, 1000);

        setIntervalId(current); // 타이머 ID 저장
    };

    const handleStop = () => {
        // 타이머 정지
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null); // ID 초기화
        }
    };

    useEffect(() => {
        // 컴포넌트 언마운트 시 타이머 정리
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);

    const onFocusFirstInput = () => {
        inputRef1.current.focus(); // 첫 번째 입력 필드에 포커스
    };

    const onClear = () => {
        inputRef2.current.value = "";
        inputRef2.current.focus();
    };

    return (
        <div>
            <div>
                <input ref={inputRef1} type='text' />
                <button onClick={onFocusFirstInput}>포커스</button>
            </div>
            <div>
                <input ref={inputRef2} type='text' />
                <button onClick={onClear}>입력완료</button>
            </div>
            <div>
                <p>타이머 : {count}</p> {/* 카운트 값을 표시 */}
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button> {/* 타이머 정지 버튼 추가 */}
            </div>
        </div>
    );
}

export default Header;
