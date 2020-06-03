import { Request, Response} from 'express'
import knex from '../database/connections';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('item').select('*');

    const serializedItems = items.map( item => {
      return {
        title: item.name,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      };
    });
  
    return response.json(serializedItems);
  }
}

export default ItemsController;