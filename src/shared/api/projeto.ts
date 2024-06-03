
import axios from 'axios';

export async function getProjeto(idProjeto: string) {

    const response = await axios.get<Projeto>(
        `https://my.api.mockaroo.com/projetos/${idProjeto}`,
        {
            headers: {
                'X-API-Key': 'b843f290'
            }
        }
    )

    return response.data;
}