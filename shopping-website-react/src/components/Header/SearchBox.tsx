// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { useTypewriter } from 'react-simple-typewriter'
import { CartContext } from '../Context/Context'


export const SearchBox = () => {

  const {filterDispatch} = useContext(CartContext)

    const [text] = useTypewriter({
        words:["Glove","Jacket","...etc"],
        typeSpeed:80,
        deleteSpeed:50,
        delaySpeed:1500,
        loop:0
    })

  return (
    <Form.Control type="search"
    placeholder={`Search:  ${text}`}
    onChange={(e)=>filterDispatch({
      type:"SORT_BY_SEARCH",
      payload:e.target.value
    })}
    />
  )
}
