import { useState } from "react"

export const useGetTourBussyDates = () => {
    const [bussyDates, setBussyDates] = useState()

    const handleGetBussyDates = (tourId) => {
        fetch(`http://localhost:8080/Tour/fechas-ocupadas-por-tour/${tourId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                setBussyDates(data)
            })
    }

    return [bussyDates, handleGetBussyDates]
}