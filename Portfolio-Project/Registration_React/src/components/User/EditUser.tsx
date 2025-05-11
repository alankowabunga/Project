// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React, { useEffect, useState ,useContext } from "react";
import { Navbar } from "../Main/Navbar";
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import { Axios } from "axios";
import { Placeholder } from "react-bootstrap";
import { InputContext } from "../Context/Context";

export const EditUser = () => {

    const {getData}=useContext(InputContext);

    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadSelectedUser();
        console.log("edit id:", id)
    }, [])

    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;

    // 這裡跟其他元件的 user、setUser 不同，這裡只需要被選重的單一資料，因此獨立創建 useState 儲存使用者輸入的值，初始值設定為個欄位名稱。
    const [userInfo, setUserInfo] = useState({
        first_name: "",
        last_name: "",
        email: "",
        age: undefined
    })

    // 因為是編輯 user，因此在點擊編輯時就要將 user 原先儲存的的資訊放入 input 框框中。並利用 useEffect 在元件渲染時自動執行
    const loadSelectedUser = async () => {
        const selectedUser = await axios.get(`http://34.229.238.216:8080/api/users/${id}`);
        setUserInfo(selectedUser.data);
        setLoading(false);
    }


    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.put(`http://34.229.238.216:8080/api/users/${id}`, userInfo)
        getData();
        navigate("/")
    }

    // 利用解構賦值，將各屬性取出方便使用
    const { first_name, last_name, email, age } = userInfo;

    return (
        <>
            <Navbar />

            <form onSubmit={(e) => handleSubmit(e)} className="border border-3 p-3 rounded m-2">
                <div className="fs-2 mb-3 text-decoration-underline">Edit User</div>
                {loading ? (
                    <>
                        <div className="mb-3">
                            <label htmlFor="first_name" className="form-label">First Name</label>
                            <Placeholder animation="glow">
                                <Placeholder bg="warning" className="w-100" size="lg" />
                            </Placeholder>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="last_name" className="form-label">Last Name</label>
                            <Placeholder animation="glow">
                                <Placeholder className="w-100" size="lg" />
                            </Placeholder>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <Placeholder animation="glow">
                                <Placeholder bg="success" className="w-100" size="lg" />
                            </Placeholder>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age</label>
                            <Placeholder animation="glow">
                                <Placeholder bg="info" className="w-100" size="lg" />
                            </Placeholder>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="mb-3">
                            <label htmlFor="first_name" className="form-label">First Name</label>
                            <input type="text" value={first_name} name="first_name" className="form-control" id="first_name" onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="last_name" className="form-label">Last Name</label>
                            <input type="text" value={last_name} name="last_name" className="form-control" id="last_name" onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={email} onChange={(e) => onInputChange(e)} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input type="number" className="form-control" id="age" name="age" value={age} onChange={(e) => onInputChange(e)} />
                        </div>
                    </>
                )}




                <button type="submit" className="btn btn-primary mx-2" >Submit</button>
                <Link to="/" className="btn btn-danger ms-3">Cancel</Link>
            </form>
        </>
    )
};

