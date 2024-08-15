import toast from "react-hot-toast"
import supabase from "./supabase"



export async function getCabins() {

    let { data, error } = await supabase.from('cabins').select('*')

    if (error) {
        console.log(error)
    }

    return data

}

export async function deleteCabin(id) {

    const { error: errorBook } = await supabase
        .from('booking')
        .delete()
        .eq('cabinId', id)

    if (errorBook) {
        console.log(errorBook)
    }

    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)
    if (error) {
        console.log(error)
        toast.error("Delete cancelled")
    }
    toast.success("cabin deleted successfully")
    return data

}
export async function insertCabin(cabin) {


    const { data, error } = await supabase
        .from('cabins')
        .insert([cabin])
        .select()
    if (error) {

        return toast.error(error.message)
    }


    // uploadImage

    toast.success("Added Cabin successfully")

    return data

}
export async function updateCabin(cabin, id) {
    console.log(cabin, "cabin")
    console.log(id, "id")
    if (!id) return


    const { data, error } = await supabase
        .from('cabins')
        .update(cabin)
        .eq('id', id)
        .select()
    if (error) {

        return toast.error(error.message)
    }


    // uploadImage


    toast.success("added successfully")

    return data

}

//https://bbtrubynsmnuzkrriwgq.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-07-21T17%3A36%3A08.254Z

