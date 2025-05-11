// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { useContext } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { InputContext } from "../Context/Context";

export const PlaceholderText = () => {
    const [placeholder] = useTypewriter({
        words: ["Clark Kent", "Burce Wayne", "...etc"],
        typeSpeed: 80,
        deleteSpeed: 80,
        delaySpeed: 1000,
        loop: 0
    })

    // 取得 Context.tsx 建立包裹 input、setInput 的 value
    const {input,setInput} = useContext(InputContext);

    return (
        <input
            className="form-control me-2"
            type="search"
            id="ph"
            placeholder={`Search : ${placeholder}`}
            value={input}
            onChange={(e) =>setInput(e.target.value)}
        />
    );
};
