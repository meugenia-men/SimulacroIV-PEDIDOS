import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NuevoPedido } from './pages/nuevo-pedido/nuevo-pedido';
import { DetallePedido } from './pages/detalle-pedido/detalle-pedido';
import { ListadoPedidos } from './pages/listado-pedidos/listado-pedidos';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'nuevoPedido', component: NuevoPedido},
    {path: 'listadoPedidos', component: ListadoPedidos},
    {path: 'detallePedido/:id', component: DetallePedido}   
];
