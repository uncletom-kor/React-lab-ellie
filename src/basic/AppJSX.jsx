import './App.css';

function AppJSX() {
    const name = '토미';
    const myName = '줄리';
    const list = ['바나나', '복숭아', '토마토', '포도']; //배열
    return (
        <>
            <h1 className="orange">{`Hello! ${name}`}</h1>
            <h2>{`내 이름은 ${myName}야.`}</h2>
            <p>{`반가워 ${name}!`}</p>
            <ul>
                <li>우유</li>
                <li>딸기</li>
                <li>사과</li>

                {list.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
            <ul>
                {list.map(function (item) {
                    return <li>{item}</li>;
                })}
            </ul>
            <img
                style={{ width: '200px', height: '200px' }}
                src="https://images.unsplash.com/photo-1682685797795-5640f369a70a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                alt="nature"
            />
        </>
    );
}

export default AppJSX;
