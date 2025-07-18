import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
export default function BarangDetail() {
    const {idParams} = useParams()
    const id_barang = +idParams
    const [barangDetail, setBarangDetail] = useState([])
    useEffect(() => {
        const apiUrl = fetch('http://127.0.0.1:8000/api/barang/'+ id_barang)
        const data = apiUrl.then(res => res.json())
        data.then(item => {
            setBarangDetail(item)
        })
    }, [])
console.log(id_barang)

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <h1>{barangDetail.nama_barang}</h1>
        </div>
    )
}