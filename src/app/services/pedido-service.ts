import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Pedido } from '../models/pedido';

@Service()
export class PedidoService {
    private http = inject(HttpClient)
    readonly URL = 'http://localhost:3000/pedidos'

    getPedidos(){
        return this.http.get<Pedido[]>(this.URL)
    }

    getPedidoById(id: string){
        return this.http.get<Pedido>(`${this.URL}/${id}`)
    }

    addPedido(p: Pedido){
        return this.http.post<Pedido>(this.URL ,p)
    }

    deletePedido(id: string){
        return this.http.delete<void>(`${this.URL}/${id}`)
    }

}
