import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { CartService } from '../cart.service'
import { IShippingPrice } from '../interfaces'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit{

  shippingCosts!: Observable<IShippingPrice[]>

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices()
  }
}
