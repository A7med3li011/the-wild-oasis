
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Loader from '../../UI/Loader'




export default function SalesChart({ bookings }) {

    const color = "#1d4ed8b3"
    

    const arr = []

    if (!bookings.length) return <Loader />
    bookings.map(book => arr.push({ label: book.endDate.split("").splice(5, 5).join(""), totalSales: book.totalPrice, extraSales: book.extraPrice }))

    return (
        <div className=' my-10'>
            <h2>Sales</h2>
            <ResponsiveContainer height={300} width={"100%"}>

                <AreaChart data={arr} >
                    <XAxis tick={{ fill: "teal" }} dataKey={"label"} />
                    <YAxis tick={{ fill: "teal" }} unit={"$"} />
                    <Tooltip />
                    <CartesianGrid />
                    <Area dataKey="totalSales" type="monotone" stroke='blue' fill={color} />
                    <Area dataKey="extraSales" type="monotone" stroke='blue' fill={"green"} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
