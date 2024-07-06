// Supabase
import { supabase } from '../config/Supabase';

export const getAll = async () => {
    let { data: veggies, error } = await supabase
        .from('veggies')
        .select('*');
        if (error) {
            alert('Our piggies are lost! Please try again later.');
        };
        if (veggies) {
            return veggies;
        }
}

export const getOne = async (recordId) => {
    let { data: veggies, error } = await supabase
        .from('veggies')
        .select("*")
        // Filters
        .eq('id', recordId);

        // error handling
        if (error) {
            alert('Our piggies are lost! Please try again later.');
        };
        if (veggies) {
            return veggies;
        }
}

export const create = async () => {

}

export const edit = async (id, data) => {
    const { res, error } = await supabase
        .from('veggies')
        .update(data)
        .eq('id', id)
        .select();

    if (error) {
        alert('Our piggies are lost! Please try again later.');
    };
    if (res) {
        return res;
    }
}
