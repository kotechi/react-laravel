import { useEffect, useState } from "react";
import { Link } from 'react-router'

export default function BarangList() {
    const [barangsList, setBarangsList] = useState([])
    useEffect(() => {
        const apiUrl = fetch("http://127.0.0.1:8000/api/barang")
        const data = apiUrl.then(res => res.json())
        data.then(item => {
            setBarangsList(item)
        })
    },)
    return (
            <div id="barang-list">
                {barangsList.map((barang, index) => (
                    <li key={index}>
                        <h1></h1>
                        <h1>{barang.harga_barang}</h1>
                        <Link to={`/barang/${barang.id}`}>{barang.nama_barang}</Link>
                    </li>
                ))}
            </div>
        
    )
}