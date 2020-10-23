import React, {useState, useEffect} from 'react'
import styles from "./cezar.module.sass";

const Vigenere = () => {

    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const [text, textHandler] = useState({})
    const [resultText, resultTextHandler] = useState(null)
    const [action, actionHandler] = useState('crypt')
    const result = []
    const matrix = []
    let tempArr = []
    let xy = []


    const crypt = (e) => {
        e.preventDefault();
        alphabet.map((item, index) => {
            alphabet.map((innerItem, innerIndex) => {
                tempArr.push(alphabet[innerIndex + index >= alphabet.length ? innerIndex + index - alphabet.length : innerIndex + index])
            })
            matrix.push(tempArr)
            console.log(matrix)
            tempArr = []
        })
            const ys = getIndexFromAlphabet(text.keyWord)
            const xs = getIndexFromAlphabet(text.word)
            ys.map((item, itemIndex) =>  {
                console.log({y: item,x:xs[itemIndex]})
                console.log(`${matrix[item][xs[itemIndex]]} lalala`)
            })
        e.target.reset()
    }

    const getIndexFromAlphabet = (string, letter) => {
        console.log(string)
        const array = string.split("")
        let index = []
        array.map((arrayLetter, arrayIndex) => {
            alphabet.map((alphabetLetter, alphabetIndex) => {
                if (arrayLetter === alphabetLetter) {
                    index.push(alphabetIndex)
                }
            })
        })
        return index
    }

    useEffect(() => {
        console.log(text)

    }, [text])

    return (
        <div>
            <hr/>
            <div className={styles.Container}>
                <form onSubmit={(e) => crypt(e)} action="">
                    <h1>Шифр Віженера</h1>
                    <select name="" id="" onChange={(e) =>actionHandler(e.target.value)}>
                        <option value="crypt">crypt</option>
                        <option value="decrypt">decrypt</option>
                    </select>
                    <label htmlFor="">
                        {
                            `Введіть слово для ${action === 'crypt' ? 'шифрування' : 'розшифрування'}:`
                        }
                        <input type="text" onChange={(e) => textHandler({word:e.target.value.toLocaleLowerCase(), keyWord:text?.keyWord ? text.keyWord : null})}/>
                    </label>
                    <label htmlFor="">
                        Ключ шифрування:
                        <input type="text" onChange={(e) => textHandler({keyWord:e.target.value , word:text?.word ? text.word : null})}/>
                    </label>
                    <h1>{resultText ? resultText : 'Тут буде шифрований текст'}</h1>
                    <button type='submit'>{`${action === 'crypt' ? 'шифрування' : 'розшифрування'}`}</button>
                </form>
            </div>
            <hr/>
        </div>
    );
};

export default Vigenere;