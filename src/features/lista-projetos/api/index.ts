
import axios from 'axios';

export async function getProjetos() {

    const response = await axios.get<Projeto[]>('https://my.api.mockaroo.com/projetos', {
        headers: {
            'X-API-Key': 'b843f290'
        }
    })

    return response.data;
}