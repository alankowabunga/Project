// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useContext } from "react";
import "../../App.css";
import {
    faMagnifyingGlassPlus,
    faPenToSquare,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { InputContext } from "../Context/Context";



export const Rows = () => {

    const { input, setInput, getData, data, setData } = useContext(InputContext);

    // 處理點擊垃圾桶刪除 User
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;

    const deleteUser = async (id: any) => {
        await axios.delete(`http://34.229.238.216:8080/api/users/${id}`);
        getData();
    };

    return (
        <>
            {/*先用 filter() 過濾是否相符輸入值，再 map return*/}
            {data
                .filter((item) => {
                    return input === ""
                        ? item
                        : item.first_name
                            .toLowerCase()
                            .includes(input.toLowerCase()) ||
                        item.last_name
                            .toLowerCase()
                            .includes(input.toLowerCase()) ||
                        item.email
                            .toLowerCase()
                            .includes(input.toLowerCase());
                })
                .map((item) => (
                    <tr key={item.id} className="table-group-divider">
                        <th>{item.id}</th>
                        <td>{item.first_name}</td>
                        <td className="hidden">{item.email}</td>
                        <td className="p-2 action">
                            <Link to={`/viewuser/${item.id}`}>
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlassPlus}
                                    className="text-secondary"
                                />
                            </Link>
                            <Link to={`/edituser/${item.id}`}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </Link>
                            <FontAwesomeIcon
                                icon={faTrash}
                                className="text-danger bin"
                                onClick={() => deleteUser(item.id)}
                            />
                        </td>
                    </tr>
                ))}
        </>
    );
};
