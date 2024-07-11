"use client"

import { defaultCounter } from "@/lib/features/counter/CounterSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const DefaultCounter = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(defaultCounter(+localStorage.getItem("counter")))
    }, [])

    return null
}

export default DefaultCounter