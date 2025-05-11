// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { useState } from "react";
import { Nav, Offcanvas, Stack } from "react-bootstrap";
import { TbFilterCog } from "react-icons/tb/index";
import { FilterPanel } from "../Main/FilterBox/FilterPanel";

export const Tabs = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Stack
      direction="horizontal"
      className="mb-5 p-1 pe-4 alert-dark bg-success-subtle rounded"
    >
      <TbFilterCog
        onClick={handleShow}
        className="filter-icon rounded fs-2 ms-3 d-block d-sm-none text-danger"
      />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>Products Filter</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* 自訂義篩選器 */}
          <FilterPanel />
        </Offcanvas.Body>
      </Offcanvas>

    </Stack>
  );
};
