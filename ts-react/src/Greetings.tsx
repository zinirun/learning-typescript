import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;
}

// const Greetings: React.FC<GreetingsProps> = ({name, mark='!'}) => {
//     return <div>
//         Hello, {name} {mark}
//     </div>
// }


// function 키워드로 만들어야 defaultProps가 가능함

function Greetings({name, mark, optional, onClick}: GreetingsProps) {
    const handleClick = () => onClick(name);
    return <div>
        Hello, {name} {mark}
        {optional && <p>{optional}</p>}
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    </div>
}

Greetings.defaultProps = {
    mark: '!'
}

export default Greetings;