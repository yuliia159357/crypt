import React, {useState, useEffect} from 'react'
import Head from "next/head";
import styles from "./cezar.module.sass";

const Cezar = () => {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const [text, textHandler] = useState({})
    const [resultText, resultTextHandler] = useState(null)
    const [action, actionHandler] = useState('crypt')
    const result = []

    const crypt = (e) => {
        e.preventDefault();
        (text.word.split("")).map((letter, index) => {
            alphabet.map((alphabetLetter, alphabetIndex) => {
                if(letter === alphabetLetter){
                    if(alphabetIndex + +text.step >= alphabet.length) {
                        result.push(alphabet[alphabetIndex + +text.step - alphabet.length])
                    }
                    if(alphabetIndex + +text.step < 0){
                        result.push(alphabet[alphabet.length - alphabetIndex + +text.step])
                    }
                    else{
                        result.push(alphabet[alphabetIndex + +text.step])
                    }
                }
            })
        })
        console.log(result)
        resultTextHandler(result.join(''))
        e.target.reset()
    }

    const checkBigStep = async () => {
        if(action === 'decrypt'){
            await textHandler({step: (text.step % alphabet.length) * (-1), word: text?.word ? text.word : null})
        } else {
            await textHandler({step: text.step % alphabet.length, word: text?.word ? text.word : null})
        }
    }

    useEffect(() => {
        console.log(text)
        if(Math.abs(+text.step) > alphabet.length) {
            checkBigStep().then(r => console.log(alphabet.length))
        }

    }, [text])
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <hr/>
            <div className={styles.Container}>
                <form onSubmit={(e) => crypt(e)} action="">
                    <h1>Шифр Цезаря</h1>
                    <select name="" id="" onChange={(e) =>actionHandler(e.target.value)}>
                        <option value="crypt">crypt</option>
                        <option value="decrypt">decrypt</option>
                    </select>
                    <label htmlFor="">
                        {
                            `Введіть слово для ${action === 'crypt' ? 'шифрування' : 'розшифрування'}:`
                        }
                        <input type="text" onChange={(e) => textHandler({word:e.target.value.toLocaleLowerCase(), step:text?.step ? text.step : null})}/>
                    </label>
                    <label htmlFor="">
                        Крок зміщення:
                        <input type="number" onChange={(e) => textHandler({step:e.target.value , word:text?.word ? text.word : null})}/>
                    </label>
                    <h1>{resultText ? resultText : 'Тут буде шифрований текст'}</h1>
                    <button type='submit'>{`${action === 'crypt' ? 'шифрування' : 'розшифрування'}`}</button>
                </form>
            </div>
            <hr/>
        </div>
    )
};

export default Cezar;