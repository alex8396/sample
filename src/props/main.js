function Main({BodyProps}) {
    function hello(e) {
        alert(e.target.name);
    }
    return(
        <div>
            <p>이름: {BodyProps.name}</p>
            <p>강좌명: {BodyProps.object}</p>

            <button name='1번' onClick={(e)=>{alert(e.target.name)}}>
                1번클릭
            </button>
            <button name='2번' onClick={hello}>
                2번클릭
            </button>
        </div>
    );
}

export default Main;