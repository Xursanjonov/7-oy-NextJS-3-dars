"use client"
import { defaultCounter } from "@/lib/features/counter/CounterSlice"
import { defaultWishList } from "@/lib/features/wishlist/wishlistSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const DefaultCounter = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(defaultCounter(+localStorage.getItem("counter")))
        dispatch(defaultWishList(JSON.parse(localStorage.getItem("wishlist")) || []))
    }, [])

    return null
}

export default DefaultCounter