import { useState } from "react";
import '../css/body.css'

function Body({ weather }) {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const [gender, setGender] = useState('');

    function onChangeText(event) {
        setText(event.target.value);
    }

    function onChangeDescription(event) {
        setDescription(event.target.value);
    }

    function onChangeGender(event) {
        setGender(event.target.value);
    }

    // 배경 클래스를 결정하는 함수
    const backgroundClass = gender === '남자' ? 'bg-male' : gender === '여자' ? 'bg-female' : '';

    return (
        <div className={`body-container ${backgroundClass}`}>
            <p>오늘은 {weather}</p>
            <input type="text" value={text} onChange={onChangeText} placeholder="아이디를 입력하세요" />
            <p>아이디 : {text}</p>
            <textarea value={description} onChange={onChangeDescription} placeholder="사유를 입력하세요..."></textarea>
            <div className="description-display">사유 : {description}</div>
            <select value={gender} onChange={onChangeGender} className="select-gender">
                <option value="">선택하세요</option>
                <option>남자</option>
                <option>여자</option>
            </select>
            <p>성별: {gender}</p> {/* 선택된 성별 표시 */}
        </div>
    );
}

export default Body;
