// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { Breadcrumb } from 'react-bootstrap'
import {AiOutlineHome} from 'react-icons/ai/index'

export const BreadCrumb = () => {
  return (
    <Breadcrumb className='mb-0'>
    
      <Breadcrumb.Item><AiOutlineHome className="fs-4 text-dark text-sm"/></Breadcrumb.Item>

      <Breadcrumb.Item className="text text-sm">
        Library
      </Breadcrumb.Item>

      <Breadcrumb.Item className="text text-sm">Data</Breadcrumb.Item>

    </Breadcrumb>
  )
}
