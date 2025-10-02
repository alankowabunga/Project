// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { ListHome } from './ListHome'
import { CheckOut } from './CheckOut'
import { NavBar } from '../Header/NavBar'

export const CartPage = () => {
  return (
    <>
      <NavBar />
      <div className="cartPage-container mt-5">
        <div className="row row-cols-1 row-cols-sm-2">
          <div className="col col-sm-7 mb-5"><ListHome /></div>
          <div className="col col-sm-5 "><CheckOut /></div>
        </div>
      </div>
    </>
  )
}
